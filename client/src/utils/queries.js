import { gql } from '@apollo/client';

<<<<<<< HEAD
=======
export const GET_ME = gql `
query {
    me {
        _id
        username
        shoeCount
        savedShoes {
            shoeId
            description
            image
            link
        }
    }
}
`;
>>>>>>> 0b7787b25717f7fd0638493d681ddbcbf110323a
