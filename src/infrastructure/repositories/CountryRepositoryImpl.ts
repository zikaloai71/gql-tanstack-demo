import { injectable } from "inversify";

import { CountryRepository } from "@/adapters/gateways/CountryRepository";
import {  CountryService } from "../api/CountryService";
import { CountryFilterInput } from "@/gql/graphql";




@injectable()
export class CountryRepositoryImpl implements CountryRepository {
  async getCountries(input?:CountryFilterInput) {
    return CountryService.getAll(input);
  }
}