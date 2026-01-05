import {
  Heart,
  Share2,
  MapPin,
  Star,
  Wifi,
  Utensils,
  Accessibility,
  Plane,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { flightsDetails, amenitiesGrid } from "../../../data/flightDeals";
import AmenitiesSlider from "../../../components/Flight Flow/AmenitiesSlider";


export default function FlightDealPage() {
  const { id } = useParams();
  const flightId = Number(id);

  const [activeClass, setActiveClass] = useState("economy");
  const [liked, setLiked] = useState(false);
  const flight = flightsDetails.find((f) => f.id === flightId);

  const renderAmenityIcon = (type) => {
    const icons = {
      wifi: <Wifi className="w-5 h-5" />,
      power: <span className="text-lg">🔌</span>,
      food: <Utensils className="w-5 h-5" />,
      wheelchair: <Accessibility className="w-5 h-5" />,
    };
    return icons[type];
  };

  if (!flight) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Flight not found
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* BREADCRUMB */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/flight-lists" className="text-orange-500 hover:underline">
            Flights
          </Link>
          <span className="mx-2">›</span>
          <span>{flight.airline}</span>
          <span className="mx-2">›</span>
          <span>{flight.aircraft}</span>
        </div>

        {/* TITLE + PRICE */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{flight.title}</h1>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{flight.arrivalCode}</span>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1 bg-teal-50 px-3 py-1 rounded border">
                <Star className="w-4 h-4 fill-teal-600 text-teal-600" />
                <span className="font-semibold text-teal-600">
                  {flight.rating}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                {flight.reviews} reviews
              </span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-4xl font-bold text-orange-500 mb-4">
              ${flight.price}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setLiked(!liked)}
                className="p-2 border rounded-lg"
              >
                <Heart
                  className={`w-6 h-6 ${
                    liked ? "fill-red-500 text-red-500" : "text-gray-400"
                  }`}
                />
              </button>

              <button className="p-2 border rounded-lg">
                <Share2 className="w-6 h-6 text-gray-400" />
              </button>

              <Link to={`/flight-lists/${flight.id}/payment`}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg">
                Book now
              </Link>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden mb-8 h-72">
          <img
            src={flight.image}
            alt={flight.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CABIN CLASS */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold">Cabin Class</h2>
            <div className="flex gap-6">
              {["economy", "business", "first"].map((cls) => (
                <label key={cls} className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={activeClass === cls}
                    onChange={() => setActiveClass(cls)}
                  />
                  <span className="capitalize">{cls}</span>
                </label>
              ))}
            </div>
          </div>

          <AmenitiesSlider amenities={amenitiesGrid} />
        </div>

        {/* FLIGHT DETAILS CARD */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-bold mb-4">{flight.date}</h3>

          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold">{flight.departure}</div>
              <div className="text-xs text-gray-500">
                {flight.departureCode}
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center">
              <div className="flex items-center w-full gap-2">
                <div className="flex-1 h-px bg-gray-300" />
                <Plane className="w-5 h-5 text-gray-400" />
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <span className="text-xs text-gray-500 mt-1">
                {flight.duration}
              </span>
            </div>

            <div className="text-right">
              <div className="font-bold">{flight.arrival}</div>
              <div className="text-xs text-gray-500">{flight.arrivalCode}</div>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            {flight.amenities.map((a) => (
              <div key={a} className="text-gray-400">
                {renderAmenityIcon(a)}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
