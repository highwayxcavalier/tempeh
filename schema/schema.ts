import { gql } from 'https://deno.land/x/oak_graphql@0.6.4/mod.ts';

export const types = gql`
  type Product {
    id: ID!
    name: String!
    expiration_date: String!
    storage: String
    description: String
    quantity: String
    tags: [String!]!
    image: String
  }

  input ProspectData {
    username: String!
    email: String!
  }

  type ResolveType {
    done: Boolean
  }

  type User {
    user_id: ID!
    username: String!
    email: String!
    products: [Product]
  }

  type Query {
    getUser(id: String): User
    getProducts(userId: String): [Product]
  }

  type Mutation {
    setUser(input: ProspectData!): ResolveType!
    #   addProduct()
    #   removeProduct()
  }
`;
