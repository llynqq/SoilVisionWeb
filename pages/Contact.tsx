import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ContactFormState } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Děkujeme za vaši poptávku. Brzy se vám ozveme.');
    // Here logic to send data to backend would go
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      <div className="bg-soil-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Kontaktujte nás</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Máte zájem o naše služby nebo se chcete na něco zeptat? Jsme tu pro vás.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Spojte se s námi</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-agri-100 text-agri-700 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefon</h3>
                  <p className="text-gray-600 mb-1">Obchodní zástupce</p>
                  <a href="tel:+420123456789" className="text-lg font-bold text-agri-700 hover:underline">+420 123 456 789</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-agri-100 text-agri-700 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">E-mail</h3>
                  <p className="text-gray-600 mb-1">Pro obecné dotazy a poptávky</p>
                  <a href="mailto:info@soilvision.cz" className="text-lg font-bold text-agri-700 hover:underline">info@soilvision.cz</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-agri-100 text-agri-700 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Adresa</h3>
                  <p className="text-gray-600">
                    SoilVision s.r.o.<br />
                    Královéhradecký kraj<br />
                    Česká republika
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    (Oficiální sídlo je administrativní, rádi za vámi přijedeme přímo na farmu.)
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-gray-100 rounded-xl overflow-hidden relative">
               <img src="https://picsum.photos/seed/hkmap/800/400" className="w-full h-full object-cover opacity-60" alt="Mapa" />
               <div className="absolute inset-0 flex items-center justify-center">
                   <span className="bg-white/80 px-4 py-2 rounded-md font-semibold text-gray-700">Působíme v Královéhradeckém kraji</span>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-soil-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nezávazná poptávka</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Jméno a příjmení / Firma</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agri-500 focus:border-transparent outline-none transition-all"
                  placeholder="Jan Novák / Agro s.r.o."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agri-500 focus:border-transparent outline-none transition-all"
                    placeholder="jan@email.cz"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agri-500 focus:border-transparent outline-none transition-all"
                    placeholder="+420 777 000 000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">O jakou službu máte zájem?</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agri-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="general">Obecný dotaz</option>
                  <option value="analysis">Analýza a scan půdy</option>
                  <option value="spray">Precizní postřikování</option>
                  <option value="fertilizer">Variabilní hnojení</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Zpráva</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agri-500 focus:border-transparent outline-none transition-all"
                  placeholder="Popište velikost pole, pěstované plodiny nebo váš dotaz..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-agri-700 text-white font-bold py-4 rounded-lg hover:bg-agri-800 transition-colors shadow-md"
              >
                Odeslat poptávku <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
