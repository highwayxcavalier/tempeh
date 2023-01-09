export interface Product {
  id: string;
  name: string;
  expiration_date: string;
  created_at: Date;
  storage?: Storage;
  description?: string;
  quantity: string;
  tags: string[];
  image?: string;
}

type Storage = 'fridge' | 'cellar' | 'freezer' | 'pantry';
