import React from "react";
import { useNavigate } from "react-router-dom";

const LocationSection = () => {
  const navigate = useNavigate();

  return (
    <section id="location" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Location</h2>

      {/* Map Container */}
      <div
        className="w-full h-80 rounded-xl overflow-hidden cursor-pointer relative"
        onClick={() => navigate("/map")}
      >
        <iframe
          title="hotel-location"
          src="https://www.google.com/maps?q=Barcelona&z=13&output=embed"
          className="w-full h-full border-0 pointer-events-none"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition flex items-center justify-center">
          <span className="bg-white px-4 py-2 rounded-lg text-sm font-medium shadow">
            View on map
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Click map to open full map page
      </p>
    </section>
  );
};

export default LocationSection;
