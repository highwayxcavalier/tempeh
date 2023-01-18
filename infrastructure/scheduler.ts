import { Cron } from 'https://deno.land/x/croner@5.3.4/src/croner.js';
import { ProductModel } from '../data/models/ProductModel.ts';
import { format } from 'https://deno.land/std@0.173.0/datetime/format.ts';

const checkExpirationDates = async () => {
  await ProductModel.updateMany(
    { expiration_date: format(new Date(), 'dd-MM-yyyy') },
    { isExpired: true }
  );
};

const _scheduler = new Cron('@daily', checkExpirationDates);
