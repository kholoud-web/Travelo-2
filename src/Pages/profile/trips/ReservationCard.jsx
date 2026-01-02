// ReservationCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import imm from "/assets/images/3.png"
import trip from "/assets/icons/trip.png"

const ReservationCard = ({ reservation }) => {
    const { id, hotelName, hotelImage, checkIn, checkOut, guests, status } = reservation;

    const statusConfig = {
        confirmed: {
            text: "Confirmed",
            color: "text-green-600 border-green-600",
            bg: "bg-green-50",
        },
        pending: {
            text: "Pending",
            color: "text-orange-500 border-orange-600",
            bg: "bg-orange-50",
        },
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
        <div className="flex pb-5 items-start p-5 border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <img
                src={imm}
                alt={hotelName}
                className="w-20 h-20 object-cover rounded-md mr-4"
            />

            <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                        <img src={trip} alt="Hotel" className="w-5 h-5 text-gray-500" />
                        {hotelName}
                    </h3>

                    <div className="flex items-center space-x-2">
                        <span
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${config.bg} ${config.color}`}
                        >
                            {config.text}
                        </span>
                        <span className="text-gray-500 text-sm">ID {id}</span>
                    </div>
                </div>

                <hr className="border-t border-gray-300 my-2" />
                <div className="flex justify-between ">
                    <div className="flex space-x-6 text-sm text-gray-500 mt-2">
                        <span><span className="text-gray-800">Check In:</span> {checkIn}</span>
                        <span><span className="text-gray-800">Check out: </span>{checkOut}</span>
                        <span><span className="text-gray-800">Guests:</span> {guests}</span>
                    </div>


                    <Link
                        to={`/profile/trips/details/${id}`}
                        className=" text-teal-600 hover:text-teal-800 font-medium text-sm mt-2"
                    >
                        Check Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReservationCard;