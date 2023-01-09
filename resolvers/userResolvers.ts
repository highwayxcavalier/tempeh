import { GQLError } from 'https://deno.land/x/oak_graphql/mod.ts';
import { UserModel } from '../data/models/UserModel.ts';

const user = async (_: any, { id }: any): Promise<any> => {
  if (!id) {
    throw new GQLError({ type: 'id is empty' });
  }
  const result = await UserModel.findById(id);
  return result;
};
const users = async () => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    console.log(error?.message);
  }
};

const addUser = async (_: any, { input: { username, email } }: any) => {
  const newUser = new UserModel({ username, email, created_at: new Date() });

  try {
    await newUser.save();
  } catch (error) {
    console.error(error?.message);
  }

  return newUser;
};

export const userResolvers = {
  user,
  addUser,
  users,
};
