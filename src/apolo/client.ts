import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.mocki.io/v1/YOUR_MOCKI_ENDPOINT',
    cache: new InMemoryCache(),
});

export default client;
