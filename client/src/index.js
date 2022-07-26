import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'; 

const rootElement = document.getElementById("root");

const client = new ApolloClient({
  uri: 'link: authLink.concat(httpLink)',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
