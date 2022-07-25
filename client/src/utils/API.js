// route to get logged in user's info (needs the token)
const API_KEY = process.env.REACT_APP_X_RapidAPI_Key;

export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  // save shoe data for a logged in user
  export const saveShoe = (shoeData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(shoeData),
    });
  };
  
  // remove saved shoe data for a logged in user
  export const deleteShoe = (shoeId, token) => {
    return fetch(`/api/users/shoes/${shoeId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  // make a search to google books api
  // https://www.googleapis.com/books/v1/volumes?q=harry+potter

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
    }
  };
  
  export const searchShoes = (query) => {
    return fetch(`https://the-sneaker-database.p.rapidapi.com/search?limit=10=${query}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));;
  };
  