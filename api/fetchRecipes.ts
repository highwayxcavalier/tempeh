import { Recipe, Recipes } from "../interfaces/Recipe.ts";

export const fetchRecipes = async (
  ingredients: string[],
): Promise<Recipe[]> => {
  try {
    const query = new URLSearchParams({
      "q": ingredients.join(" "),
      "app_key": Deno.env.get("API_KEY") || "",
      "app_id": Deno.env.get("API_ID") || "",
      "type": "public",
      "random": "true",
    });

    const url = `https://api.edamam.com/api/recipes/v2?${query}`;
    const jsonResponse = await fetch(
      url,
    );

    const jsonData = await jsonResponse.json();

    return jsonData.hits.map(({ recipe }: Recipes) => recipe);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const fetchRecipe = async (id: string): Promise<Recipe> => {
  try {
    const query = new URLSearchParams({
      "app_key": Deno.env.get("API_KEY") || "",
      "app_id": Deno.env.get("API_ID") || "",
      "type": "public",
    });
    const url = `https://api.edamam.com/api/recipes/v2/${id}?${query}`;
    const jsonResponse = await fetch(
      url,
    );
    const jsonData = await jsonResponse.json();

    return jsonData.recipe;
  } catch (error) {
    throw new Error(error?.message);
  }
};
