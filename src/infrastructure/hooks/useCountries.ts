import { useQuery} from '@tanstack/react-query';
import { container } from '@/infrastructure/di/container';
import { TYPES } from '@/infrastructure/di/types';
import { CountryRepository } from '@/adapters/interfaces/CountryRepository';
import { CountryFilterInput } from '../gql/graphql';




 export const useCountriesQueries = () => {
   const CountryRepository = container.get<CountryRepository>(TYPES.CountryRepository);
 
   const useGetAllCountries = (input:CountryFilterInput) =>
     useQuery(
     {
       queryKey: ["countries",JSON.stringify(input)],
       queryFn: () => CountryRepository.getCountries(input)
     }
     );


   return {
        useGetAllCountries, 
    };
 };
 