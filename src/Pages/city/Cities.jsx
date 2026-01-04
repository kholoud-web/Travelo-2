import { useState } from "react";
import CitiesGrid from "./CitiesGrid";
import CitiesHero from "./CitiesHero";
import CitiesFilter from './CitiesFilter';

function Cities() {
  const [filters, setFilters] = useState({
    search: "",
    minHotels: "",
  });

  return (
    <>
      <CitiesHero />
      <CitiesFilter onFilterChange={setFilters} />
      <CitiesGrid filters={filters} />
    </>
  );
}

export default Cities;
