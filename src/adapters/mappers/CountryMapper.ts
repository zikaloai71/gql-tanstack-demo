import { CountryEntity } from "@/core/entities/Country";
import { Country } from "@/infrastructure/gql/graphql";
import { plainToClass } from "class-transformer";
import { validateSync } from "class-validator";


export function validateAndTransformCountries(countries: Country[]): CountryEntity[] {
  return countries.map(country => {
   
    const countryDTO = plainToClass(CountryEntity, country);

    const errors = validateSync(countryDTO, { whitelist: true, forbidNonWhitelisted: true });
  
    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors.map(err => JSON.stringify(err.constraints)).join(', ')}`);
    }
   
    return countryDTO;
  });
}

export function validateAndTransformCountry(data: Country): CountryEntity {
  const countryDTO = plainToClass(CountryEntity, data);

  const errors = validateSync(countryDTO, { whitelist: true, forbidNonWhitelisted: true });

  if (errors.length > 0) {
    throw new Error(`Validation failed: ${errors.map(err => JSON.stringify(err.constraints)).join(', ')}`);
  }

  return countryDTO;
}


// 1- how to customize minimals ui template by using custom design tokens 
// 2- how to customize different components in minimals (grid,table)
// 3- what is the structure of minimals.