import React, { useState } from "react";
// import logo from "../src/assets/images/nike_sneakers-brandlogo.net.png";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from "./components/Nav";
import SearchShoes from './components/pages/SearchShoes';
import SavedShoes from './components/pages/SavedShoes';

import Home from "./components/Home";
import Shop from "./components/Shop"; 
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const [homeSelected, setHomeSelected] = useState(false);
  const [shopSelected, setShopSelected] = useState(false);
  const [signUpSelected, setSignUpSelected] = useState(false);
  const [loginSelected, setLoginSelected] = useState(false);

  return (
    <>
       <Nav setHomeSelected={setHomeSelected} setShopSelected={setShopSelected} setSignUpSelected={setSignUpSelected} setLoginSelected={setLoginSelected}/>
       <div>
        {!shopSelected && !signUpSelected && !loginSelected && <Home/>}
        {shopSelected && <Shop/>}
        {signUpSelected && <SignUp/>}
        {loginSelected && <Login/>}
       </div>
    </>
      
        
  );
}

export default App;