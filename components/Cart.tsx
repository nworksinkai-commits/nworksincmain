import React from 'react';
import { X, Trash2, Send, CreditCard, ShoppingBag } from 'lucide-react';
import { CartItem, ItemType } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  removeItem: (id: string) => void;
  isMember: boolean;
}

export const CartSidebar: React.FC<CartProps> = ({ isOpen, onClose, items, removeItem, isMember }) => {
  const products = items.filter(i => i.type === ItemType.PRODUCT);
  const services = items.filter(i => i.type === ItemType.SERVICE);

  const subtotal = products.reduce((sum, item) => {
    const price = isMember ? item.price * 0.9 : item.price;
    return sum + (price * item.quantity);
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/50 dark:bg-slate-950/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="h-full w-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col animate-slide-in transition-colors duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-3">
               <ShoppingBag className="text-sky-600 dark:text-sky-500" />
               <h2 className="text-xl font-bold text-slate-900 dark:text-white">Your Cart</h2>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50 dark:bg-slate-900/50">
            
            {/* Products Section */}
            {products.length > 0 && (
              <div>
                <h3 className="flex items-center text-xs font-bold text-yellow-600 dark:text-yellow-500 uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                  Products to Purchase
                </h3>
                <div className="space-y-4">
                  {products.map(item => {
                     const price = isMember ? item.price * 0.9 : item.price;
                     return (
                      <div key={item.id} className="flex gap-4 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-sm">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg shadow-sm" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-slate-900 dark:text-white font-medium text-sm truncate">{item.title}</h4>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">KES {price.toLocaleString()} <span className="text-slate-500 dark:text-slate-500 font-normal">x {item.quantity}</span></span>
                            <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                   <div className="flex justify-between items-center mb-1">
                     <span className="text-slate-500 dark:text-slate-400 text-sm">Subtotal</span>
                     <span className="text-xl font-bold text-slate-900 dark:text-white">KES {subtotal.toLocaleString()}</span>
                   </div>
                   {isMember && <p className="text-xs text-green-600 dark:text-green-400 text-right font-medium">Member discount applied!</p>}
                </div>
              </div>
            )}

            {/* Services Section */}
            {services.length > 0 && (
              <div>
                <h3 className="flex items-center text-xs font-bold text-sky-600 dark:text-sky-500 uppercase tracking-wider mb-4">
                   <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                   Services for Quotation
                </h3>
                <div className="space-y-4">
                  {services.map(item => (
                    <div key={item.id} className="flex gap-4 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-sm">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg shadow-sm" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-slate-900 dark:text-white font-medium text-sm truncate">{item.title}</h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sky-700 dark:text-sky-400 text-xs font-medium px-2 py-0.5 bg-sky-100 dark:bg-sky-900/30 rounded-full">Requesting Info</span>
                          <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {items.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-60">
                <ShoppingBag size={48} className="text-slate-400 dark:text-slate-600 mb-4" />
                <p className="text-slate-500 dark:text-slate-400 font-medium">Your cart is empty.</p>
                <button onClick={onClose} className="mt-6 px-6 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg text-sm font-medium transition-colors">
                  Continue Browsing
                </button>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              {products.length > 0 && (
                <button className="w-full flex items-center justify-center py-3.5 px-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 rounded-xl font-bold transition-all shadow-lg hover:shadow-yellow-500/20">
                  <CreditCard className="mr-2" size={18} />
                  Checkout Products (KES {subtotal.toLocaleString()})
                </button>
              )}
              {services.length > 0 && (
                <button className="w-full flex items-center justify-center py-3.5 px-4 bg-slate-900 dark:bg-slate-800 hover:bg-sky-600 dark:hover:bg-sky-600 text-white rounded-xl font-bold transition-all border border-transparent dark:border-slate-700">
                  <Send className="mr-2" size={18} />
                  Request Quotes
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};