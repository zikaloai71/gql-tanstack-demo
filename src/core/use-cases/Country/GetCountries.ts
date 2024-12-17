import { CountryRepository } from "@/adapters/interfaces/CountryRepository";

export class GetCountries {
  constructor(private countryRepository: CountryRepository) {}

  execute() {
    return this.countryRepository.getCountries();
  }
}