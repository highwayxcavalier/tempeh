import { userResolvers } from './userResolvers.ts';

const { getUser } = userResolvers;

const getProducts = (userId: any) => {
  const products = [{ name: 'garlic' }, { name: 'potato' }];
  return products;
};
const addProduct = () => {};

export const productResolvers = {
  getProducts,
  addProduct,
};
