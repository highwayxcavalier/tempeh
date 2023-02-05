import { Recipe } from "../interfaces/Recipe.ts";

export const fetchRecipes = async (
  ingredients: string[],
): Promise<Recipe[]> => {
  const url = "https://api.edamam.com/api/recipes/v2";

  try {
    const query = new URLSearchParams({
      "q": ingredients.join(" "),
      "app_key": Deno.env.get("API_KEY") || "",
      "app_id": Deno.env.get("API_ID") || "",
      "type": "public",
      "random": "true",
    });

    const jsonResponse = await fetch(
      url + query,
    );

    const jsonData = await jsonResponse.json();

    return jsonData;
  } catch (error) {
    throw new Error(error?.message);
  }
};
