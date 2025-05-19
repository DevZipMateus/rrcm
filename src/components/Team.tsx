
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Romulo Rêgo',
    role: 'Diretor',
    image: '/lovable-uploads/1052259713503304.jpeg',
    delay: '0s'
  },
];

const Team = () => {
  return (
    <section id="team" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#005486]/10 text-[#005486] font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossa Equipe
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conheça o profissional por trás dos nossos serviços
          </h2>
          <p className="text-gray-600 text-lg">
            Nossa equipe de especialistas está pronta para oferecer as melhores soluções em construção civil para o seu projeto.
          </p>
        </div>
        
        {/* Team Grid - Centered Single Card */}
        <div className="flex justify-center">
          <div 
            key={team[0].id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in max-w-md"
            style={{ animationDelay: team[0].delay }}
          >
            {/* Image */}
            <div className="relative overflow-hidden h-72">
              <img 
                src={team[0].image} 
                alt={team[0].name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{team[0].name}</h3>
              <p className="text-[#005486] mb-4">{team[0].role}</p>
              
              {/* Social Icons */}
              <div className="flex space-x-3">
                <a 
                  href="https://www.instagram.com/construtorarrcm/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-[#005486]/10 text-gray-600 hover:text-[#005486] p-2 rounded-full transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a 
                  href="mailto:rrservicosemanutencoes22@gmail.com" 
                  className="bg-gray-100 hover:bg-[#005486]/10 text-gray-600 hover:text-[#005486] p-2 rounded-full transition-colors duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
