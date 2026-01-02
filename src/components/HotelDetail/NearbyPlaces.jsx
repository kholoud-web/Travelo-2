
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";


const NearbyPlaces = () => {

  const nearbyPlaces = [
    {
      id: 1,
      name: "Sagrada Família",
      distance: "1.2 km",
      image: "/assets/images/nearby1.jpg",
    },
    {
      id: 2,
      name: "Park Güell",
      distance: "2.5 km",
      image: "/assets/images/nearby4.jpg",
    },
    {
      id: 3,
      name: "La Rambla",
      distance: "1.8 km",
      image: "/assets/images/nearby1.jpg",
    },
    {
      id: 4,
      name: "Barceloneta Beach",
      distance: "0.6 km",
      image: "/assets/images/nearby4.jpg",
    },
    {
      id: 5,
      name: "Casa Batlló",
      distance: "1.1 km",
      image: "/assets/images/nearby1.jpg",
    },
    {
      id: 6,
      name: "Casa Milà (La Pedrera)",
      distance: "1.3 km",
      image: "/assets/images/nearby4.jpg",
    },
    {
      id: 7,
      name: "Picasso Museum",
      distance: "2.0 km",
      image: "/assets/images/nearby1.jpg",
    },
    {
      id: 8,
      name: "Barcelona Cathedral",
      distance: "1.9 km",
      image: "/assets/images/nearby4.jpg",
    },
    {
      id: 9,
      name: "Montjuïc",
      distance: "3.4 km",
      image: "/assets/images/nearby1.jpg",
    },
    {
      id: 10,
      name: "Camp Nou Stadium",
      distance: "4.6 km",
      image: "/assets/images/nearby4.jpg",
    },
    {
      id: 11,
      name: "Boqueria Market",
      distance: "1.7 km",
      image: "/assets/images/nearby1.jpg",
    },
    {
      id: 12,
      name: "Port Vell",
      distance: "1.4 km",
      image: "/assets/images/nearby4.jpg",
    },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -1040,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 1040,
      behavior: "smooth",
    });
  };

  return (
    <div id="nearby" className="mt-16 relative">
      <h2 className="text-xl font-semibold mb-6">
        12 Most Popular Things to Do Nearby
      </h2>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center shadow hover:shadow-md"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center shadow hover:shadow-md"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slider */}
      <div ref={sliderRef} className="flex gap-6 overflow-hidden scroll-smooth">
        {nearbyPlaces.map((place) => (
          <div
            key={place.id}
            className="min-w-[260px] max-w-[260px] border border-gray-200 rounded-xl overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="h-40">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-1">{place.name}</h3>
              <p className="text-xs text-gray-500">
                {place.distance} from property
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyPlaces;
