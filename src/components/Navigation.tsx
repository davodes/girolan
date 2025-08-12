import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navigationItems = [
    { href: '/', label: 'Inicio' },
    { href: '/aire-acondicionado', label: 'Aire Acondicionado' },
    { href: '/calefaccion', label: 'Calefacción' },
    { href: '/ventilacion', label: 'Ventilación' },
    { href: '/frio-industrial', label: 'Frío Industrial' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/clientes', label: 'Clientes' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const handleNavigation = (href: string) => {
    window.location.href = href;
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavigation(item.href)}
            className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
              currentPath === item.href
                ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                : 'text-gray-700'
            }`}
          >
            {item.label}
          </button>
        ))}
        
        {/* Contact Info */}
        <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
          <a href="tel:943458503" className="flex items-center text-sm text-gray-700 hover:text-primary-600 transition-colors">
            <Phone className="w-4 h-4 mr-1" />
            <span className="hidden xl:inline">943 458 503</span>
          </a>
          <a href="mailto:info@girolan.net" className="flex items-center text-sm text-gray-700 hover:text-primary-600 transition-colors">
            <Mail className="w-4 h-4 mr-1" />
            <span className="hidden xl:inline">info@girolan.net</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
        aria-label="Menú de navegación"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur-md">
          <nav className="flex flex-col space-y-4 p-6">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`text-left py-3 text-lg font-medium transition-colors duration-200 ${
                  currentPath === item.href
                    ? 'text-primary-600 bg-primary-50 px-4 rounded-lg'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Contact Info */}
            <div className="pt-6 mt-6 border-t border-gray-200 space-y-4">
              <a href="tel:+34XXXXXXXXX" className="flex items-center text-gray-700 hover:text-primary-600 transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                <span>XXX XXX XXX</span>
              </a>
              <a href="mailto:info@girolan.net" className="flex items-center text-gray-700 hover:text-primary-600 transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                <span>info@girolan.net</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;