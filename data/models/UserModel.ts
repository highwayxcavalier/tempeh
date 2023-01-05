import mongoose from 'npm:mongoose@6.7';
import { userSchema } from '../schemas/UserSchema.ts';

const { model } = mongoose;

export const UserModel = model('User', userSchema);
