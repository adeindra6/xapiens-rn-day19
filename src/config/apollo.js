import React from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://172.17.0.1:8080/v1/graphql',
    cache: new InMemoryCache(),
});

const GraphQLProvider = ({children}) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);

export {GraphQLProvider};
export default client;