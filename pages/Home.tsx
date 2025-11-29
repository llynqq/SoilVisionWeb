import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ShieldCheck, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/dronefield/1920/1080" 
            alt="Letecký pohled na pole" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Vidíme problémy půdy dřív,<br />
            <span className="text-agri-400">než je uvidíte na poli.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Precizní péče, vyšší výnosy. Komplexní služby v oblasti precizního zemědělství s využitím moderních bezpilotních systémů.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/kontakt" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-agri-600 hover:bg-agri-700 transition-colors shadow-lg"
            >
              Nezávazná poptávka
            </Link>
            <Link 
              to="/sluzby" 
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 backdrop-blur-sm text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              Prozkoumat služby
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section - What we do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Proč SoilVision?</h2>
            <p className="text-lg text-gray-600">
              Spojujeme agronomické know-how s nejmodernější dronovou technologií. Pomáháme farmářům snižovat náklady a zvyšovat efektivitu hospodaření.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-soil-50 p-8 rounded-2xl border border-soil-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-agri-100 text-agri-700 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vyšší výnosy</h3>
              <p className="text-gray-600">
                Díky přesným datům o kondici rostlin a živinách v půdě optimalizujeme vaše vstupy pro maximální úrodu.
              </p>
            </div>

            <div className="bg-soil-50 p-8 rounded-2xl border border-soil-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6">
                <Leaf size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Úspora nákladů</h3>
              <p className="text-gray-600">
                Variabilní aplikace hnojiv a cílené postřiky snižují spotřebu drahé chemie až o desítky procent.
              </p>
            </div>

            <div className="bg-soil-50 p-8 rounded-2xl border border-soil-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Menší riziko eroze</h3>
              <p className="text-gray-600">
                Identifikujeme ohrožená místa a pomáháme nastavit protierozní opatření pro dlouhodobou udržitelnost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-soil-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Komplexní péče o vaše pole</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-agri-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Odborná analýza a scan půdy</h4>
                    <p className="text-gray-600 text-sm mt-1">Letecké snímkování a multispektrální analýza pro dokonalý přehled.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-agri-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Precizní postřikování</h4>
                    <p className="text-gray-600 text-sm mt-1">Aplikace pesticidů pouze na zasažená místa s milimetrovou přesností.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-agri-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Variabilní aplikace hnojiv</h4>
                    <p className="text-gray-600 text-sm mt-1">Dávkování hnojiva přesně podle potřeb konkrétní části pole.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/sluzby" className="text-agri-700 font-medium flex items-center hover:gap-2 transition-all">
                  Zjistit více o našich službách <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/agritech/800/600" 
                alt="Dron při práci" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-agri-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            {/* Pattern placeholder */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-6">Připraveni na modernizaci vaší farmy?</h2>
          <p className="text-xl text-agri-100 mb-10">
            Kontaktujte nás ještě dnes a získejte nezávaznou konzultaci, jak můžeme zlepšit hospodaření na vašich pozemcích.
          </p>
          <Link 
            to="/kontakt"
            className="inline-block bg-white text-agri-800 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Mám zájem o spolupráci
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
