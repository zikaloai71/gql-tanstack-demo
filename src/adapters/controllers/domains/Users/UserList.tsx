import React from "react";

import { useCountriesQueries } from "@/infrastructure/hooks/useCountries";
import { Input } from "@/components/ui/input";

export const UserList: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const { useGetAllCountries } = useCountriesQueries();

  const { data:countries, isPending } = useGetAllCountries({
    name:{
      regex: `${searchValue ? `.*${searchValue}.*` : "" }`,
    },
    
  });



  return (
    <div>
      <div>
        <h1>Countries List</h1>
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <ul className="h-[70vh] overflow-y-auto">
        {countries?.length === 0 && <p>No countries found</p>}
        {isPending && <p>Loading...</p>}
        {countries?.map((country) => (
          <li key={country.countryName}>
            {country.countryName} 
          </li>
        ))}
      </ul>
    </div>
  );
};
