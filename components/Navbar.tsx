import React, { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Domů', path: '/' },
  { label: 'O nás', path: '/o-nas' },
  { label: 'Služby', path: '/sluzby' },
  { label: 'Poradenství', path: '/poradenstvi' },
  { label: 'Kontakt', path: '/kontakt' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-soil-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-10 h-10 bg-agri-700 rounded-lg flex items-center justify-center text-white group-hover:bg-agri-800 transition-colors">
                <Sprout size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-gray-900 tracking-tight">SoilVision</span>
                <span className="text-[10px] uppercase tracking-widest text-agri-700 font-bold">s.r.o.</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-agri-700 border-b-2 border-agri-700'
                    : 'text-gray-600 hover:text-agri-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="bg-agri-700 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-agri-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Nezávazná poptávka
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-agri-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-soil-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-agri-700 bg-agri-50'
                    : 'text-gray-600 hover:text-agri-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
               <Link
                to="/kontakt"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-agri-700 text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-agri-800"
              >
                Nezávazná poptávka
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
