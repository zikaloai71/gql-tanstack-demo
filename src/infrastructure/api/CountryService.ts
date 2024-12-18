import { graphQLClient } from './GraphQLInstance';
import { CountryFilterInput, Query } from "../gql/graphql";
import { countryQueries } from "./queries/Country-Queries";


export const CountryService = {

  getAll: async (filterInput?:CountryFilterInput): Promise<Query> =>  {
   return graphQLClient.request(countryQueries.fetchCountries(), {input: filterInput});
  },

};

