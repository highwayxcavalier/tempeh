export interface Product {
  id: string;
  name: string;
  expiration_date: string;
  created_at: Date;
  storage?: string;
  description?: string;
  quantity: string;
  tags: string[];
  image?: string;
}
