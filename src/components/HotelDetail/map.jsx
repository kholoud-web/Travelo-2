import React, { useState } from "react";
import { X, Plus, Minus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MapPage = () => {
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(13);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="w-full h-screen flex relative">
      {/* Map container */}
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

        {/* Close map */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 z-20 bg-white p-2 rounded-lg shadow"
        >
          <X size={18} />
        </button>

        {/* Zoom controls */}
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

        {/* Google Map */}
        <iframe
          title="Barcelona Map"
          className="w-full h-full border-0"
          src={`https://www.google.com/maps?q=41.3851,2.1734&z=${zoom}&output=embed`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default MapPage;
