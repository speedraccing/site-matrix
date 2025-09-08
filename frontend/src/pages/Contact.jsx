import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { mockData } from '../mock';

const Contact = () => {
  const { contact } = mockData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui será integrado com o backend
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em <span className="text-green-400 drop-shadow-[0_0_15px_rgba(0,255,0,0.6)]">Contato</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pronto para transformar sua ideia em realidade? 
              Vamos conversar sobre seu próximo projeto
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Vamos <span className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,0,0.6)]">Conversar</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Estamos aqui para ajudar você a transformar suas ideias em soluções 
                tecnológicas inovadoras. Entre em contato conosco!
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="bg-gray-900/80 border-gray-700 hover:border-green-500/70 hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.8)] transition-all duration-300">
                        <Mail className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Email</h3>
                        <p className="text-gray-300">{contact.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/80 border-gray-700 hover:border-green-500/70 hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.8)] transition-all duration-300">
                        <Phone className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Telefone</h3>
                        <p className="text-gray-300">{contact.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/80 border-gray-700 hover:border-green-500/70 hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.8)] transition-all duration-300">
                        <MapPin className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Localização</h3>
                        <p className="text-gray-300">{contact.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-white font-semibold mb-4">Nos siga nas redes sociais</h3>
                <div className="flex space-x-4">
                  <a
                    href={contact.social.linkedin}
                    className="p-3 bg-gray-800 hover:bg-green-500 rounded-lg transition-all duration-300 text-gray-300 hover:text-black hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.6)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={contact.social.github}
                    className="p-3 bg-gray-800 hover:bg-green-500 rounded-lg transition-all duration-300 text-gray-300 hover:text-black hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.6)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={contact.social.instagram}
                    className="p-3 bg-gray-800 hover:bg-green-500 rounded-lg transition-all duration-300 text-gray-300 hover:text-black hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.6)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-gray-900/80 border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Envie uma Mensagem</CardTitle>
                  <CardDescription className="text-gray-300">
                    Preencha o formulário abaixo e entraremos em contato em breve
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">Nome *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500/50 transition-all duration-300"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500/50 transition-all duration-300"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="text-white">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500/50 transition-all duration-300"
                          placeholder="Nome da empresa"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-white">Assunto *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500/50 transition-all duration-300"
                          placeholder="Assunto da mensagem"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500/50 transition-all duration-300"
                        placeholder="Descreva seu projeto ou dúvida..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.6)] hover:scale-105"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;