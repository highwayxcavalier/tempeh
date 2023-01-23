import { ProductModel } from "../data/models/ProductModel.ts";
import { format } from "../deps.ts";

const checkExpirationDates = async () => {
  await ProductModel.updateMany(
    { expiration_date: format(new Date(), "dd-MM-yyyy") },
    { isExpired: true },
  );
};

checkExpirationDates();
