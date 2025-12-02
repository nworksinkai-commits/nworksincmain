import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              nworks<span className="text-sky-600 dark:text-sky-500">inc</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {COMPANY_INFO.tagline} <br/>
              A synergy of technology, design, and craftsmanship.
            </p>
          </div>

          {/* Services Links */}
          <div>
             <h4 className="text-slate-900 dark:text-white font-semibold mb-4 uppercase text-sm tracking-wider">Divisions</h4>
             <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400">Computer Hardware</a></li>
                <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400">Creative Design</a></li>
                <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400">Digital Media</a></li>
                <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400">Branding Solutions</a></li>
                <li><a href="#" className="hover:text-yellow-600 dark:hover:text-yellow-400">Lworks Leather</a></li>
             </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-2 text-sky-600 dark:text-sky-500 flex-shrink-0" />
                <span>{COMPANY_INFO.contact.address}</span>
              </li>
              <li className="flex items-center">
                 <Phone size={16} className="mr-2 text-sky-600 dark:text-sky-500 flex-shrink-0" />
                 <span>{COMPANY_INFO.contact.phone.join(", ")}</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-sky-600 dark:text-sky-500 flex-shrink-0" />
                <span>{COMPANY_INFO.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div>
             <h4 className="text-slate-900 dark:text-white font-semibold mb-4 uppercase text-sm tracking-wider">Follow Us</h4>
             <div className="flex space-x-4 mb-6">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-sky-600 dark:hover:bg-sky-600 hover:text-white transition-all">
                   <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-sky-600 dark:hover:bg-sky-600 hover:text-white transition-all">
                   <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-sky-600 dark:hover:bg-sky-600 hover:text-white transition-all">
                   <Twitter size={20} />
                </a>
             </div>
             <p className="text-xs text-slate-500">
               @nworksinc @nworksincstudio
             </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 text-center text-slate-500 dark:text-slate-600 text-xs">
          <p>&copy; {new Date().getFullYear()} Nworks Holding Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};