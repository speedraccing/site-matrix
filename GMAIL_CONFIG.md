# 📧 Configuração do Gmail para Formulário de Contato

## ✅ **Status da Implementação:**
- ✅ Backend implementado com envio de email
- ✅ Formulário frontend integrado com backend
- ✅ Validação de email implementada
- ✅ Auto-resposta para clientes
- ✅ Notificação para empresa

## 🔧 **Como Configurar as Credenciais do Gmail:**

### **Passo 1: Ativar Verificação em 2 Etapas**
1. Acesse [myaccount.google.com](https://myaccount.google.com)
2. Vá em **Segurança** → **Verificação em duas etapas**
3. Ative a verificação em 2 etapas (necessário para senhas de app)

### **Passo 2: Gerar Senha de App**
1. No mesmo menu **Segurança**, procure por **Senhas de app**
2. Clique em **Selecionar app** → **Outro (nome personalizado)**
3. Digite: "Matrix Code Website"
4. Clique em **Gerar**
5. **Copie a senha de 16 caracteres** (sem espaços)

### **Passo 3: Configurar as Variáveis no Backend**
Edite o arquivo `/app/backend/.env`:

```env
# Gmail Configuration for Contact Form
GMAIL_EMAIL="seu-email@gmail.com"           # Seu email do Gmail
GMAIL_APP_PASSWORD="abcd efgh ijkl mnop"    # Senha de app gerada (16 caracteres)
COMPANY_EMAIL="contato@matrixcode.tech"     # Email que receberá as mensagens
```

### **Exemplo de Configuração:**
```env
GMAIL_EMAIL="matrixcode.startup@gmail.com"
GMAIL_APP_PASSWORD="abcd efgh ijkl mnop"
COMPANY_EMAIL="contato@matrixcode.tech"
```

## 🚀 **Funcionalidades Implementadas:**

### **1. Envio para Empresa:**
- Quando alguém preenche o formulário, um email é enviado para `COMPANY_EMAIL`
- Contém todos os dados: nome, email, empresa, assunto e mensagem
- Timestamp da submissão

### **2. Auto-resposta para Cliente:**
- Cliente recebe automaticamente um email de confirmação
- Confirma que a mensagem foi recebida
- Inclui dados da mensagem enviada

### **3. Armazenamento no Banco:**
- Todas as mensagens são salvas no MongoDB
- Status: "new", "read", "replied"
- Histórico completo de contatos

### **4. Validação de Email:**
- Validação automática do formato do email
- Verificação de domínio
- Prevenção de emails inválidos

## 📋 **Endpoints Disponíveis:**

```bash
# Enviar mensagem de contato
POST /api/contact
{
  "name": "João Silva",
  "email": "joao@empresa.com",
  "company": "Empresa XYZ",
  "subject": "Desenvolvimento de Dashboard",
  "message": "Gostaria de um orçamento..."
}

# Listar mensagens (admin)
GET /api/contact

# Atualizar status da mensagem
PUT /api/contact/{message_id}/status
{
  "status": "read"
}
```

## 🔒 **Segurança:**
- Usa senhas de app do Gmail (mais seguro que senha principal)
- Validação de email no backend
- CORS configurado adequadamente
- Dados sensíveis em variáveis de ambiente

## ⚠️ **Importante:**
1. **NUNCA** commite a senha de app no código
2. Use **APENAS** a senha de app de 16 caracteres (não a senha normal)
3. Mantenha as variáveis de ambiente seguras
4. A senha de app é específica para esta aplicação

## 🧪 **Testando:**
1. Configure as credenciais no `.env`
2. Reinicie o backend: `sudo supervisorctl restart backend`
3. Acesse o formulário no site
4. Preencha e envie uma mensagem
5. Verifique se recebeu o email na conta configurada

## 📞 **Troubleshooting:**
- **Erro "Gmail credentials not configured"**: Verifique se as variáveis estão no .env
- **Erro de autenticação**: Confirme que a verificação em 2 etapas está ativa
- **Emails não chegam**: Verifique spam/lixo eletrônico
- **Erro 535**: Senha de app incorreta ou não gerada

✅ **Formulário de contato 100% funcional e pronto para produção!**