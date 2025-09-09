from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import asyncio
from concurrent.futures import ThreadPoolExecutor


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: Optional[str] = None
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new")  # new, read, replied

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    subject: str
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Email sending function
def send_email(to_email: str, subject: str, body: str, contact_data: dict):
    """Send email using Gmail SMTP"""
    try:
        # Gmail SMTP configuration
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        sender_email = os.environ.get('GMAIL_EMAIL')
        sender_password = os.environ.get('GMAIL_APP_PASSWORD')
        
        if not sender_email or not sender_password:
            raise Exception("Gmail credentials not configured")

        # Create message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = to_email
        msg['Subject'] = subject

        # Email body with contact form data
        email_body = f"""
        Nova mensagem de contato recebida:
        
        Nome: {contact_data['name']}
        Email: {contact_data['email']}
        Empresa: {contact_data.get('company', 'Não informado')}
        Assunto: {contact_data['subject']}
        
        Mensagem:
        {contact_data['message']}
        
        ---
        Enviado em: {datetime.now().strftime('%d/%m/%Y às %H:%M')}
        """
        
        msg.attach(MIMEText(email_body, 'plain'))

        # Connect to Gmail and send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, to_email, text)
        server.quit()
        
        return True
    except Exception as e:
        logging.error(f"Error sending email: {str(e)}")
        return False

# Contact form endpoints
@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(contact_data: ContactMessageCreate):
    """Create new contact message and send email notification"""
    try:
        # Create contact message object
        contact_dict = contact_data.dict()
        contact_obj = ContactMessage(**contact_dict)
        
        # Save to database
        await db.contact_messages.insert_one(contact_obj.dict())
        
        # Send email notification in background
        executor = ThreadPoolExecutor(max_workers=1)
        loop = asyncio.get_event_loop()
        
        # Email to company (Matrix Code)
        company_email = os.environ.get('COMPANY_EMAIL', 'contato@matrixcode.tech')
        subject = f"Nova mensagem de contato: {contact_data.subject}"
        
        # Send email asynchronously
        await loop.run_in_executor(
            executor, 
            send_email, 
            company_email, 
            subject, 
            "", 
            contact_dict
        )
        
        # Send auto-reply to client
        auto_reply_subject = "Recebemos sua mensagem - Matrix Code"
        auto_reply_body = f"""
        Olá {contact_data.name},
        
        Recebemos sua mensagem e entraremos em contato em breve!
        
        Dados da sua mensagem:
        - Assunto: {contact_data.subject}
        - Data: {datetime.now().strftime('%d/%m/%Y às %H:%M')}
        
        Obrigado por entrar em contato com a Matrix Code.
        
        Atenciosamente,
        Equipe Matrix Code
        """
        
        await loop.run_in_executor(
            executor, 
            send_email, 
            contact_data.email, 
            auto_reply_subject, 
            auto_reply_body,
            {"name": "Matrix Code", "email": company_email, "message": auto_reply_body, "subject": auto_reply_subject}
        )
        
        return contact_obj
        
    except Exception as e:
        logging.error(f"Error creating contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Erro ao enviar mensagem")

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages (admin endpoint)"""
    messages = await db.contact_messages.find().sort("timestamp", -1).to_list(1000)
    return [ContactMessage(**msg) for msg in messages]

@api_router.put("/contact/{message_id}/status")
async def update_message_status(message_id: str, status: str):
    """Update contact message status"""
    result = await db.contact_messages.update_one(
        {"id": message_id},
        {"$set": {"status": status}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Message not found")
    return {"message": "Status updated successfully"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
