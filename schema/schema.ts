import { gql } from "https://deno.land/x/oak_graphql@0.6.4/mod.ts";

export const types = gql`
  type Product {
    id: ID!
    name: String!
    expiration_date: String!
    createdAt: String!
    updatedAt: String!
    storage: String
    description: String
    quantity: String
    tags: [String]
    image: String
    isExpired: Boolean!
  }

  input ProspectData {
    username: String!
    email: String!
  }

  input ProductInput {
    name: String!
    expiration_date: String!
    storage: String
    quantity: String!
    tags: [String]
    description: String
    isExpired: Boolean!
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
    createdAt: String!
    updatedAt: String!
  }

  type FoodItem {
    name: String!
    imageUrl: String
  }

  type Query {
    user(id: ID!): User!
    users: [User]
    product(id: ID!): Product
    products: [Product!]!
    foodData(barcode: String!): FoodItem
  }

  type Mutation {
    addUser(input: ProspectData!): User!
    addProduct(input: ProductInput): Product!
    deleteProduct(input: DeleteInput!): ResolveType!
  }
`;
