import React from 'react';
import { Target, Eye, Users, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Who We Are</h2>
          <div className="h-1 w-20 bg-sky-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {COMPANY_INFO.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-sky-500/50 dark:hover:border-sky-600/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors">
              <Target className="text-sky-600 dark:text-sky-500 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-yellow-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
              <Eye className="text-yellow-600 dark:text-yellow-500 group-hover:text-slate-900" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>

          {/* Values */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-sky-500/50 dark:hover:border-sky-600/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors">
              <Users className="text-sky-600 dark:text-sky-500 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Spirit</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Team spirit, transparency, discipline, and coordination. We don't just work; we capture moments and create perfection.
            </p>
          </div>
        </div>

        {/* Highlight Quote */}
        <div className="relative bg-slate-100 dark:bg-slate-800 rounded-2xl p-10 md:p-16 overflow-hidden shadow-inner">
          <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400"></div>
          <div className="absolute right-0 bottom-0 opacity-5 dark:opacity-5 text-slate-900 dark:text-white">
             <Heart size={300} />
          </div>
          <blockquote className="relative z-10 text-2xl md:text-3xl font-serif italic text-slate-800 dark:text-slate-200 text-center">
            "We don't take pictures, we capture moments. All departments work together to create an exceptional product."
          </blockquote>
          <div className="mt-6 text-center text-sky-600 dark:text-sky-500 font-semibold tracking-wider uppercase text-sm">
            — The Nworks Team
          </div>
        </div>

      </div>
    </section>
  );
};