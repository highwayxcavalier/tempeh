import mongoose from 'npm:mongoose@^6.7';
import { productSchema } from './ProductSchema.ts';

const { Schema } = mongoose;

export const userSchema = new Schema(
  {
    username: String,
    email: String,
    products: [productSchema],
  },
  { timestamps: true }
);
