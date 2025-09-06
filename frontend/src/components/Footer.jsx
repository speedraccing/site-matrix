import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const { contact } = mockData;

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg">
                <Code className="h-6 w-6 text-gray-950" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Matrix Code
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformando dados em decisões inteligentes através de dashboards,
              sites modernos e automações que potencializam o crescimento do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a
                href={contact.social.linkedin}
                className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={contact.social.github}
                className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={contact.social.instagram}
                className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Home', 'Sobre', 'Portfólio', 'Contato'].map((item, index) => (
                <li key={item}>
                  <Link
                    to={index === 0 ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">{contact.email}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">{contact.phone}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Matrix Code. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;