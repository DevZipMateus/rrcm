
import React from 'react';
import { Building2, HardHat, Home, Ruler, Truck, Timer } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Construção de Casas',
    description: 'Construção completa de residências, desde a fundação até os acabamentos, com qualidade e segurança.',
    icon: Home,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Terceirização de Mão de Obra',
    description: 'Fornecimento de equipes especializadas para diferentes fases da sua obra, garantindo eficiência e qualidade.',
    icon: HardHat,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Construção Comercial',
    description: 'Execução de projetos comerciais com foco em funcionalidade, estética e durabilidade.',
    icon: Building2,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Gestão de Projetos',
    description: 'Gerenciamento completo do seu projeto, garantindo cumprimento de prazos e orçamentos.',
    icon: Timer,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#0086c3]/10 text-[#0086c3] font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas em construção civil
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos serviços especializados para atender às necessidades específicas do seu projeto, 
            desde a construção residencial até a terceirização de serviços.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-[#0086c3]/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-[#0086c3]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-[#0086c3] hover:bg-[#00537a] text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Fale com um especialista</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
