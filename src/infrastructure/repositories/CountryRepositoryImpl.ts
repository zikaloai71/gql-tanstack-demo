import { injectable } from "inversify";

import { CountryRepository } from "@/adapters/interfaces/CountryRepository";
import {  CountryService } from "../api/CountryService";


import { CountryFilterInput } from "../gql/graphql";
import { validateAndTransformCountries } from "@/adapters/mappers/CountryMapper";




@injectable()
export class CountryRepositoryImpl implements CountryRepository {
  async getCountries(input?:CountryFilterInput) {
    return validateAndTransformCountries((await CountryService.getAll(input)).countries);
  }
}

