import React from 'react';
import { BookOpen, FileText, ArrowRight } from 'lucide-react';

const Consulting: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-soil-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Poradenství a Vzdělávání</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Sdílíme know-how o precizním zemědělství. Články, tipy a případové studie pro moderní farmáře.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                    <img src="https://picsum.photos/seed/soilhealth/600/400" alt="Zdraví půdy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-agri-600 text-sm font-semibold mb-2">
                        <BookOpen size={16} />
                        <span>Analýza půdy</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">5 znaků zdravé půdy, které nevidíte pouhým okem</h3>
                    <p className="text-gray-600 text-sm flex-1">
                        Jak multispektrální kamery odhalí stres rostlin dříve, než zežloutnou listy.
                    </p>
                    <a href="#" className="mt-4 inline-flex items-center text-agri-700 font-medium hover:text-agri-800">
                        Číst více <ArrowRight size={16} className="ml-1" />
                    </a>
                </div>
            </article>

            {/* Article 2 */}
            <article className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                    <img src="https://picsum.photos/seed/dronefly/600/400" alt="Legislativa" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-agri-600 text-sm font-semibold mb-2">
                        <FileText size={16} />
                        <span>Legislativa</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Nová pravidla pro létání s drony nad poli v roce 2024</h3>
                    <p className="text-gray-600 text-sm flex-1">
                        Co musí splňovat kategorie 'Specific' a proč to za vás vyřešíme my.
                    </p>
                    <a href="#" className="mt-4 inline-flex items-center text-agri-700 font-medium hover:text-agri-800">
                        Číst více <ArrowRight size={16} className="ml-1" />
                    </a>
                </div>
            </article>

            {/* Article 3 */}
            <article className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                    <img src="https://picsum.photos/seed/fertilizing/600/400" alt="Hnojení" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-agri-600 text-sm font-semibold mb-2">
                        <BookOpen size={16} />
                        <span>Efektivita</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Případová studie: Jak jsme ušetřili 30% nákladů na hnojiva</h3>
                    <p className="text-gray-600 text-sm flex-1">
                        Reálná data z farmy na Královéhradecku při využití variabilní aplikace.
                    </p>
                    <a href="#" className="mt-4 inline-flex items-center text-agri-700 font-medium hover:text-agri-800">
                        Číst více <ArrowRight size={16} className="ml-1" />
                    </a>
                </div>
            </article>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-stone-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Chcete tipy pro moderní zemědělství?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Přihlaste se k odběru našeho newsletteru. Posíláme pouze odborné informace, žádný spam.
            </p>
            <form className="max-w-md mx-auto flex gap-2 flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="Váš e-mail" 
                    className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-agri-500"
                />
                <button type="submit" className="bg-agri-600 text-white px-6 py-3 rounded-md font-medium hover:bg-agri-700 transition-colors">
                    Odebírat
                </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Consulting;
