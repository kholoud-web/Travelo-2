import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function FlightCard({ flight }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="text-4xl">{flight.logo}</div>
          <div>
            <h3 className="font-semibold text-lg">{flight.airline}</h3>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-semibold">
              {flight.rating}
            </div>
            <div className="text-sm">
              <div className="font-semibold">Very Good</div>
              <div className="text-gray-500">{flight.reviews} reviews</div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs text-gray-500">starting from</div>
            <div className="text-2xl font-bold text-red-500">${flight.price}</div>
            <div className="text-xs text-gray-400">/night</div>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {flight.flights.map((flightDetail, index) => (
          <div key={index} className="flex items-center space-x-4 text-sm">
            <input type="checkbox" className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500" />
            <span className="font-medium">{flightDetail.departure}</span>
            <span className="text-gray-400">-</span>
            <span className="font-medium">{flightDetail.arrival}</span>
            <span className="text-gray-400 text-xs">{flight.airline}</span>
            <span className="px-2 py-1 bg-gray-100 rounded text-xs">{flightDetail.type}</span>
            <span className="text-gray-600">{flightDetail.duration}</span>
            <span className="text-gray-400 text-xs">{flightDetail.route}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <button className="p-2 border border-gray-300 rounded-lg hover:border-teal-500 transition-colors">
          <Heart className="w-5 h-5 text-gray-400" />
        </button>
        <Link to={`/flight-lists/${flight.id}`} className="flex-1 bg-teal-600 px-5 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition-colors">
          View Deals
        </Link>
      </div>
    </div>
  );
}
