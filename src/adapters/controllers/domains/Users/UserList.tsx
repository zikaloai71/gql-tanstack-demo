import React from "react";
// import { useUserQueries } from "../../../../infrastructure/hooks/useUserQueries";
// import { Button } from "@/components/ui/button";
import { useCountriesQueries } from "@/infrastructure/hooks/useCountries";
import { Input } from "@/components/ui/input";

export const UserList: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const { useGetAllCountries } = useCountriesQueries();

  const { data, isPending } = useGetAllCountries({
    name:{
      regex: `${searchValue ? `.*${searchValue}.*` : "" }`,
    },
    
  });
  // const deleteUserMutation = useDeleteUser();


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
        {data?.countries.length === 0 && <p>No countries found</p>}
        {isPending && <p>Loading...</p>}
        {data?.countries.map((country) => (
          <li key={country.name}>
            {country.name} - {country.phone} - {country.currency}
            {/* <Button 
            onClick={() => deleteUserMutation.mutate(user?.id || "")}
            className="text-white bg-red-500"
            >Delete</Button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
