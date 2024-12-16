import { Country } from '@/gql/graphql';

import { IsNotEmpty, IsOptional, IsString, validateSync} from 'class-validator';
import {  plainToClass, Expose, Transform } from 'class-transformer';

export class CountryDTO  {
  @Expose({ name: 'name' })
  @Transform(({ value }) => value?.toLowerCase())
  @IsNotEmpty()
  countryName!: string;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsNotEmpty()
  phone!: string;
}

export function validateAndTransformCountries(data: Country[]): CountryDTO[] {
  return data.map(country => {
   
    const countryDTO = plainToClass(CountryDTO, country);

    const errors = validateSync(countryDTO, { whitelist: true, forbidNonWhitelisted: true });
  
    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors.map(err => JSON.stringify(err.constraints)).join(', ')}`);
    }
   
    return countryDTO;
  });
}


