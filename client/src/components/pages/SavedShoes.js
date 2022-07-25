import React, { useState } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/react-hooks';


// import { getMe, deleteShoe } from '../utils/API';
//import Auth from '../utils/auth';
import { removeShoeId } from '../../utils/localStorage';
import { REMOVE_SHOE } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries';

const SavedShoes = () => {
  const [userData, setUserData] = useState({});
  const { loading, data } = useQuery(GET_ME);
  const [removeShoe] = useMutation(REMOVE_SHOE);

  
  // create function that accepts the shoe's mongo _id value as param and deletes the shoe from the database
  const handleDeleteShoe = async (shoeId) => {
    try {
      // remove the shoe from the savedShoes subdocument
      const {data: updatedUser} = await removeShoe({
        variables: {shoeId}
      });

      // upon success, update the user data
      setUserData(updatedUser);

      // upon success, remove shoe's id from localStorage
      removeShoeId(shoeId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved shoes!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {data.me.savedShoes.length
            ? `Viewing ${data.me.savedShoes.length} saved ${data.me.savedShoes.length === 1 ? 'shoe' : 'shoes'}:`
            : 'You have no saved shoes!'}
        </h2>
        <CardColumns>
          {data.me.savedShoes.map((shoe) => {
            return (
              <Card key={shoe.shoeId} border='dark'>
                {shoe.image ? <Card.Img src={shoe.image} alt={`The cover for ${shoe.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{shoe.title}</Card.Title>
                  <p className='small'>Authors: {shoe.authors}</p>
                  <Card.Text>{shoe.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteShoe(shoe.shoeId)}>
                    Delete this Shoe!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedShoes;