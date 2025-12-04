import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CartSidebar } from './components/Cart';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { CatalogItem, CartItem, User, Category, ItemType } from './types';
import { CATALOG } from './constants'; // Keep for initial/fallback state
import { supabase } from './lib/supabase';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [catalogItems, setCatalogItems] = useState<CatalogItem[]>(CATALOG);
  
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

  // Fetch Catalog from Supabase
  useEffect(() => {
    const fetchCatalog = async () => {
      const { data, error } = await supabase
        .from('catalog')
        .select('*');

      if (error) {
        console.error('Error fetching catalog:', error);
      } else if (data && data.length > 0) {
        // Map Supabase response to CatalogItem type ensuring Enums match
        const mappedItems: CatalogItem[] = data.map((item: any) => ({
          ...item,
          // Ensure enums are cast correctly from string
          category: item.category as Category,
          type: item.type as ItemType
        }));
        setCatalogItems(mappedItems);
      }
    };

    fetchCatalog();
  }, []);

  // Handle Authentication Session
  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          name: session.user.user_metadata.full_name || session.user.email?.split('@')[0] || 'User',
          email: session.user.email || '',
          isMember: session.user.user_metadata.is_member || false
        });
      }
    });

    // Listen for changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          name: session.user.user_metadata.full_name || session.user.email?.split('@')[0] || 'User',
          email: session.user.email || '',
          isMember: session.user.user_metadata.is_member || false
        });
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  const handleLoginAction = async () => {
    if (user) {
      await supabase.auth.signOut();
      setUser(null);
    } else {
      setIsAuthModalOpen(true);
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
        toggleLogin={handleLoginAction}
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
          items={catalogItems}
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

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

    </div>
  );
};

export default App;