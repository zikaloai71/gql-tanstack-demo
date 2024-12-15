import { CountryRepository } from "@/adapters/gateways/CountryRepository";

export class GetCountries {
  constructor(private countryRepository: CountryRepository) {}

  execute() {
    return this.countryRepository.getCountries();
  }
}