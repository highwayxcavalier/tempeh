import { gql } from 'https://deno.land/x/oak_graphql@0.6.4/mod.ts';

export const types = gql`
  type Product {
    id: ID!
    name: String!
    expiration_date: String!
    created_at: String!
    storage: String
    description: String
    quantity: String
    tags: [String]
    image: String
  }

  input ProspectData {
    username: String!
    email: String!
  }

  input ProductInput {
    name: String!
    expiration_date: String!
    storage: String
    quantity: Int!
    tags: [String]
    description: String
  }

  input DeleteInput {
    id: ID!
  }

  type ResolveType {
    done: Boolean
  }

  type User {
    id: ID!
    username: String!
    email: String!
    products: [Product]
    created_at: String!
    updated_at: String!
  }

  type Query {
    user(id: ID!): User!
    users: [User]
    product(id: ID!): Product
    products: [Product!]!
  }

  type Mutation {
    addUser(input: ProspectData!): User!
    addProduct(input: ProductInput): Product!
    deleteProduct(input: DeleteInput!): ResolveType!
  }
`;
