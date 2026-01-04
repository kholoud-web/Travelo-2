import { useState } from "react";

const CitiesFilter = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [minHotels, setMinHotels] = useState("");

  const handleChange = () => {
    onFilterChange({
      search,
      minHotels,
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-10 mt-12">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleChange();
          }}
          className="flex-1 border rounded-lg px-4 py-3 outline-none"
        />

        {/* Hotels Count */}
        <input
          type="number"
          placeholder="Min hotels"
          value={minHotels}
          onChange={(e) => {
            setMinHotels(e.target.value);
            handleChange();
          }}
          className="w-48 border rounded-lg px-4 py-3 outline-none"
        />

      </div>
    </section>
  );
};

export default CitiesFilter;
