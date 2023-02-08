import { GQLError } from "https://deno.land/x/oak_graphql/mod.ts";
import { fetchRecipe, fetchRecipes } from "../api/fetchRecipes.ts";
import { Recipe } from "../interfaces/Recipe.ts";

const recipes = async (
  _: any,
  args: { ingredients: string[] },
): Promise<Recipe[]> => {
  try {
    const result = await fetchRecipes(args.ingredients);

    return result;
  } catch (error) {
    throw new GQLError(error.message);
  }
};

const recipe = async (_: any, args: { uri: string }): Promise<Recipe> => {
  try {
    const id = args.uri.split("_").slice(-1)[0];
    const result = await fetchRecipe(id);

    return result;
  } catch (error) {
    throw new GQLError(error.message);
  }
};

export const recipeResolvers = {
  recipes,
  recipe,
};
