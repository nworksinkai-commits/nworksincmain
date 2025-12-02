import React from 'react';
import { ShoppingBag, Menu, X, User as UserIcon, Star, Moon, Sun } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  toggleCart: () => void;
  cartCount: number;
  user: User | null;
  toggleLogin: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleCart, cartCount, user, toggleLogin, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-sky-900/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col justify-center cursor-pointer group">
            <span className="text-2xl font-serif font-bold text-slate-900 dark:text-white tracking-wider group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
              nworks<span className="text-sky-600 dark:text-sky-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">inc</span>
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] leading-none group-hover:text-sky-600 dark:group-hover:text-sky-500/80 transition-colors">
              Holding Limited
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-baseline space-x-6 mr-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Store Link Highlight */}
            <a 
              href="#services" 
              className="flex items-center space-x-1 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-slate-950 font-bold text-sm hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20"
            >
              <Star size={14} className="fill-slate-900" />
              <span>Store</span>
            </a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6 pl-6 border-l border-slate-200 dark:border-slate-800/50">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button 
              onClick={toggleLogin}
              className={`flex items-center space-x-2 text-sm font-medium transition-colors ${user ? 'text-yellow-600 dark:text-yellow-400' : 'text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400'}`}
            >
              <UserIcon size={18} />
              <span>{user ? `Hi, ${user.name}` : 'Login'}</span>
            </button>

            <button 
              onClick={toggleCart}
              className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
            >
              <ShoppingBag size={24} className="group-hover:animate-bounce-slight" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white dark:text-slate-900 transform translate-x-1/4 -translate-y-1/4 bg-sky-500 dark:bg-sky-400 rounded-full shadow-lg shadow-sky-500/50">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden items-center gap-4">
             {/* Mobile Theme Toggle */}
             <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 animate-slide-down shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 block px-3 py-3 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#services"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 hover:bg-slate-100 dark:hover:bg-slate-900 px-3 py-3 rounded-md text-base font-bold"
            >
              <Star size={16} />
              <span>Store</span>
            </a>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-4">
               <button 
                  onClick={() => { toggleLogin(); setIsOpen(false); }}
                  className="flex justify-center items-center text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 py-3 rounded-lg"
                >
                  <UserIcon size={18} className="mr-2"/>
                  {user ? user.name : 'Login'}
                </button>
                <button 
                  onClick={() => { toggleCart(); setIsOpen(false); }}
                  className="flex justify-center items-center text-white dark:text-slate-900 bg-sky-500 dark:bg-sky-500 py-3 rounded-lg font-bold"
                >
                  <ShoppingBag size={18} className="mr-2"/>
                  Cart ({cartCount})
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};