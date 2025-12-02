import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CartSidebar } from './components/Cart';
import { Footer } from './components/Footer';
import { CatalogItem, CartItem, User } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  // Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Initialize Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Default to dark if no preference or if system prefers dark
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark'); 
    
    setTheme(initialTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  const toggleLogin = () => {
    if (user) {
      setUser(null);
    } else {
      // Mock login
      setUser({
        name: 'Alex Doe',
        email: 'alex@example.com',
        isMember: true
      });
    }
  };

  const addToCart = (item: CatalogItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans selection:bg-sky-500/30">
      
      <Navbar 
        toggleCart={() => setIsCartOpen(true)} 
        cartCount={cartCount}
        user={user}
        toggleLogin={toggleLogin}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main>
        <Hero />
        <About />
        
        {/* Banner Break */}
        <div className="py-16 bg-gradient-to-r from-sky-100 to-slate-100 dark:from-sky-900 dark:to-slate-900 border-y border-sky-200 dark:border-sky-800/30">
           <div className="max-w-7xl mx-auto px-4 text-center">
              <h3 className="text-2xl font-serif italic text-sky-800 dark:text-sky-200">"Creating unique design & experiences while ensuring financial growth."</h3>
           </div>
        </div>

        <Services 
          addToCart={addToCart} 
          isMember={user?.isMember || false} 
        />
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        removeItem={removeFromCart}
        isMember={user?.isMember || false}
      />

    </div>
  );
};

export default App;