import { productResolvers } from './productResolvers.ts';
import { userResolvers } from './userResolvers.ts';
const { getProducts, addProduct } = productResolvers;
const { getUser, setUser, getUsers } = userResolvers;

export const resolvers = {
  Query: {
    getProducts,
    getUser,
    getUsers,
  },
  Mutation: {
    //     addProduct,
    setUser,
  },
};
