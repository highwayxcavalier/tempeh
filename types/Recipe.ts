export interface Recipe {
  label: string;
  imageUrl?: string;
  ingredientsLines?: string[];
  ingredients?: Ingredient[];
  url: string;
}

interface Ingredient {
  food: string;
  quantity: number;
  measure?: number;
}

export interface Recipes {
  recipe: Recipe[];
}
