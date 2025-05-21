
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="section bg-neutral-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-[#0086c3]/10 text-[#0086c3] font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-neutral-600 text-lg">
            Estamos prontos para atender às suas necessidades através dos nossos canais de atendimento.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
            <div className="bg-emerald-500 p-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" 
                alt="WhatsApp" 
                className="w-16 h-16"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">WhatsApp</h3>
              <p className="text-neutral-600 mb-4">Atendimento rápido e prático</p>
              <a 
                href="https://wa.me/5584996877697" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0086c3] hover:bg-[#00537a] text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-amber-400 p-6 flex items-center justify-center">
              <Phone className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Telefone</h3>
              <p className="text-neutral-600 mb-4">Fale diretamente conosco</p>
              <a 
                href="tel:+5584996877697"
                className="bg-[#0086c3] hover:bg-[#00537a] text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>(84) 99687-7697</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-neutral-800 p-6 flex items-center justify-center">
              <Mail className="w-16 h-16 text-amber-400" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">E-mail</h3>
              <p className="text-neutral-600 mb-4">Envie sua mensagem</p>
              <a 
                href="mailto:rrservicosemanutencoes22@gmail.com"
                className="bg-[#0086c3] hover:bg-[#00537a] text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>Enviar e-mail</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.2675908733227!2d-35.27341238582767!3d-5.688252444950637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDEnMTcuOCJTIDM1wrAxNicxNi40Ilc!5e0!3m2!1spt-BR!2sbr!4v1684358957793!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="RRCM Construtora - Localização"
              className="w-full"
            ></iframe>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-neutral-100 p-3 rounded-full mr-4 flex-shrink-0">
                <MapPin className="text-[#0086c3]" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">Endereço</h4>
                <p className="text-neutral-600">Rua Alcides de Araújo, Extremoz - CEP: 59575000</p>
              </div>
            </div>
            
            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-4">Horário de Atendimento</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Segunda - Sexta:</span>
                  <span className="font-medium text-neutral-900">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Sábado:</span>
                  <span className="font-medium text-neutral-900">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Domingo:</span>
                  <span className="font-medium text-neutral-900">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
