import { IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {Expose, Transform} from 'class-transformer';


export class CountryEntity  {
  @Expose({ name: 'name'})
  @Transform(({ value }) => value?.toLowerCase())
  @IsNotEmpty()
  countryName!: string;
  
  @IsOptional()
  @IsString()
  currency?: string;

  @IsNotEmpty()
  phone!: string;
}



