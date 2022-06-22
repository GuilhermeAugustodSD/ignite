import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
 uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oy1c4k1lt001w722pkep28/master',
 cache: new InMemoryCache()
})