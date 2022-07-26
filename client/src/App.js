import React from "react";
import logo from "../src/assets/images/nike_sneakers-brandlogo.net.png";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import NavApp from "./components/Nav";
import SignupForm from "./components/Signup";
import LoginForm from "./components/Login";
// import Shop from "./components/Shop";
import Home from "./components/pages/Home";

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <Router>
      <NavApp />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Can you kick it?</p>
        </header>
      </div>
      {/* <div className="container"> */}
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/signupform" component={SignupForm} />
          <Route path="/loginform" component={LoginForm} />
        </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
