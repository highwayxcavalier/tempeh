import { FoodItem } from "../types/Product.ts";

export const fetchFoodData = async (
  barcode: string,
): Promise<FoodItem> => {
  const url = `https://world.openfoodfacts.org/api/v2/product/${
    Object.values(barcode)[0]
  }`;

  try {
    const jsonResponse = await fetch(
      url,
    );

    const jsonData = await jsonResponse.json();

    return {
      name: jsonData.product.product_name,
      imageUrl: jsonData.product.image_thumb_url,
    };
  } catch (error) {
    throw new Error(error?.message);
  }
};
