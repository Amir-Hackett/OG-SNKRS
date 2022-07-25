// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs; type Query{} defines a Query;
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedShoes: [Shoe]
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Shoe {
    shoeId: ID!
    sku: String
    brand: String
    colorway: String
    image: String
    retailPrice: String
}

input shoeInput {
    shoeId: String
    description: String
    image: String
    retailPrice: String
}

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveShoe(shoeBody: shoeInput!): User
    removeShoe(shoeId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
