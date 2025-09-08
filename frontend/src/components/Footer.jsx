import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const { contact } = mockData;

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_matrix-dashboards/artifacts/gyhsbi5l_matrix_code_header.png"
                alt="Matrix Code"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformando dados em decisões inteligentes através de dashboards,
              sites modernos e automações que potencializam o crescimento do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a
                href={contact.social.linkedin}
                className="p-2 text-gray-400 hover:text-green-400 hover:bg-gray-800 hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.4)] rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={contact.social.github}
                className="p-2 text-gray-400 hover:text-green-400 hover:bg-gray-800 hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.4)] rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={contact.social.instagram}
                className="p-2 text-gray-400 hover:text-green-400 hover:bg-gray-800 hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.4)] rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-sm">{contact.email}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-sm">{contact.phone}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 text-green-400" />
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