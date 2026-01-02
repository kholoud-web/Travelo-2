//import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import imm from "/assets/images/3.png"
import timer from "/assets/icons/timer.png"
export default function Details() {
   // const { id } = useParams();
    const trip = {
        id: "173826",
        hotelName: "Hotel Arts Barcelona",
        hotelImage: "https://via.placeholder.com/100x80?text=Hotel+Arts",
        address: "Marina, 19-21, Ciutat Vella, 08005 Barcelona, Spain",
        phone: "+38 540 979 5428",
        gps: "N 040° 50.963, E 14° 15.348",
        checkInDate: "14 August",
        checkInTime: "14:00 - 21:00",
        checkOutDate: "19 August",
        checkOutTime: "08:00 - 10:00",
        rooms: 15,
        nights: 5,
        status: "confirmed", // confirmed | pending
        guests: "2 guests · Studio · 1 bed · 1.5 baths",
        description:
            "Welcome to my fully refurbished 17 m² studio, ideally located in Versailles, only a 10-minute walk to the Palace of Versailles and a 5-minute walk to the Rive Gauche train station.",
        price: {
            unit: 168.55,
            vat: 16.85,
            cleaning: 35,
            total: 2560,
        },
        guestName: "Anna George",
        maxGuests: 2,
        mealPlan: "There is no meal included in the rate for this apartment.",
        amenities: [
            { icon: "🛁", label: "Hot tub" },
            { icon: "🏙️", label: "City view" },
            { icon: "❄️", label: "Air conditioning" },
            { icon: "📺", label: "Tv" },
            { icon: "🧊", label: "Refrigerator" },
            { icon: "💇", label: "Hair dryer" },
            { icon: "rowave", label: "Microwave" },
            { icon: "📶", label: "Wifi" },
            { icon: "🍽️", label: "Plates" },
            { icon: "📹", label: "Security Cameras" },
            { icon: "☕", label: "Coffee machine" },
            { icon: "🧻", label: "Towels" },
            { icon: "🛋️", label: "Sofa" },
        ],
    };

    const statusConfig = {
        confirmed: {
            text: "Confirmed",
            color: "text-green-600 border-green-600",
            bg: "bg-green-50",
        },
        pending: {
            text: "Pending",
            color: "text-orange-600 border-orange-600",
            bg: "bg-orange-50",
        },
    };

    const config = statusConfig[trip.status] || statusConfig.pending;
    return (
        <div className="  max-w-6xl mx-auto">

            <Link
                to="/profile/trips/activeTrips"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-3 font-medium"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back to trips
            </Link>

            <div className="bg-white rounded-xl p-6 mb-6">
                <div className="flex items-start gap-6">
                    <img
                        src={imm}
                        alt={trip.hotelName}
                        className="w-24 h-24 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                        <h1 className="text-xl font-bold text-gray-800">{trip.hotelName}</h1>
                        <p className="text-sm text-gray-500 mt-1">Address: {trip.address}</p>
                        <p className="text-sm text-gray-500 mt-1">Phone: {trip.phone}</p>
                        <p className="text-sm text-gray-500 mt-1">GPS coordinates: {trip.gps}</p>
                    </div>

                    {/* Check-In / Check-Out / Status */}
                    <div className="flex space-x-6 text-center">
                        <div className="text-center">
                            <div className="text-xs text-gray-500">Check-In</div>
                            <div className="text-2xl font-bold">{trip.checkInDate.split(" ")[0]}</div>
                            <div className="text-sm text-gray-600">{trip.checkInDate.split(" ")[1]}</div>
                            <div className="text-xs text-gray-500 flex items-center mt-1">
                                <img src={timer} className="h-3.5 w-3.5 mr-1" />
                                {trip.checkInTime}
                            </div>
                        </div>

                        <div className="border-l border-gray-300"></div>

                        <div className="text-center">
                            <div className="text-xs text-gray-500">Check-Out</div>
                            <div className="text-2xl font-bold">{trip.checkOutDate.split(" ")[0]}</div>
                            <div className="text-sm text-gray-600">{trip.checkOutDate.split(" ")[1]}</div>
                            <div className="text-xs text-gray-500 flex items-center mt-1">
                                <img src={timer} className="h-3.5 w-3.5 mr-1" />
                                {trip.checkOutTime}
                            </div>
                        </div>

                        <div className="border-l border-gray-300"></div>

                        <div className="text-center">
                            <span
                                className={`px-3 py-1 text-xs font-medium rounded-full border ${config.bg} ${config.color}`}
                            >
                                {config.text}
                            </span>
                            <div className="flex gap-2">
                                <div className="mt-2 text-sm text-gray-500">
                                    <span>Rooms</span>
                                    <div className="font-bold text-lg">{trip.rooms}</div>
                                </div>
                                <div className="mt-2 text-sm text-gray-500">
                                    <span>Nights</span>
                                    <div className="font-bold text-lg">{trip.nights}</div>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About This Property */}
            <div className="bg-white rounded-xl p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">About this property</h2>
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <p className="text-gray-800 mb-4">{trip.guests}</p>
                        <p className="text-gray-600 leading-relaxed">{trip.description}</p>
                    </div>
                    <div className="ml-6">
                        <img
                            src="https://via.placeholder.com/200x150?text=Map+Placeholder"
                            alt="Location Map"
                            className="rounded-lg w-48 h-30 object-cover"
                        />
                    </div>
                </div>
                <hr className="my-3 border-gray-200" />



                {/* Price Section */}
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Price</h2>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-gray-600">1 unit</span>
                        <span className="font-medium">€ {trip.price.unit.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">10% VAT</span>
                        <span className="font-medium">€ {trip.price.vat.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">€ 35 Cleaning fee per stay</span>
                        <span className="font-medium">€ {trip.price.cleaning}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total Price</span>
                        <span>€ {trip.price.total.toLocaleString()}</span>
                    </div>
                </div>
                    <hr className="my-3 border-gray-200" />


                {/* Guest & Meal Plan */}
                <div className="my-4">
                    <strong className="text-gray-800">Guest name:</strong> {trip.guestName} / for max. {trip.maxGuests} people
                </div>
                <div className="mb-4">
                    <strong className="text-gray-800">Meal Plan:</strong> {trip.mealPlan}
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {trip.amenities.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Actions Buttons */}
                <div className="mt-12 flex justify-end space-x-4">
                    <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                        Cancel Booking
                    </button>
                    <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17h18V7H3v10z" />
                        </svg>
                        Download Invoice
                    </button>
                </div>
            </div>
        </div>
    )
}
