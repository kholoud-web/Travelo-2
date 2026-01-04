import { X } from "lucide-react";

export const AirportModal = ({ airports, flightSearch, setFlightSearch, onClose, onSwap }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-[500px] rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <X/>
        </button>

        <h3 className="text-xl font-bold mb-4">Select Airports</h3>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-1">From</p>
            {airports.map((a) => (
              <div
                key={a.code}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() =>
                  setFlightSearch({ ...flightSearch, from: a })
                }
              >
                {a.city} ({a.code})
              </div>
            ))}
          </div>

          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-1">To</p>
            {airports.map((a) => (
              <div
                key={a.code}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() =>
                  setFlightSearch({ ...flightSearch, to: a })
                }
              >
                {a.city} ({a.code})
              </div>
            ))}
          </div>
        </div>

        <button onClick={onSwap} className="btn w-full mb-3">
          ⇄ Swap
        </button>

        <button onClick={onClose} className="btn bg-main text-white w-full">
          Done
        </button>
      </div>
    </div>
  );
};