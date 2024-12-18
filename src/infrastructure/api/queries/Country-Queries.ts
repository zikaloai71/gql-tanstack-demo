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



export const countryQueries =  new CountriesQueries();