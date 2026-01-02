import React from "react";
import { Heart, MapPin, Wifi, Coffee } from "lucide-react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AddToListPopup from "./AddToListPopup";



const HotelCard = ({ hotel , viewMode}) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  

  // استخدمت defaultImages عشان لو فيه فندق مفيش فيه صور
  // fallback آمن
  const defaultImages = [
    "assets/images/placeholder-1.jpg",
    "assets/images/placeholder-2.jpg",
    "assets/images/placeholder-3.jpg",
    "assets/images/placeholder-4.jpg",
  ];

  const { images = defaultImages } = hotel;

  // const {images} = hotel;




  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);



  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className={`flex ${viewMode === "list" ? "flex-row" : "flex-col"}`}>
        {/* Image Slider */}
        <div
          className={`relative rounded-lg overflow-hidden
          ${
            viewMode === "list"
              ? "w-80 h-64 m-6 flex-shrink-0"
              : viewMode === "map"
              ? "w-full h-56"
              : "w-full h-56"
          }
        `}
              >
          {/* Images */}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={hotel.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500
                ${index === currentImage ? "opacity-100" : "opacity-0"}`}
            />
          ))}

          {/* Badge */}
          {hotel.badge && (
            <div className="absolute top-3 left-3 bg-teal-500 text-white px-3 py-1 rounded text-xs font-medium z-10">
              {hotel.badge}
            </div>
          )}

          {/* Favorite */}
          <button
            onClick={() => setIsFavoriteOpen(true)}
            className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50"
          >
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>

          <AddToListPopup
            isOpen={isFavoriteOpen}
            onClose={() => setIsFavoriteOpen(false)}
            hotelName={hotel.name}
          />

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2.5 h-2.5 rounded-full
                  ${i === currentImage ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className={`flex-1 ${viewMode === "map" ? "p-4" : "p-6"}`}>
          {/* Title + Rating */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {hotel.name}
              </h3>

              {/* <div className="flex items-center gap-1">
                {renderStars(hotel.rating)}
              </div> */}

              {/* Stars */}
              {viewMode === "grid" && (
                <div className="flex items-center gap-1 text-sm">
                  <span className="font-semibold">{hotel.rating}</span>
                  <span className="text-yellow-400 text-lg">★</span>
                </div>
              )}
              {viewMode === "list" && (
                <div className="flex items-center gap-1">
                  {renderStars(hotel.rating)}
                </div>
              )}
            </div>

            <div className="text-right">
              <div className="flex items-center gap-2 mb-1 justify-end">
                <span className="text-sm text-blue-600">
                  {hotel.scoreLabel}
                </span>
                <div className="bg-gray-200 text-blue-600 w-6 h-6 rounded-lg flex items-center justify-center text-xs">
                  {hotel.score}
                </div>
              </div>
              <p className="text-xs text-gray-600">
                {hotel.reviews.toLocaleString()} reviews
              </p>
            </div>
          </div>

          {/* Location */}
          {/* <div className="space-y-1 mb-4">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600">{hotel.location}</span>
              <span>•</span>
              <span>{hotel.distance}</span>
              {hotel.metroAccess && (
                <>
                  <span>•</span>
                  <span>Metro access</span>
                </>
              )}
            </div>
            <p className="text-xs text-gray-600">{hotel.beachDistance}</p>
          </div> */}

          <div className="space-y-1 mb-4">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600">{hotel.location}</span>

              {viewMode === "list" && (
                <>
                  <span>•</span>
                  <span>{hotel.distance}</span>
                  {hotel.metroAccess && (
                    <>
                      <span>•</span>
                      <span>Metro access</span>
                    </>
                  )}
                </>
              )}
            </div>

            {viewMode === "list" && (
              <p className="text-xs text-gray-600">{hotel.beachDistance}</p>
            )}
          </div>

          <div
            className={`flex items-center justify-between ${
              viewMode === "map" ? "mt-3" : "mt-10"
            }`}
          >
            <div>
              {/* Room info */}
              {viewMode === "list" && (
                <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-gray-700">
                  <span>{hotel.type}</span>
                  <span>•</span>
                  <span>{hotel.roomType}</span>
                  <span>•</span>
                  <span>{hotel.bedType}</span>
                  <span>•</span>
                  <span>{hotel.size}</span>
                </div>
              )}

              {/* Features */}
              {viewMode === "list" && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 text-xs text-gray-700 bg-white"
                    >
                      {feature === "Free cancellation" && (
                        <span className="text-green-600 font-semibold">✓</span>
                      )}
                      {feature === "Spa access" && (
                        <Wifi className="w-4 h-4 text-gray-500" />
                      )}
                      {feature === "Breakfast included" && (
                        <Coffee className="w-4 h-4 text-gray-500" />
                      )}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price */}
            <div className="flex justify-end">
              <div className="text-right">
                {hotel.discount && (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium inline-block mb-1">
                    {hotel.discount}
                  </div>
                )}

                <div className="flex items-baseline justify-end gap-2">
                  {hotel.originalPrice && (
                    <span className="text-xs text-gray-500 line-through">
                      ${hotel.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-md font-bold text-gray-800">
                    ${hotel.price.toLocaleString()}
                  </span>
                </div>

                <p className="text-xs text-gray-500">
                  {hotel.nights} nights, {hotel.adults} adults
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
