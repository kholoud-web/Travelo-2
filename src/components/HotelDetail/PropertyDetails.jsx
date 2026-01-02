import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DescriptionSection from "./DescriptionSection";
import BookingCard from "./BookingCard";
import AmenitiesSection from "./AmenitiesSection";
import RoomsSection from "./RoomsSection";
import ReviewsSection from "./ReviewsSection";
import PoliciesSection from "./PoliciesSection";
import NearbyPlaces from "./NearbyPlaces";
import SimilarHotels from "./SimilarHotels";

import LocationSection from "./LocationSection";
import CalendarSection from "./CalendarSection";

const PropertyDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full text-gray-800 scroll-smooth">
      {/* ================= TABS ================= */}
      <div className="sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex gap-6 text-sm font-medium py-4">
            {[
              "overview",
              "amenities",
              "location",
              "calendar",
              "rooms",
              "reviews",
              "policies",
            ].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => handleTabClick(tab)}
                  className={activeTab === tab ? "text-teal-600" : ""}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <hr className="text-gray-200" />
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <section
        id="overview"
        className="max-w-7xl mx-auto px-6 py-10 scroll-mt-[88px]"
      >
        <h1 className="text-2xl font-semibold mb-1">Hotel Arts Barcelona</h1>
        <p className="text-sm text-gray-500 mb-6">
          Barcelona, Spain · ⭐⭐⭐⭐⭐
        </p>

        {/* ===== GALLERY ===== */}
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[420px] mb-10">
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
            <img
              src="assets/images/overview1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          {["overview2", "overview3", "overview4", "overview5"].map((img) => (
            <div key={img} className="rounded-xl overflow-hidden">
              <img
                src={`assets/images/${img}.jpg`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* ===== CONTENT + BOOKING ===== */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="col-span-2 space-y-10">
            <DescriptionSection />
            <AmenitiesSection />

            {/* ===== Location ===== */}
            <LocationSection
              id="location"
              onMapClick={() => navigate("/map")}
            />

            {/* ===== Calendar ===== */}
            <CalendarSection />

            <RoomsSection />
            <ReviewsSection />
            <PoliciesSection />
            <NearbyPlaces />
            <SimilarHotels />
          </div>

          {/* RIGHT BOOKING CARD */}
          <div className="col-span-1">
            <BookingCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
