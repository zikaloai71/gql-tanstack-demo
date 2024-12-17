import { CountryEntity } from "@/core/entities/Country";
import { CountryFilterInput } from "@/infrastructure/gql/graphql";


export interface CountryRepository {
  getCountries(input?:CountryFilterInput): Promise<CountryEntity[]>;
}


