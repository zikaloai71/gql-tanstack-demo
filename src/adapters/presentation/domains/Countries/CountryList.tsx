import { useState } from "react";
import { useCountriesQueries } from "@/infrastructure/hooks/useCountries";
import { DataGrid, GridFilterItem } from "@mui/x-data-grid";

export const CountryList: React.FC = () => {
  // const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState<GridFilterItem>();

  const { useGetAllCountries } = useCountriesQueries();

  const { data: countries, isPending } = useGetAllCountries(
    filter?.field && filter?.value
      ? {
          // name:{
          //   regex: `${searchValue ? `.*${searchValue}.*` : "" }`,
          // },
          [filter?.field]: {
            in: [filter?.value],
            
          },
        }
      : {}
  );
  const countriesWithId = countries?.map((country, index) => ({
    ...country,
    id: index + 1,
  }));

  return (
    <div>
      <div>
        <h1>Countries List</h1>
        {/* <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        /> */}
      </div>
      {isPending && <div>Loading...</div>}
      <DataGrid
        rows={countriesWithId || []}
        columns={[
          { field: "countryName", headerName: "Name" },
          { field: "currency", headerName: "currency" },
          { field: "phone", headerName: "Phone Code" },
        ]}
        filterMode="server"
        onFilterModelChange={(model) => {
          const filter = model.items[0];
          setFilter(filter);
        }}
      />
    </div>
  );
};


