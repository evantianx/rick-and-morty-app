import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>Hello world!</header>
      </div>
    </ApolloProvider>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
