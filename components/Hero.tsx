import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-50 dark:bg-slate-950 overflow-hidden min-h-[90vh] flex items-center transition-colors duration-500">
      {/* Background Pattern/Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop" 
            alt="Nairobi Skyline" 
            className="w-full h-full object-cover opacity-10 dark:opacity-30 grayscale hover:grayscale-0 transition-all duration-[2s] ease-out mix-blend-overlay dark:mix-blend-overlay"
         />
         {/* Dark Mode Gradient */}
         <div className="absolute inset-0 hidden dark:block bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/70"></div>
         <div className="absolute inset-0 hidden dark:block bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
         
         {/* Light Mode Gradient */}
         <div className="absolute inset-0 block dark:hidden bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-100/70"></div>
         <div className="absolute inset-0 block dark:hidden bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full">
        <div className="lg:w-3/4 xl:w-2/3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-sky-500/30 rounded-full bg-sky-100/50 dark:bg-sky-900/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 animate-pulse"></span>
            <span className="text-sky-700 dark:text-sky-300 text-xs md:text-sm font-semibold tracking-wide uppercase">
              Premier Corporate Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 dark:text-white leading-[1.1] mb-8">
            Artistically <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">Satisfying</span>. <br />
            Exquisite <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">Products</span>.
          </h1>
          
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 border-l-4 border-sky-500 pl-6">
            Nworks Holding Limited unites diverse expertise to deliver unique experiences. 
            From enterprise hardware to custom leather craftsmanship, we turn childhood dreams into professional reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white dark:text-slate-900 bg-sky-600 dark:bg-sky-500 hover:bg-sky-500 dark:hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/30 transform hover:-translate-y-1">
              Explore Store & Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 dark:border-slate-700 text-base font-bold rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              Our Vision
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-2/3 h-1 bg-gradient-to-r from-transparent via-sky-600 to-yellow-500"></div>
    </div>
  );
};