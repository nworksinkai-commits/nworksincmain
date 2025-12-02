import React, { useState } from 'react';
import { CATALOG } from '../constants';
import { Category, CatalogItem, ItemType } from '../types';
import { ShoppingCart, FileText, Sparkles, Search, X } from 'lucide-react';

interface ServicesProps {
  addToCart: (item: CatalogItem) => void;
  isMember: boolean;
}

export const Services: React.FC<ServicesProps> = ({ addToCart, isMember }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const categories = ['All', ...Object.values(Category)];

  // Filter Logic
  const filteredItems = CATALOG.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(searchLower) || 
                          item.description.toLowerCase().includes(searchLower);
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search Wrapper */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          
          {/* Title Area */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
               <div className="p-2 bg-yellow-500/10 rounded-lg">
                 <Sparkles className="text-yellow-600 dark:text-yellow-400" size={24}/>
               </div>
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
                 Store & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500 dark:from-sky-400 dark:to-sky-600">Services</span>
               </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
              Browse our catalog of premium hardware, branded merchandise, and creative services.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-96">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-10 py-4 border border-slate-200 dark:border-slate-800 rounded-2xl leading-5 bg-white dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all shadow-lg dark:shadow-xl"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="relative mb-12">
            <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                    activeCategory === cat
                    ? 'bg-sky-600 border-sky-500 text-white shadow-lg shadow-sky-600/30'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600'
                }`}
                >
                {cat}
                </button>
            ))}
            </div>
            {/* Fade effect for scroll indicating more content */}
            <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none sm:hidden"></div>
        </div>

        {/* Grid */}
        {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
                const memberPrice = item.price * 0.9;
                const displayPrice = isMember ? memberPrice : item.price;
                
                return (
                <div key={item.id} className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-500/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-sky-900/20 transition-all duration-300 flex flex-col hover:-translate-y-1">
                    {/* Image Area */}
                    <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 dark:opacity-80 z-10"></div>
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                         <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md ${
                        item.type === ItemType.PRODUCT 
                            ? 'bg-yellow-500 text-slate-900' 
                            : 'bg-sky-600 text-white'
                        }`}>
                        {item.type === ItemType.PRODUCT ? 'Product' : 'Service'}
                        </span>
                        {isMember && item.type === ItemType.PRODUCT && (
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-500 text-white shadow-lg backdrop-blur-md">
                            Member Deal
                            </span>
                        )}
                    </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow relative z-20">
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider">{item.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed">{item.description}</p>
                    </div>

                    <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800 flex items-end justify-between gap-4">
                        <div>
                        {item.type === ItemType.PRODUCT ? (
                            <div className="flex flex-col">
                            <span className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Price</span>
                            {isMember && (
                                <span className="text-xs text-slate-500 line-through">KES {item.price.toLocaleString()}</span>
                            )}
                            <div className="flex items-baseline gap-1">
                                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">KES</span>
                                <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                                    {displayPrice.toLocaleString()}
                                </span>
                            </div>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Estimation</span>
                                <span className="text-lg font-medium text-slate-800 dark:text-slate-300 italic">Custom Quote</span>
                            </div>
                        )}
                        </div>

                        <button
                        onClick={() => addToCart(item)}
                        className={`flex-shrink-0 flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 ${
                            item.type === ItemType.PRODUCT
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-slate-900'
                            : 'bg-slate-800 dark:bg-slate-800 hover:bg-sky-600 dark:hover:bg-sky-600 text-white border border-transparent dark:border-slate-700'
                        }`}
                        >
                        {item.type === ItemType.PRODUCT ? (
                            <>
                            <ShoppingCart size={18} className="mr-2" />
                            Add to Cart
                            </>
                        ) : (
                            <>
                            <FileText size={18} className="mr-2" />
                            Get Quote
                            </>
                        )}
                        </button>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 border-dashed animate-fade-in">
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full mb-4">
                    <Search size={32} className="text-slate-400 dark:text-slate-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No items found</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-md">
                    We couldn't find any products or services matching "{searchQuery}". 
                    Try adjusting your search or category filter.
                </p>
                <button 
                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                    className="mt-6 px-6 py-2 text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 font-medium transition-colors border border-slate-200 dark:border-slate-700 rounded-lg hover:border-sky-500"
                >
                    Clear all filters
                </button>
            </div>
        )}
      </div>
    </section>
  );
};