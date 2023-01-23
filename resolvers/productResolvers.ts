import { GQLError } from "https://deno.land/x/oak_graphql/mod.ts";
import { fetchFoodData } from "../api/fetchFoodData.ts";
import { ProductModel } from "../data/models/ProductModel.ts";
import { FoodItem } from "../interfaces/Product.ts";

const products = async () => {
  try {
    const products = await ProductModel.find();
    return products;
  } catch (error) {
    throw new GQLError(error?.message);
  }
};

const product = async (_: any, id: string) => {
  try {
    const result = await ProductModel.findById({ _id: id });
    return result;
  } catch (error) {
    throw new GQLError(error?.message);
  }
};

const addProduct = async (
  _: any,
  {
    input: {
      name,
      expiration_date,
      storage,
      quantity,
      tags,
      description,
      isExpired,
    },
  }: any,
) => {
  const newProduct = new ProductModel({
    name,
    expiration_date,
    description,
    storage,
    quantity,
    tags,
    isExpired,
  });

  try {
    await newProduct.save();
  } catch (error) {
    console.error(error?.message);
  }

  return newProduct;
};

const deleteProduct = async (
  _: any,
  { input: { id } }: any,
): Promise<{ done: boolean }> => {
  try {
    await ProductModel.findOneAndDelete({ _id: id });

    return { done: true };
  } catch (error) {
    throw new GQLError(error?.message);
  }
};

const foodData = async (_: any, barcode: string): Promise<FoodItem> => {
  try {
    const result = await fetchFoodData(barcode);

    return result;
  } catch (error) {
    throw new GQLError(error?.message);
  }
};

export const productResolvers = {
  product,
  products,
  addProduct,
  deleteProduct,
  foodData,
};
