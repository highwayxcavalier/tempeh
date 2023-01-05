import { GQLError } from 'https://deno.land/x/oak_graphql/mod.ts';
import { UserModel } from '../data/models/UserModel.ts';

const getUser = async (_: any, { id }: any): Promise<any> => {
  if (!id) {
    throw new GQLError({ type: 'id is empty' });
  }

  return await UserModel.findById(id);
};
const getUsers = async () => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    console.log(error?.message);
  }
};

const setUser = async (_: any, { input: { username, email } }: any) => {
  const newUser = new UserModel({ username, email, created_at: new Date() });

  try {
    await newUser.save();
  } catch (error) {
    console.error(error?.message);
  }

  return newUser;
};

export const userResolvers = {
  getUser,
  setUser,
  getUsers,
};
