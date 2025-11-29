import React from 'react';
import { Scan, Droplets, Sprout, BarChart3, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-soil-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Naše služby</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Nabízíme ucelený cyklus péče o plodiny. Od sběru dat až po fyzickou aplikaci látek.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Service 1: Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                <Scan size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Odborná analýza a scan půdy</h2>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Základní služba spočívající v leteckém snímkování pozemků pomocí dronů vybavených multispektrálními senzory.
              Výstupem je detailní digitální mapa identifikující problematické zóny.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-agri-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Identifikace míst zasažených škůdci</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-agri-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Detekce nedostatku vody či živin</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-agri-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Lokalizace ohnisek plevelů</span>
              </li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <span className="text-blue-800 font-semibold text-sm">Dojná kráva (BCG):</span>
                <span className="text-blue-700 text-sm ml-2">Stabilní poptávka a jistý přínos pro vaše hospodaření.</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://picsum.photos/seed/soilanalysis/800/600" 
              alt="Analýza půdy" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Service 2: Spraying */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1">
             <img 
              src="https://picsum.photos/seed/sprayingdrone/800/600" 
              alt="Precizní postřik" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-agri-100 text-agri-700 rounded-lg">
                <Droplets size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Precizní postřikování</h2>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Na základě dat z monitoringu provádíme přesnou aplikaci pesticidů či herbicidů. 
              Dron aplikuje látku pouze na definovaná ohniska, nikoliv plošně.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-agri-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Snížení spotřeby chemikálií až o 70 %</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-agri-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Minimalizace dopadu na okolní porost</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-agri-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Šetrné k životnímu prostředí</span>
              </li>
            </ul>
             <div className="bg-agri-50 p-4 rounded-lg border border-agri-100">
                <span className="text-agri-800 font-semibold text-sm">Hvězda (BCG):</span>
                <span className="text-agri-700 text-sm ml-2">Moderní technologie s obrovským růstovým potenciálem.</span>
            </div>
          </div>
        </div>

        {/* Service 3: Fertilizers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-100 text-amber-700 rounded-lg">
                <Sprout size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Efektivní aplikace hnojiv</h2>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Služba zaměřená na optimalizaci výživy plodin. Dron distribuuje hnojiva v různé intenzitě 
              podle aktuální potřeby konkrétní části pole (VRA - Variable Rate Application).
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-agri-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Efektivní využití drahých hnojiv</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-agri-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Podpora rovnoměrného růstu porostu</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-agri-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Inovativní přístup k výživě</span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://picsum.photos/seed/fertilizer/800/600" 
              alt="Aplikace hnojiv" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Zaujaly vás naše služby?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Rádi vám připravíme nabídku na míru vašim hektarům a plodinám.
          </p>
          <Link 
            to="/kontakt"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stone-900 bg-white hover:bg-gray-100 transition-colors"
          >
            Poptat služby
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
