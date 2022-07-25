import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../../utils/auth';
import { searchGoogleBooks } from '../../utils/API';
import { saveShoeIds, getSavedShoeIds } from '../../utils/localStorage';

import { useMutation } from '@apollo/client';
import { SAVE_SHOE } from '../../utils/mutations';

const SearchShoes = () => {
  // create state for holding returned google api data
  const [searchedShoes, setSearchedShoes] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved shoeId values
  const [savedShoeIds, setSavedShoeIds] = useState(getSavedShoeIds());

   // use mutation to save the shoe
   const [saveShoe] = useMutation(SAVE_SHOE);
  
  // set up useEffect hook to save `savedShoeIds` list to localStorage on component unmount
  useEffect(() => {
    return () => saveShoeIds(savedShoeIds);
  });

  // create method to search for shoes and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchGoogleBooks(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const shoeData = items.map((shoe) => ({
        shoeId: shoe.id,
        authors: shoe.volumeInfo.authors || ['No author to display'],
        title: shoe.volumeInfo.title,
        description: shoe.volumeInfo.description,
        image: shoe.volumeInfo.imageLinks?.thumbnail || '',
      }));

      setSearchedShoes(shoeData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a shoe to our database
  const handleSaveShoe = async (shoeId) => {
    // find the shoe in `searchedShoes` state by the matching id
    const shoeToSave = searchedShoes.find((shoe) => shoe.shoeId === shoeId);

    try {
      // save the shoe to the savedShoes subdocument array
      await saveShoe({
        variables: {
          shoeBody: shoeToSave
        }
      })

      // if shoe successfully saves to user's account, save shoe id to state
      setSavedShoeIds([...savedShoeIds, shoeToSave.shoeId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Shoes!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for shoes'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedShoes.length
            ? `Viewing ${searchedShoes.length} results:`
            : 'Search for a shoe to begin'}
        </h2>
        <CardColumns>
          {searchedShoes.map((shoe) => {
            return (
              <Card key={shoe.shoeId} border='dark'>
                {shoe.image ? (
                  <Card.Img src={shoe.image} alt={`The cover for ${shoe.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{shoe.title}</Card.Title>
                  <p className='small'>Authors: {shoe.authors}</p>
                  <Card.Text>{shoe.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedShoeIds?.some((savedShoeId) => savedShoeId === shoe.shoeId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveShoe(shoe.shoeId)}>
                      {savedShoeIds?.some((savedShoeId) => savedShoeId === shoe.shoeId)
                        ? 'This shoe has already been saved!'
                        : 'Save this shoe!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchShoes;