export enum ItemType {
  SERVICE = 'SERVICE',
  PRODUCT = 'PRODUCT'
}

export enum Category {
  HARDWARE = 'Computer Hardware',
  DESIGN = 'Creative Design',
  BRANDING = 'Branding',
  MEDIA = 'Digital Media',
  LEATHER = 'Lworks Leather'
}

export interface CatalogItem {
  id: string;
  title: string;
  description: string;
  type: ItemType;
  category: Category;
  price: number; // For services, this acts as a base estimate or is ignored for quoting
  image: string;
}

export interface CartItem extends CatalogItem {
  quantity: number;
}

export interface User {
  name: string;
  isMember: boolean;
  email: string;
}
