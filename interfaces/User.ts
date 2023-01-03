import { Product } from './Product.ts';

export interface User {
  user_id: string;
  username: string;
  email: string;
  products: Product[];
}

export interface ProspectData {
  username: string;
  email: string;
}
