// route to get logged in user's info (needs the token)
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
      'X-RapidAPI-Key': '7fd94401d9mshdf1b11802ab2735p1d0e9ejsna5ee8fc24f35',
      'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
    }
  };
  
  export const searchShoes = (query) => {
    return fetch(`https://the-sneaker-database.p.rapidapi.com/search?limit=10=${query}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));;
  };
  