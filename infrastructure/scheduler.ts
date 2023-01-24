import { ProductModel } from "../data/models/ProductModel.ts";
import { format } from "../deps.ts";
import mongoose from "npm:mongoose@^6.7";
import "https://deno.land/std@0.173.0/dotenv/load.ts";

const checkExpirationDates = async () => {
  try {
    await mongoose.connect(
      Deno.env.get("MONGODB_URL") || "mongodb://127.0.0.1:27017/tofu",
    );

    console.log(`Connected: ${mongoose.connection.readyState}`);
  } catch (error) {
    console.error(Deno.env.get("MONGODB_URL"), error);
  }

  try {
    const result = await ProductModel.updateMany(
      { expiration_date: format(new Date(), "dd-MM-yyyy") },
      { isExpired: true },
    );

    console.log("Docs matched: ", result.matchedCount);
    console.log("Docs updated: ", result.modifiedCount);
    console.log("Success?: ", result.acknowledged);
  } catch (error) {
    console.error(error?.message);
  }

  try {
    const result = await ProductModel.updateMany(
      { expiration_date: format(new Date(), "dd-MM-yyyy") },
      { tags: "expired" },
    );

    console.log("Docs matched: ", result.matchedCount);
    console.log("Docs updated: ", result.modifiedCount);
    console.log("Success?: ", result.acknowledged);
  } catch (error) {
    console.error(error?.message);
  }

  mongoose.disconnect();
};

checkExpirationDates();
