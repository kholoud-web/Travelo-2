import { useState } from "react";

const BookingCard = () => {

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(2);

    return (
        <div className="sticky top-24">
            <div className="border border-gray-200 rounded-xl p-6 shadow-md bg-white">
                
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold">$320</span>
                    <span className="text-sm text-gray-500">/ night</span>
                </div>

                {/* التاريخ */}
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
                    <div className="grid grid-cols-2">
                        <div className="border-r p-3">
                            <label className="text-xs font-semibold text-gray-700 block mb-1">
                                CHECK-IN
                            </label>
                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                className="w-full text-sm outline-none"
                            />
                        </div>

                        <div className="p-3">
                            <label className="text-xs font-semibold text-gray-700 block mb-1">
                                CHECK-OUT
                            </label>
                            <input
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                className="w-full text-sm outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Guests */}
                <div className="border border-gray-200 rounded-lg p-3 mb-4">
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                        GUESTS
                    </label>
                    <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full text-sm outline-none bg-transparent"
                    >
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                    </select>
                </div>

                
                <div className="mt-5 space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="underline">$320 × 5 nights</span>
                        <span>$1600</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="underline">Service fee</span>
                        <span>$120</span>
                    </div>

                    <hr className="text-gray-200" />

                    <div className="flex justify-between font-semibold">
                        <span>Total before taxes</span>
                        <span>$1720</span>
                    </div>

                    
                    <button
                        className="w-full bg-teal-500 text-white py-3 rounded-lg
      font-semibold hover:bg-teal-600 transition"
                    >
                        Reserve
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;