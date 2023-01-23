import { productResolvers } from "./productResolvers.ts";
import { userResolvers } from "./userResolvers.ts";
const { product, products, addProduct, deleteProduct, foodData } =
  productResolvers;
const { user, addUser, users } = userResolvers;

export const resolvers = {
  Query: {
    product,
    products,
    user,
    users,
    foodData,
  },
  Mutation: {
    addProduct,
    addUser,
    deleteProduct,
  },
};
