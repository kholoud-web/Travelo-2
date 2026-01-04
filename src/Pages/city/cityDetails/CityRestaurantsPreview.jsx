import { Link } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "Italiano Pizza",
    image: "https://images.unsplash.com/photo-1729601222018-126df30671f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1652520415795-7f13ed13b1f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudCUyMGhvdGVsfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Healthy Bowl",
    image: "https://images.unsplash.com/photo-1695094411862-0e047fbddcb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBob3RlbHxlbnwwfDB8MHx8fDA%3D",
  },
];

const CityRestaurantsPreview = ({ cityId }) => {
  return (
    <section className="bg-gray-50 py-24 mt-24">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between mb-10">
          <h2 className="text-3xl font-bold">
            Restaurants in {cityId}
          </h2>

          <Link
            to={`/cities/${cityId}/restaurants`}
            className="text-teal-500 font-semibold"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurants.map((res) => (
            <div
              key={res.id}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={res.image}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">
                  {res.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityRestaurantsPreview;
