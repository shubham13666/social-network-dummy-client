import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import React from 'react';

const client = new ApolloClient({
    uri: 'http://localhost:5000',
    cache: new InMemoryCache()
});
const apolloProvider = () => (<ApolloProvider client={client}>
    <App />
</ApolloProvider>);
export default apolloProvider;
