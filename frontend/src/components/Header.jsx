import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/about' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Contato', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="https://customer-assets.emergentagent.com/job_matrix-dashboards/artifacts/gyhsbi5l_matrix_code_header.png"
              alt="Matrix Code"
              className="h-10 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.6)] ${
                  isActive(item.href)
                    ? 'text-green-400 border-b-2 border-green-400 drop-shadow-[0_0_8px_rgba(0,255,0,0.6)]'
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.6)] transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-gray-800'
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;