import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Search, Plus, Minus, List} from "lucide-react";
import FilterSidebar from "./FilterSidebar";
import HotelCard from "./HotelCard";
import { hotels } from "./hotelsData";

const hotelmain = hotels;
const MapView = ({ onClose }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [zoom, setZoom] = useState(13);  

  // controls
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isCardsOpen, setIsCardsOpen] = useState(true);
  const [isMapOpen, setIsMapOpen] = useState(true);

  return (
    <div className="relative w-full h-[calc(100vh-80px)] flex bg-gray-100">
      {/* ================= FILTER TOGGLE BUTTON ================= */}

      <button
        onClick={() => setIsFilterOpen((prev) => !prev)}
        className="absolute top-4 left-4 z-30 bg-white p-2 rounded-lg shadow"
      >
        <ChevronLeft
          className={`transition-transform duration-300 ${
            isFilterOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      {/* ================= FILTER SIDEBAR ================= */}
      <div
        className={`relative bg-white border-r transition-all duration-300 ${
          isFilterOpen ? "w-[320px]" : "w-0 overflow-hidden"
        }`}
      >
        <div className="h-full overflow-y-auto p-4">
          <FilterSidebar />
        </div>
      </div>

      {/* ================= CARDS TOGGLE BUTTON ================= */}
      <button
        onClick={() => setIsCardsOpen((prev) => !prev)}
        className={`absolute top-4 z-30 bg-white p-2 rounded-lg shadow transition-all ${
          isFilterOpen ? "left-[340px]" : "left-4"
        }`}
      >
        <ChevronLeft
          className={`transition-transform duration-300 ${
            isCardsOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      {/* ================= HOTEL LIST ================= */}
      {isCardsOpen && (
        <div className="w-[420px] bg-gray-50 border-r overflow-y-auto p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 gap-3">
            {!isFilterOpen && (
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 ml-10 px-2 py-2 border rounded-lg bg-white shadow-sm text-sm hover:bg-gray-50"
              >
                <List className="w-4 h-4" />
                <span>Show Filters</span>
                <ChevronRight size={16} />
              </button>
            )}

            <select className="ml-auto rounded-lg px-3 py-2 text-sm border bg-white shadow-sm ">
              <option>Top Reviewed</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
            </select>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {hotelmain.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} viewMode="map" />
            ))}
          </div>
        </div>
      )}

      {/* ================= MAP ================= */}
      {isMapOpen && (
        <div className="flex-1 relative">
          {/* Search toggle */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="absolute top-4 left-4 z-20 bg-white p-2 rounded-lg shadow"
          >
            <Search size={18} />
          </button>

          {/* Search input */}
          {showSearch && (
            <input
              type="text"
              placeholder="Search on map"
              className="absolute top-16 left-4 z-20 w-64 px-3 py-2 border rounded-lg shadow"
            />
          )}

          {/* Close Map */}
          <button
            onClick={() => {
              setIsMapOpen(false);
              if (onClose) onClose();
            }}
            className="absolute top-4 right-4 z-20 bg-white p-2 rounded-lg shadow"
          >
            <X size={18} />
          </button>

          {/* Zoom */}
          <div className="absolute top-20 right-4 z-20 flex flex-col gap-2">
            <button
              onClick={() => setZoom((prev) => prev + 1)}
              className="bg-white p-2 rounded-lg shadow"
            >
              <Plus size={18} />
            </button>
            <button
              onClick={() => setZoom((prev) => prev - 1)}
              className="bg-white p-2 rounded-lg shadow"
            >
              <Minus size={18} />
            </button>
          </div>

          {/* Map */}
          <iframe
            title="Barcelona Map"
            className="w-full h-full border-0"
            src={`https://www.google.com/maps?q=41.3851,2.1734&z=${zoom}&output=embed`}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default MapView;
