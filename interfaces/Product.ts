export interface Product {
  id: string;
  name: string;
  expiration_date: string;
  createdAt: Date;
  updatedAt: Date;
  storage?: Storage;
  description?: string;
  quantity: string;
  tags: string[];
  image?: string;
  isExpired: boolean;
}

type Storage = "fridge" | "cellar" | "freezer" | "pantry";

export interface FoodItem {
  name: string;
  imageUrl?: string;
}
