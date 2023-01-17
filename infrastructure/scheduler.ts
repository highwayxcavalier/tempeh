import { Cron } from 'https://deno.land/x/croner@5.3.4/src/croner.js';
import { ProductModel } from '../data/models/ProductModel.ts';

const checkExpirationDates = async () => {
  await ProductModel.updateMany(
    { expiration_date: new Date() },
    { isExpired: true }
  );
};

Cron('@daily', checkExpirationDates);
