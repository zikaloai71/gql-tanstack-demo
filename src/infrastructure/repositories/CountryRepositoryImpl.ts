import { injectable } from "inversify";

import { CountryRepository } from "@/adapters/gateways/CountryRepository";
import {  CountryService } from "../api/CountryService";
import { CountryFilterInput } from "@/gql/graphql";
import { validateAndTransformCountries } from "@/core/entities/Country";




@injectable()
export class CountryRepositoryImpl implements CountryRepository {
  async getCountries(input?:CountryFilterInput) {
    return validateAndTransformCountries((await CountryService.getAll(input)).countries);
  }
}

