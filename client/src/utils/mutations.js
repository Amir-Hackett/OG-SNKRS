import { gql } from '@apollo/client';

<<<<<<< HEAD
export const LOGIN_USER = gql`
    mutation login($email: String!, $ password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
=======
export const LOGIN_USER = gql `
mutation login($email: String!, $password: String!) {
    login(email:$email, password: $password) {
        token
        user {
            email
            username
        }
    }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_SHOE = gql`
mutation saveShoe($shoeBody: shoeInput!) {
    saveShoe (shoeBody:$shoeBody){
      _id
      username
      shoeCount
      savedShoes {
        description
        shoeId
        image
        link
      }
    }
  }
`;

export const REMOVE_SHOE = gql`
mutation removeShoe($shoeId: ID!) {
    removeShoe (shoeId: $shoeId){
      _id
      username
      shoeCount
      savedShoes {
        description
        shoeId
        image
        link
      }
    }
  }
`;
>>>>>>> 0b7787b25717f7fd0638493d681ddbcbf110323a
