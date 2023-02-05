import { GQLError } from "https://deno.land/x/oak_graphql/mod.ts";
import { fetchRecipes } from "../api/fetchRecipes.ts";
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

export const recipeResolvers = {
  recipes,
};
