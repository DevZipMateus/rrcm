import React from 'react';
import { Check } from 'lucide-react';
const AboutUs = () => {
  return <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-[#0086c3]/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img alt="RRCM Construtora - Equipe trabalhando" src="/lovable-uploads/ac556f9f-dbd3-45ab-920e-e6f44026e572.jpg" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[700px]" />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#0086c3] rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Desde 2022</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Natal-RN</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">1</div>
                <div className="text-sm text-gray-600">Ano de experiência em excelência</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-[#0086c3]/10 text-[#0086c3] font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Quem Somos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              Excelência em construção civil para o seu projeto
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              A RRCM Construtora nasceu da paixão e da expertise de profissionais com vasta experiência no setor. 
              Desde 2022, construímos mais do que edifícios, casas e infraestruturas; edificamos sonhos e relações 
              de confiança com nossos clientes.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Nossa jornada é marcada pelo compromisso com a qualidade, a segurança e a inovação em cada projeto que realizamos. 
              Entendemos que construir é um processo que envolve planejamento, dedicação e, acima de tudo, a compreensão das 
              necessidades de quem confia em nosso trabalho.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="bg-[#0086c3]/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-[#0086c3]" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Equipe Qualificada</h4>
                  <p className="text-gray-600">Profissionais especializados e em constante atualização</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.5s'
            }}>
                <div className="bg-[#0086c3]/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-[#0086c3]" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Cada cliente recebe atenção individualizada para suas necessidades</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="bg-[#0086c3]/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-[#0086c3]" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Compromisso com Prazos</h4>
                  <p className="text-gray-600">Gerenciamento eficiente para entrega no prazo estabelecido</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="bg-[#0086c3] hover:bg-[#00537a] text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" style={{
            animationDelay: '0.7s'
          }}>
              <span>Conheça Nossos Diferenciais</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;