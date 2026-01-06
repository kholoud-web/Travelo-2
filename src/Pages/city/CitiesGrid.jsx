import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../axiosClient";

// const cities = [
//   {
//     id: "cairo",
//     name: "Cairo",
//     image:
//       "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     hotels: 120,
//     restaurants: 340,
//   },
//   {
//     id: "makka",
//     name: "Makkah",
//     image:
//       "https://plus.unsplash.com/premium_photo-1697730274057-19338e84db8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     hotels: 300,
//     restaurants: 500,
//   },
//   {
//     id: "qatar",
//     name: "Qatar",
//     image:
//       "https://images.unsplash.com/photo-1700901742651-6b353164caf3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     hotels: 90,
//     restaurants: 210,
//   },
// ];

const CitiesGrid = ({ filters }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient
      .get("/api/cities")
      .then((response) => {
        setCities(response.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filteredCities = cities.filter((city) => {
    const matchSearch = city.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const matchHotels =
      !filters.minHotels || city.hotelsCount >= Number(filters.minHotels);

    return matchSearch && matchHotels;
  });

  if (loading) {
    return (
      <p className="text-center text-gray-500 py-24">Loading cities...</p>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-10 py-24">
      {filteredCities.length === 0 && (
        <p className="text-center text-gray-500">No cities found</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredCities.map((city) => (
          <Link
            key={city.id}
            to={`/cities/${city.id}`}
            className="rounded-xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={city.heroImage}
              alt={city.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-bold">{city.name}</h3>
              <p className="text-sm text-gray-500">
                {city.hotelsCount} Hotels • {city.restaurantsCount} Restaurants
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};


export default CitiesGrid;
