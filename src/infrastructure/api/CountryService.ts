import { gql } from "graphql-request";

class CountriesQueries {
  fetchCountries() {
    return gql`
      query countries($input: CountryFilterInput) {
        countries(filter: $input) {
          name
          phone
          currency
        }
      }
    `;
  }
}

const countryQuery =  new CountriesQueries();


import { graphQLClient } from './GraphQLInstance';
import { CountryFilterInput, Query } from "../gql/graphql";





export const CountryService = {

  getAll: async (filterInput?:CountryFilterInput): Promise<Query> =>  {
   return graphQLClient.request(countryQuery.fetchCountries(), {input: filterInput});
  },

};

