import { CountryDTO } from "@/core/entities/Country";
import { CountryFilterInput } from "@/gql/graphql";


export interface CountryRepository {
  getCountries(input?:CountryFilterInput): Promise<CountryDTO[]>;
}


