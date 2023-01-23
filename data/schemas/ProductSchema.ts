import mongoose from "npm:mongoose@^6.7";
const { Schema } = mongoose;

export const productSchema = new Schema(
  {
    name: String,
    expiration_date: String,
    storage: String,
    description: String,
    quantity: String,
    tags: [String],
    image: String,
    isExpired: Boolean,
  },
  { timestamps: true },
);
