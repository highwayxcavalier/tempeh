import { GQLError } from 'https://deno.land/x/oak_graphql/mod.ts';
import { ProspectData, User } from '../interfaces/User.ts';

const getUser = (parent: any, { id }: any, context: any, info: any): User => {
  if (!id) {
    throw new GQLError({ type: 'id is empty' });
  }

  return {
    user_id: id,
    username: 'helloworld',
    email: 'helloworld@fgdf.com',
    products: [],
  };
};
const setUser = (
  parent: any,
  { input: { username, email } }: any,
  context: any,
  info: any
) => {
  console.log('input:', username, email);

  return {
    done: true,
  };
};

export const userResolvers = {
  getUser,
  setUser,
};
