import mongoose from "npm:mongoose@^6.7";
import { productSchema } from "../schemas/ProductSchema.ts";

const { model } = mongoose;

export const ProductModel = model("Product", productSchema);
