import { CatalogItem, Category, ItemType } from './types';

export const COMPANY_INFO = {
  name: "Nworks Holding Limited",
  tagline: "Artistically satisfying and exquisite products.",
  description: "Nworks Holding Limited is a group of companies merged by unique goals. Formed from a childhood dream, we operate with team spirit, transparency, and discipline to provide the best customer experience.",
  mission: "Creating unique design & experiences while ensuring financial growth by providing excellent customer services.",
  vision: "To provide artistically satisfying and exquisite products to our clients' tastes.",
  contact: {
    phone: ["0737 346 920", "0721 289 886"],
    email: "nworksinc@gmail.com",
    address: "P.O BOX 14407 – 00800 Nairobi",
    social: "@nworksinc"
  }
};

export const CATALOG: CatalogItem[] = [
  // Hardware
  {
    id: 'h1',
    title: 'High-Performance Laptop',
    description: 'Wholesale & retail supply of branded new and slightly used desktops/laptops.',
    type: ItemType.PRODUCT,
    category: Category.HARDWARE,
    price: 85000,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'h2',
    title: 'Networking Solutions',
    description: 'Complete office networking solutions, routers, and cabling installation.',
    type: ItemType.SERVICE,
    category: Category.HARDWARE,
    price: 0,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'h3',
    title: 'Office Printers & Toners',
    description: 'Supply of high-capacity printers and original cartridges.',
    type: ItemType.PRODUCT,
    category: Category.HARDWARE,
    price: 45000,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1000&auto=format&fit=crop'
  },

  // Creative Design
  {
    id: 'c1',
    title: 'Corporate Logo Design',
    description: 'Modern, scalable vector logo design for your brand identity.',
    type: ItemType.SERVICE,
    category: Category.DESIGN,
    price: 0,
    image: 'https://images.unsplash.com/photo-1554774853-719586f8c277?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'c2',
    title: 'Brochure & Magazine Layout',
    description: 'Professional layout for print media, magazines, and company profiles.',
    type: ItemType.SERVICE,
    category: Category.DESIGN,
    price: 0,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1000&auto=format&fit=crop'
  },

  // Branding
  {
    id: 'b1',
    title: 'Premium Branded Hoodies',
    description: 'Heavyweight cotton blend hoodies with high-quality screen print or embroidery.',
    type: ItemType.PRODUCT,
    category: Category.BRANDING,
    price: 3500,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'b4',
    title: 'Corporate T-Shirts',
    description: 'Premium cotton polo or round-neck t-shirts custom branded for your team.',
    type: ItemType.PRODUCT,
    category: Category.BRANDING,
    price: 1500,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'b5',
    title: 'Custom Branded Caps',
    description: 'Structured 6-panel caps with 3D embroidery, available in various colors.',
    type: ItemType.PRODUCT,
    category: Category.BRANDING,
    price: 1000,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'b2',
    title: 'Vehicle Branding',
    description: 'Full vehicle wraps and sticker branding for corporate fleets.',
    type: ItemType.SERVICE,
    category: Category.BRANDING,
    price: 0,
    image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'b3',
    title: '3D Wall Signage',
    description: 'Laser-cut acrylic or metal signage for office reception areas.',
    type: ItemType.SERVICE,
    category: Category.BRANDING,
    price: 0,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop'
  },

  // Digital Media
  {
    id: 'm1',
    title: 'Corporate Portrait Shoot',
    description: 'Professional headshots and team photos for your website.',
    type: ItemType.SERVICE,
    category: Category.MEDIA,
    price: 0,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'm2',
    title: 'Event Coverage',
    description: 'Capturing moments at private functions, launches, and corporate events.',
    type: ItemType.SERVICE,
    category: Category.MEDIA,
    price: 0,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop'
  },

  // Leather
  {
    id: 'l1',
    title: 'Lworks Classic Leather Wallet',
    description: 'Hand-stitched genuine leather wallet with custom engraving.',
    type: ItemType.PRODUCT,
    category: Category.LEATHER,
    price: 4500,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'l2',
    title: 'Custom Leather Desk Mat',
    description: 'Premium leather desk accessory for executive offices.',
    type: ItemType.PRODUCT,
    category: Category.LEATHER,
    price: 8000,
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?q=80&w=1000&auto=format&fit=crop'
  },
];