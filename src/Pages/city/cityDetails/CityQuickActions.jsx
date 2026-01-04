import { Link } from "react-router-dom";

const CityQuickActions = ({ cityId }) => {
  return (
    <section className="max-w-7xl mx-auto px-10 mt-12 flex gap-4">
      <Link
        to={`/cities/${cityId}/hotels`}
        className="bg-teal-500 text-white px-6 py-3 rounded-lg"
      >
        Explore Hotels
      </Link>

      <Link
        to={`/cities/${cityId}/restaurants`}
        className="border border-teal-500 text-teal-500 px-6 py-3 rounded-lg"
      >
        Explore Restaurants
      </Link>
    </section>
  );
};
export default CityQuickActions;