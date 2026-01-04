import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Filters() {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    departure: true,
    rating: true,
    airlines: true,
    trips: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>

      <div className="space-y-6">
        <div>
          <button
            onClick={() => toggleSection('price')}
            className="flex justify-between items-center w-full mb-4"
          >
            <span className="font-medium">Price</span>
            {expandedSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.price && (
            <div>
              <div className="relative pt-1">
                <input type="range" min="50" max="1200" className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer accent-teal-600" />
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>$50</span>
                <span>$1200</span>
              </div>
            </div>
          )}
        </div>

        <div className="border-t pt-6">
          <button
            onClick={() => toggleSection('departure')}
            className="flex justify-between items-center w-full mb-4"
          >
            <span className="font-medium">Departure Time</span>
            {expandedSections.departure ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.departure && (
            <div>
              <div className="relative pt-1">
                <input type="range" min="0" max="24" className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer accent-teal-600" />
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>12:00Am</span>
                <span>11:58Pm</span>
              </div>
            </div>
          )}
        </div>

        <div className="border-t pt-6">
          <button
            onClick={() => toggleSection('rating')}
            className="flex justify-between items-center w-full mb-4"
          >
            <span className="font-medium">Rating</span>
            {expandedSections.rating ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.rating && (
            <div className="flex space-x-2">
              {['0+', '1+', '2+', '3+', '4+'].map((rating) => (
                <button
                  key={rating}
                  className="flex-1 border border-gray-300 rounded py-2 text-sm hover:border-teal-500 hover:text-teal-600 transition-colors"
                >
                  {rating}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="border-t pt-6">
          <button
            onClick={() => toggleSection('airlines')}
            className="flex justify-between items-center w-full mb-4"
          >
            <span className="font-medium">Airlines</span>
            {expandedSections.airlines ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.airlines && (
            <div className="space-y-3">
              {['Emitiated', 'Fly Dubai', 'Qatar', 'Etihad'].map((airline) => (
                <label key={airline} className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500" />
                  <span className="text-sm text-gray-700">{airline}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="border-t pt-6">
          <button
            onClick={() => toggleSection('trips')}
            className="flex justify-between items-center w-full mb-4"
          >
            <span className="font-medium">Trips</span>
            {expandedSections.trips ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.trips && (
            <div className="space-y-3">
              {['Round trip', 'On Way', 'Multi-City', 'My Dates Are Flexible'].map((trip) => (
                <label key={trip} className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500" />
                  <span className="text-sm text-gray-700">{trip}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
