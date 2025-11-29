import React from 'react';
import { Sprout, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-agri-600 rounded flex items-center justify-center">
                <Sprout size={20} />
              </div>
              <span className="font-serif text-xl font-bold">SoilVision</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesionální služby v oblasti precizního zemědělství. Propojujeme moderní technologie dronů s péčí o půdu pro vyšší výnosy a udržitelnost.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-agri-400">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Domů</Link></li>
              <li><Link to="/sluzby" className="text-gray-400 hover:text-white transition-colors">Naše služby</Link></li>
              <li><Link to="/o-nas" className="text-gray-400 hover:text-white transition-colors">O nás</Link></li>
              <li><Link to="/poradenstvi" className="text-gray-400 hover:text-white transition-colors">Poradenství</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-agri-400">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-agri-500" />
                <span>Královéhradecký kraj<br />Česká republika</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-agri-500" />
                <a href="tel:+420123456789" className="hover:text-white">+420 123 456 789</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-agri-500" />
                <a href="mailto:info@soilvision.cz" className="hover:text-white">info@soilvision.cz</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-agri-400">Sledujte nás</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-agri-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-agri-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-agri-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SoilVision s.r.o. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
