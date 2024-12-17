import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://countries.trevorblades.com/';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
   'Content-Type': 'application/json',
    Authorization: `Bearer YOUR_ACCESS_TOKEN`,
  },
});

