import { GQLError } from 'https://deno.land/x/oak_graphql/mod.ts';
import { ProductModel } from '../data/models/ProductModel.ts';

const products = async () => {
  try {
    const products = await ProductModel.find();
    return products;
  } catch (error) {
    throw new GQLError(error?.message);
  }
};

const product = async (_: any, { id }: any) => {
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
  }: any
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

const deleteProduct = async (_: any, { input: { id } }: any) => {
  try {
    await ProductModel.findOneAndDelete({ _id: id });

    return { done: true };
  } catch (error) {
    throw new GQLError(error?.message);
  }
};

export const productResolvers = {
  product,
  products,
  addProduct,
  deleteProduct,
};
