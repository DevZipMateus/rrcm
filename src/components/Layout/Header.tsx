
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="nav-link text-lg font-medium">Início</a>
          <a href="#services" className="nav-link text-lg font-medium">Serviços</a>
          <a href="#about" className="nav-link text-lg font-medium">Quem Somos</a>
          <a href="#team" className="nav-link text-lg font-medium">Equipe</a>
          <a href="#contact" className="nav-link text-lg font-medium">Contato</a>
          
          <a 
            href="https://wa.me/5584996877697" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#e67e22] hover:bg-[#d35400] text-white font-medium px-6 py-2 rounded-md transition-all hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-gray-700 p-2 rounded-full hover:bg-gray-100 focus:outline-none"
          onClick={closeMenu}
          aria-label="Fechar menu"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col space-y-6 mt-4">
          <a href="#" onClick={closeMenu} className="text-xl font-medium text-gray-900 py-2 border-b border-gray-200">Início</a>
          <a href="#services" onClick={closeMenu} className="text-xl font-medium text-gray-900 py-2 border-b border-gray-200">Serviços</a>
          <a href="#about" onClick={closeMenu} className="text-xl font-medium text-gray-900 py-2 border-b border-gray-200">Quem Somos</a>
          <a href="#team" onClick={closeMenu} className="text-xl font-medium text-gray-900 py-2 border-b border-gray-200">Equipe</a>
          <a href="#contact" onClick={closeMenu} className="text-xl font-medium text-gray-900 py-2 border-b border-gray-200">Contato</a>
          
          <a 
            href="https://wa.me/5584996877697" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#e67e22] hover:bg-[#d35400] text-white font-medium px-6 py-3 rounded-md text-center"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
