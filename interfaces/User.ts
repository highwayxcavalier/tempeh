import { Product } from './Product.ts';

export interface User {
  id: string;
  username: string;
  email: string;
  products: Product[];
  created_at: Date;
  updated_at: Date;
}

export interface ProspectData {
  username: string;
  email: string;
}
