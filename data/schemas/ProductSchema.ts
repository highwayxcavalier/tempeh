import mongoose from 'npm:mongoose@6.7';
const { Schema } = mongoose;

export const productSchema = new Schema({
  name: String,
  expiration_date: String,
  created_at: Date,
  storage: String,
  description: String,
  quantity: String,
  tags: [String],
  image: String,
});
