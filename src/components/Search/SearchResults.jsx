import React, { useState } from 'react'
import MapView from './MapView'
import FilterSidebar from './FilterSidebar'
import HotelCard from './HotelCard'
import { ChevronDown, Grid, List } from 'lucide-react'
import LoadingScreen from './LoadingPage'

const hotels = [
  {
    id: 1,
    name: "Hotel Arts Barcelona",
    rating: 5,
    reviews: 1200,
    score: 9.0,
    scoreLabel: "Excellent",
    images: [
      "assets/images/hotel-arts-barcelona.jpg",
      "assets/images/w-barcelona.jpg",
      "assets/images/eurostars-grand-marina.jpg",
      "assets/images/majestic-hotel.jpg",
    ],
    location: "Port Olimpic",
    distance: "1.8 km from centre",
    beachDistance: "200 m from beach",
    type: "Luxury Hotel",
    roomType: "Sea View Room",
    bedType: "King Bed",
    size: "40 m²",
    price: 1500,
    originalPrice: 1800,
    discount: "16% off",
    nights: 5,
    adults: 2,
    features: ["Free cancellation", "Spa access", "Breakfast included"],
    badge: "Gateway Deal",
    metroAccess: true,
  },
  {
    id: 2,
    name: "W Barcelona",
    rating: 5,
    reviews: 1300,
    score: 9.0,
    scoreLabel: "Excellent",
    images: [
      "assets/images/w-barcelona.jpg",
      "assets/images/eurostars-grand-marina.jpg",
      "assets/images/majestic-hotel.jpg",
      "assets/images/hotel-arts-barcelona.jpg",
    ],
    location: "Barceloneta",
    distance: "2.1 km from centre",
    beachDistance: "Direct beachfront",
    type: "Beach Hotel",
    roomType: "Sea View Room",
    bedType: "King Bed",
    size: "35 m²",
    price: 1395,
    nights: 5,
    adults: 2,
    features: ["Breakfast included", "Spa access"],
    badge: "Best Location",
    metroAccess: true,
  },
  {
    id: 3,
    name: "Eurostars Grand Marina",
    rating: 4,
    reviews: 1100,
    score: 8.4,
    scoreLabel: "Very Good",
    images: [
      "assets/images/eurostars-grand-marina.jpg",
      "assets/images/hotel-arts-barcelona.jpg",
      "assets/images/w-barcelona.jpg",
      "assets/images/majestic-hotel.jpg",
    ],
    location: "Port Vell",
    distance: "1.5 km from centre",
    beachDistance: "900 m from beach",
    type: "Harbourfront Hotel",
    roomType: "Deluxe Room",
    bedType: "King Bed",
    size: "33 m²",
    price: 1200,
    originalPrice: 1400,
    discount: "14% off",
    nights: 5,
    adults: 2,
    features: ["Free cancellation", "Spa access"],
    metroAccess: false,
  },
  {
    id: 4,
    name: "Hotel Arts Barcelona",
    rating: 5,
    reviews: 1200,
    score: 9.0,
    scoreLabel: "Excellent",
    images: [
      "assets/images/majestic-hotel.jpg",
      "assets/images/hotel-arts-barcelona.jpg",
      "assets/images/w-barcelona.jpg",
      "assets/images/eurostars-grand-marina.jpg",
    ],
    location: "Port Olimpic",
    distance: "1.8 km from centre",
    beachDistance: "200 m from beach",
    type: "Luxury Hotel",
    roomType: "Sea View Room",
    bedType: "King Bed",
    size: "40 m²",
    price: 1500,
    originalPrice: 1800,
    discount: "16% off",
    nights: 5,
    adults: 2,
    features: ["Free cancellation", "Spa access", "Breakfast included"],
    badge: "Gateway Deal",
    metroAccess: true,
  },
  {
    id: 5,
    name: "W Barcelona",
    rating: 5,
    reviews: 1300,
    score: 9.0,
    scoreLabel: "Excellent",
    images: [
      "assets/images/hotel-arts-barcelona.jpg",
      "assets/images/w-barcelona.jpg",
      "assets/images/eurostars-grand-marina.jpg",
      "assets/images/majestic-hotel.jpg",
    ],
    location: "Barceloneta",
    distance: "2.1 km from centre",
    beachDistance: "Direct beachfront",
    type: "Beach Hotel",
    roomType: "Sea View Room",
    bedType: "King Bed",
    size: "35 m²",
    price: 1395,
    nights: 5,
    adults: 2,
    features: ["Breakfast included", "Spa access"],
    badge: "Best Location",
    metroAccess: true,
  },
  {
    id: 6,
    name: "Eurostars Grand Marina",
    rating: 4,
    reviews: 1100,
    score: 8.4,
    scoreLabel: "Very Good",
    images: [
      "assets/images/w-barcelona.jpg",
      "assets/images/hotel-arts-barcelona.jpg",
      "assets/images/eurostars-grand-marina.jpg",
      "assets/images/majestic-hotel.jpg",
    ],
    location: "Port Vell",
    distance: "1.5 km from centre",
    beachDistance: "900 m from beach",
    type: "Harbourfront Hotel",
    roomType: "Deluxe Room",
    bedType: "King Bed",
    size: "33 m²",
    price: 1200,
    originalPrice: 1400,
    discount: "14% off",
    nights: 5,
    adults: 2,
    features: ["Free cancellation", "Spa access"],
    metroAccess: false,
  },
  {
    id: 7,
    name: "Hotel Arts Barcelona",
    rating: 5,
    reviews: 1200,
    score: 9.0,
    scoreLabel: "Excellent",
    images: [
      "assets/images/eurostars-grand-marina.jpg",
      "assets/images/hotel-arts-barcelona.jpg",
      "assets/images/w-barcelona.jpg",
      "assets/images/majestic-hotel.jpg",
    ],
    location: "Port Olimpic",
    distance: "1.8 km from centre",
    beachDistance: "200 m from beach",
    type: "Luxury Hotel",
    roomType: "Sea View Room",
    bedType: "King Bed",
    size: "40 m²",
    price: 1500,
    originalPrice: 1800,
    discount: "16% off",
    nights: 5,
    adults: 2,
    features: ["Free cancellation", "Spa access", "Breakfast included"],
    badge: "Gateway Deal",
    metroAccess: true,
  },
  {
    id: 8,
    name: "W Barcelona",
    rating: 5,
    reviews: 1300,
    score: 9.0,
    scoreLabel: "Excellent",
    images: [
      "assets/images/majestic-hotel.jpg",
      "assets/images/hotel-arts-barcelona.jpg",
      "assets/images/w-barcelona.jpg",
      "assets/images/eurostars-grand-marina.jpg",
    ],
    location: "Barceloneta",
    distance: "2.1 km from centre",
    beachDistance: "Direct beachfront",
    type: "Beach Hotel",
    roomType: "Sea View Room",
    bedType: "King Bed",
    size: "35 m²",
    price: 1395,
    nights: 5,
    adults: 2,
    features: ["Breakfast included", "Spa access"],
    badge: "Best Location",
    metroAccess: true,
  },
  {
    id: 9,
    name: "Eurostars Grand Marina",
    rating: 4,
    reviews: 1100,
    score: 8.4,
    scoreLabel: "Very Good",
    images: [
      "assets/images/hotel-arts-barcelona.jpg",
      "assets/images/w-barcelona.jpg",
      "assets/images/eurostars-grand-marina.jpg",
      "assets/images/majestic-hotel.jpg",
    ],
    location: "Port Vell",
    distance: "1.5 km from centre",
    beachDistance: "900 m from beach",
    type: "Harbourfront Hotel",
    roomType: "Deluxe Room",
    bedType: "King Bed",
    size: "33 m²",
    price: 1200,
    originalPrice: 1400,
    discount: "14% off",
    nights: 5,
    adults: 2,
    features: ["Free cancellation", "Spa access"],
    metroAccess: false,
  },
  {
    id: 10,
    name: "Hotel Arts Barcelona",
    rating: 5,
    reviews: 1200,
    score: 9.0,
    scoreLabel: "Excellent",
    images: [
      "assets/images/hotel-arts-barcelona.jpg",
      "assets/images/w-barcelona.jpg",
      "assets/images/eurostars-grand-marina.jpg",
      "assets/images/majestic-hotel.jpg",
    ],
    location: "Port Olimpic",
    distance: "1.8 km from centre",
    beachDistance: "200 m from beach",
    type: "Luxury Hotel",
    roomType: "Sea View Room",
    bedType: "King Bed",
    size: "40 m²",
    price: 1500,
    originalPrice: 1800,
    discount: "16% off",
    nights: 5,
    adults: 2,
    features: ["Free cancellation", "Spa access", "Breakfast included"],
    badge: "Gateway Deal",
    metroAccess: true,
  },
];

const SearchResults = () => {
  const [showMap, setShowMap] = useState(false)
  const [viewMode, setViewMode] = useState('list')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  // For Pagination 
  const ITEMS_PER_PAGE = 9
  const [currentPage, setCurrentPage] = useState(1)
  
  const indexOfLastHotel = currentPage * ITEMS_PER_PAGE
  const indexOfFirstHotel = indexOfLastHotel - ITEMS_PER_PAGE

  const currentHotels = hotels.slice(
    indexOfFirstHotel,
    indexOfLastHotel
  )

  const totalPages = Math.ceil(hotels.length / ITEMS_PER_PAGE)


  if (showMap) { 
    return (
      <MapView
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        onClose={() => setShowMap(false)}
      />
    );
  }

console.log("HOTELS HERE:", hotels);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Explore 300+ Places in Barcelona
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <button className="flex items-center space-x-1 text-sm text-gray-900 border border-gray-300 rounded px-3 py-1">
                <span>Top Reviewed</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${
                viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <List className="w-4 h-4" />
            </button>

            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${
                viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-80 flex-shrink-0">
          <FilterSidebar showMap={showMap} setShowMap={setShowMap} />
        </div>

        {/* <div className="flex-1">
          {showMap && (
            <div className="mb-6">
              <MapView 
              hotels={hotels}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              onClose={() => setShowMap(false)}/>
            </div>
          )}

          
           */}

        {/*// Grid Mode */}
        {/* <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {currentHotels.map(hotel => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                viewMode={viewMode}   //ارسال الى الكارد
              />
            ))}
          </div> */}

        {/*  ازرار ال pagination */}

        {/* <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded border text-sm
                ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        </div> */}

        <div className="flex-1">
          {showMap ? (
            // لما الخريطة مفتوحة → بس الـ MapView يظهر
            <div className="h-full">
              {" "}
              {/* أضفت h-full عشان الخريطة تملى المساحة */}
              <MapView
              
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                onClose={() => setShowMap(false)}
              />
            </div>
          ) : (
            // لما الخريطة مقفولة → الـ list/grid والـ pagination يظهروا زي ما هما
            <>
              {/*// Grid Mode */}
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "flex flex-col gap-6"
                }
              >
                {currentHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} viewMode={viewMode} />
                ))}
              </div>

              {/*  ازرار ال pagination */}
              <div className="flex justify-center gap-2 mt-10">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded border text-sm
              ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResults

