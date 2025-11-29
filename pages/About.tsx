import React from 'react';
import { Users, Map, Award, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-soil-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">O nás</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Jsme SoilVision. Startup z Hradce Králové, který mění pohled na tradiční zemědělství.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Náš příběh</h2>
            <div className="prose text-gray-600 space-y-4">
              <p>
                Rozhodnutí založit firmu SoilVision vychází z identifikace rostoucí poptávky po modernizaci 
                tradičních zemědělských postupů. Současné zemědělství čelí tlaku na zvyšování výnosů při 
                současném snižování nákladů a minimalizaci ekologické zátěže.
              </p>
              <p>
                Věříme, že technologie dronů představují klíč k řešení těchto výzev. Na rozdíl od konkurence, 
                která se často soustředí pouze na prodej softwaru, my nabízíme kompletní servisní řešení.
              </p>
              <p>
                Nechceme vám jen prodat data. Chceme být strategickým partnerem, který dodává měřitelné 
                výsledky ve formě úspor a vyšší efektivity.
              </p>
            </div>
          </div>
          <div className="relative">
             <img 
              src="https://picsum.photos/seed/teamwork/800/600" 
              alt="Náš tým v terénu" 
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats / Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-white border border-soil-200 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-agri-100 text-agri-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Map size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Působnost</h3>
            <p className="text-gray-600 text-sm">Primárně Královéhradecký a Pardubický kraj, ale i celá ČR.</p>
          </div>
          <div className="text-center p-6 bg-white border border-soil-200 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-agri-100 text-agri-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Tým</h3>
            <p className="text-gray-600 text-sm">Zkušení piloti dronů, agronomové a datoví analytici.</p>
          </div>
           <div className="text-center p-6 bg-white border border-soil-200 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-agri-100 text-agri-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Udržitelnost</h3>
            <p className="text-gray-600 text-sm">Ekologicky šetrné postupy jsou jádrem našeho podnikání.</p>
          </div>
           <div className="text-center p-6 bg-white border border-soil-200 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-agri-100 text-agri-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Odbornost</h3>
            <p className="text-gray-600 text-sm">Spolupracujeme s FIM UHK a experty na precizní zemědělství.</p>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="bg-soil-50 rounded-2xl p-8 text-center border border-soil-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kde nás najdete</h2>
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 overflow-hidden">
                <img src="https://picsum.photos/seed/mapa/1200/600" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" alt="Mapa působnosti" />
            </div>
            <p className="mt-4 text-gray-600">
                Sídlo máme v Hradci Králové, ale za našimi klienty jezdíme přímo na pole.
            </p>
        </div>

      </div>
    </div>
  );
};

export default About;
