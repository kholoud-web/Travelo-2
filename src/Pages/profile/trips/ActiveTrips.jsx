// ActiveTrips.jsx
import React from "react";
import { Link } from "react-router-dom";
import NoTrips from "./NoTrips";
import ReservationCard from "./ReservationCard";
const ActiveTrips = () => {
  const activeReservations = [
    {
      id: "173826",
      hotelName: "Golden Tulip Hotel",
      hotelImage: "../../../../assets/images/3.png",
      checkIn: "12 Mar 2021",
      checkOut: "24 Mar 2025",
      guests: "4 Adults",
      status: "confirmed", // confirmed | pending
    },
    {
      id: "173827",
      hotelName: "Grand Seaside Hotel",
      hotelImage: "https://via.placeholder.com/100x80?text=Hotel+2",
      checkIn: "12 Mar 2021",
      checkOut: "24 Mar 2025",
      guests: "4 Adults",
      status: "pending",
    },
    {
      id: "173828",
      hotelName: "Mountain View Resort",
      hotelImage: "https://via.placeholder.com/100x80?text=Hotel+3",
      checkIn: "05 Apr 2025",
      checkOut: "10 Apr 2025",
      guests: "2 Adults, 1 Child",
      status: "confirmed",
    },
  ];

  if (activeReservations.length === 0) {
    return (
    <NoTrips />
    );
  }

  return (
    <div className="p-6 min-h-[800px] bg-white rounded-xl">

      <h1 className="text-2xl font-bold text-gray-800 mb-2">Active Reservations</h1>
      <p className="text-gray-500 mb-8">View and manage your current bookings here.</p>

      <div className="space-y-6">
        {activeReservations.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </div>
  );
};

export default ActiveTrips;