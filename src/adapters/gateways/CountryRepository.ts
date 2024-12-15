import { Query } from "@/gql/graphql";
import { CountryFilterInput } from "@/gql/graphql";


export interface CountryRepository {
  getCountries(input?:CountryFilterInput): Promise<Query>;
}


