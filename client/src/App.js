import React, { useState } from "react";
// import logo from "../src/assets/images/nike_sneakers-brandlogo.net.png";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from "./components/Nav";
import SearchShoes from './components/pages/SearchShoes';
import SavedShoes from './components/pages/SavedShoes';

import Home from "./components/pages/Home";
import Shop from "./components/Shop"; 

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
const [selectedNav, setSelectedNav] = useState('home');

const renderPage = () => {
  if(selectedNav == 'home') return <Home />;
  if(selectedNav == 'shop') return <Shop />;
};

  return (

    <div>
       <Nav setSelectedNav={setSelectedNav} />
       {/* <Home /> */}
         {renderPage}
    </div>

    
    // <ApolloProvider>
    //   <Router>
    //     <>
    //       <Nav />
    //       <div className="App">
    //         <header className="App-header">
    //           <img src={logo} className="App-logo" alt="logo" />
    //           <p>Can you kick it?</p>
    //         </header>
    //       </div>
    //       <Switch>
    //       <Route exact path='/' component={SearchShoes} />
    //       <Route exact path='/saved' component={SavedShoes} />
    //       <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
    //       </Switch>
    //     </>
    //   </Router>
    // </ApolloProvider>
    
       
        
  );
}

export default App;
