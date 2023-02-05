import { productResolvers } from "./productResolvers.ts";
import { userResolvers } from "./userResolvers.ts";
import { recipeResolvers } from "./recipesResolvers.ts";

const { product, products, addProduct, deleteProduct, foodData } =
  productResolvers;
const { user, addUser, users } = userResolvers;
const { recipes } = recipeResolvers;

export const resolvers = {
  Query: {
    product,
    products,
    user,
    users,
    foodData,
    recipes,
  },
  Mutation: {
    addProduct,
    addUser,
    deleteProduct,
  },
};
