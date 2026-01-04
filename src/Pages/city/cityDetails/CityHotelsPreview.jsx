import { Link } from "react-router-dom";

const hotels = [
  {
    id: 1,
    name: "Luxury Palace Hotel",
    price: "$120 / night",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHwwfDB8fHww",
  },
  {
    id: 2,
    name: "Sea View Resort",
    price: "$90 / night",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHwwfDB8fHww",
  },
  {
    id: 3,
    name: "Urban Stay",
    price: "$70 / night",
    image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsfGVufDB8MHwwfHx8MA%3D%3D",
  },
];

const CityHotelsPreview = ({ cityId }) => {
  return (
    <section className="max-w-7xl mx-auto px-10 mt-24">
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-bold">
          Hotels in {cityId}
        </h2>

        <Link
          to={`/cities/${cityId}/hotels`}
          className="text-teal-500 font-semibold"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={hotel.image}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg">
                {hotel.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {hotel.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityHotelsPreview;
