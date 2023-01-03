import { productResolvers } from './productResolvers.ts';
import { userResolvers } from './userResolvers.ts';
const { getProducts, addProduct } = productResolvers;
const { getUser, setUser } = userResolvers;

export const resolvers = {
  Query: {
    getProducts,
    getUser,
  },
  Mutation: {
    //     addProduct,
    setUser,
  },
};
