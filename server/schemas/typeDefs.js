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
    description: String
    title: String
    image: String
    price: String
}

input shoeInput {
    shoeId: String
    description: String
    title: String
    image: String
    price: String
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
