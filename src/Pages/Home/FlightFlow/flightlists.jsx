import { Globe, User, ChevronDown, Plane } from 'lucide-react';
import FlightCard from '../../../components/FlightFlow/flightCard';
import SearchBar from '../../../components/FlightFlow/flightSearchArea';
import Filters from '../../../components/FlightFlow/flightfilter';
import { flights } from '../../../data/flightDeals';
const FlightLists=()=> {

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="px-6 py-8 bg-white shadow-lg rounded-xl mb-10">

        <SearchBar />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Filters />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="flex items-center border-b">
                <button className="flex-1 py-4 text-center border-b-2 border-transparent hover:border-gray-300">
                  <div className="text-sm font-semibold">Cheapest</div>
                  <div className="text-xs text-gray-500">$99 · 2h 18m</div>
                </button>
                <button className="flex-1 py-4 text-center border-b-2 border-teal-500">
                  <div className="text-sm font-semibold">Best</div>
                  <div className="text-xs text-gray-500">$99 · 2h 18m</div>
                </button>
                <button className="flex-1 py-4 text-center border-b-2 border-transparent hover:border-gray-300">
                  <div className="text-sm font-semibold">Quickest</div>
                  <div className="text-xs text-gray-500">$99 · 2h 18m</div>
                </button>
                <button className="flex items-center space-x-2 px-6 py-4 text-sm text-gray-700 hover:bg-gray-50">
                  <span>☰</span>
                  <span>Other sort</span>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">
                Showing 4 of <span className="text-teal-600">257 places</span>
              </div>
              <button className="flex items-center space-x-2 text-sm text-gray-700">
                <span>Sort by Recommended</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {flights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </div>

            <button className="w-full mt-6 bg-teal-700 hover:bg-teal-800 text-white py-4 rounded-lg font-medium transition-colors">
              Show more results
            </button>
          </div>
        </div>
      </main>

    </div>
  );
}
export default FlightLists;
