
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const isMobile = useIsMobile();
  
  // Start pulsing effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false); // Stop pulsing when opened
  };
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-4 right-3' : 'bottom-8 right-8'} z-50`}>
      {/* Contact Options */}
      <div className={`flex flex-col-reverse items-end mb-3 space-y-reverse space-y-2 transition-all duration-500 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <a 
          href="https://wa.me/5584996877697" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-black text-[#0086c3] px-4 py-2 rounded-md shadow-lg hover:bg-neutral-800 transition-all duration-300 gap-2 font-medium"
        >
          <span className="mr-1">WhatsApp</span>
        </a>
        
        <a 
          href="tel:+5584996877697" 
          className="flex items-center bg-black text-[#0086c3] px-4 py-2 rounded-md shadow-lg hover:bg-neutral-800 transition-all duration-300 gap-2 font-medium"
        >
          <span className="mr-1">Ligar</span>
        </a>
        
        <a 
          href="mailto:rrservicosemanutencoes22@gmail.com" 
          className="flex items-center bg-black text-[#0086c3] px-4 py-2 rounded-md shadow-lg hover:bg-neutral-800 transition-all duration-300 gap-2 font-medium"
        >
          <span className="mr-1">E-mail</span>
        </a>
      </div>
      
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className={`${isMobile ? 'p-3' : 'p-4'} rounded-full flex items-center justify-center transition-all duration-300 
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-[#25D366] hover:bg-[#20BD5C]'} 
          ${isOpen ? 'text-white' : 'text-white'} 
          ${isPulsing && !isOpen ? 'animate-pulse' : ''}
          transform hover:scale-105 active:scale-95 shadow-lg`}
        aria-label={isOpen ? "Fechar menu de contato" : "Abrir menu de contato"}
        style={{
          boxShadow: isOpen 
            ? '0 4px 12px rgba(239, 68, 68, 0.4)' 
            : '0 4px 12px rgba(37, 211, 102, 0.4)'
        }}
      >
        {isOpen ? (
          <X size={isMobile ? 18 : 22} />
        ) : (
          <div className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`}>
            <img src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" alt="WhatsApp" className="w-full h-full object-contain" />
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
