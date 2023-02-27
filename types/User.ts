import { Product } from "./Product.ts";

export interface User {
  id: string;
  username: string;
  email: string;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProspectData {
  username: string;
  email: string;
}
