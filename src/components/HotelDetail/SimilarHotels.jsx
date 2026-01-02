import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";
import { useRef } from "react";


const SimilarHotels = () => {

  const similarHotelsData = [
    {
      id: 1,
      name: "Hotel Arts Barcelona",
      location: "Barceloneta, Barcelona",
      stars: 5,
      rating: "Fabulous · 8.9",
      price: 320,
      image: "/assets/images/similar1.jpg",
    },
    {
      id: 2,
      name: "W Barcelona",
      location: "Sant Martí, Barcelona",
      stars: 5,
      rating: "Excellent · 9.1",
      price: 410,
      image: "/assets/images/similar2.jpg",
    },
    {
      id: 3,
      name: "Majestic Hotel & Spa",
      location: "Eixample, Barcelona",
      stars: 5,
      rating: "Very good · 8.7",
      price: 280,
      image: "/assets/images/similar3.jpg",
    },
    {
      id: 4,
      name: "Hotel Casa Fuster",
      location: "Gràcia, Barcelona",
      stars: 5,
      rating: "Superb · 9.0",
      price: 295,
      image: "/assets/images/similar4.jpg",
    },
    {
      id: 5,
      name: "Ohla Barcelona",
      location: "Ciutat Vella, Barcelona",
      stars: 5,
      rating: "Excellent · 9.2",
      price: 350,
      image: "/assets/images/similar1.jpg",
    },
    {
      id: 6,
      name: "Hotel Casa Fuster",
      location: "Ciutat Vella, Barcelona",
      stars: 5,
      rating: "Excellent · 9.2",
      price: 350,
      image: "/assets/images/similar2.jpg",
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
    <div id="similar-hotels" className="mt-16 relative">
      <h2 className="text-xl font-semibold mb-6">
        Similar Hotels in Barcelona
      </h2>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center shadow hover:shadow-md"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center shadow hover:shadow-md"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slider */}
      <div ref={sliderRef} className="flex gap-6 overflow-hidden scroll-smooth">
        {similarHotelsData.map((hotel) => (
          <div
            key={hotel.id}
            className="min-w-[260px] max-w-[260px] border border-gray-200 rounded-xl overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="h-44">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="text-sm font-semibold leading-tight">
                {hotel.name}
              </h3>

              <div className="flex items-center gap-1 text-xs text-gray-500">
                <MapPin size={12} />
                {hotel.location}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <div className="flex">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">{hotel.rating}</span>
              </div>

              {/* Price */}
              <div className="pt-2">
                <p className="text-xs text-gray-500">Price for 1 night</p>
                <p className="text-lg font-semibold">€{hotel.price}</p>
              </div>

              {/* Button */}
              <button className="w-full mt-2 border border-teal-600 text-teal-600 text-sm font-medium py-2 rounded-lg hover:bg-blue-50">
                View availability
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarHotels;
