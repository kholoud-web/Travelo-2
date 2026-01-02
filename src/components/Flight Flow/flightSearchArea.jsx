import { BedDouble, Plane, Search, X } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AirportModal } from "./AirportModal.jsx";
import { useLocation, useNavigate } from "react-router-dom";
const types = [
  { id: 1, name: "flights", icon: <Plane /> },
  { id: 2, name: "stays", icon: <BedDouble /> },
];
const airports = [
  { city: "Lahore", code: "LHE" },
  { city: "Karachi", code: "KHI" },
  { city: "Islamabad", code: "ISB" },
  { city: "Dubai", code: "DXB" },
];
export default function SearchBar() {
  const location = useLocation();
  console.log(location.pathname);

  const navigate = useNavigate();
  const [type, setType] = useState("flights");

  const [openTrip, setOpenTrip] = useState(false);
  const [openPassengers, setOpenPassengers] = useState(false);
  const [openAirportModal, setOpenAirportModal] = useState(false);

  const [flightSearch, setFlightSearch] = useState({
    from: airports[0],
    to: airports[1],
    trip: "return",
    startDate: null,
    endDate: null,
    passengers: 1,
    cabin: "economy",
  });

  const swapLocations = () => {
    setFlightSearch((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  const handleSearch = () => {
    // sending flightSearch data to the flight lists page
    navigate("/flight-lists", { state: { flightSearch } });
  };
  return (
    <>
      {/* TYPE TABS */}

      <ul
        className={`${
          location.pathname === "/flight-lists" ? "hidden" : ""
        } flex gap-8 mb-6`}
      >
        {types.map((item) => (
          <li
            key={item.id}
            onClick={() => setType(item.name)}
            className={`flex items-center gap-2 cursor-pointer pb-3 ${
              type === item.name
                ? "border-b-2 border-b-teal-500"
                : "text-gray-500"
            }`}
          >
            {item.icon}
            <span className="font-semibold">{item.name}</span>
          </li>
        ))}
      </ul>

      {/* FLIGHTS */}
      {type === "flights" && (
        <div
          className={`${
            location.pathname === "/flight-lists" ? "flex-row items-end " : "flex-col"
          }    flex  gap-6`}
        >
          <div className="flex flex-col md:items-stretch md:flex-wrap flex-1 md:flex-row gap-4 items-end">
            {/* FROM - TO */}
            <div className="lg:flex-2 w-full md:w-44 ">
              <label className="text-sm text-gray-500 mb-1 block">
                From - To
              </label>

              <div
                onClick={() => setOpenAirportModal(true)}
                className="border rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer"
              >
                <span className="font-medium">
                  {flightSearch.from.city} → {flightSearch.to.city}
                </span>
                <span className="text-xl">⇄</span>
              </div>
            </div>

            {/* TRIP */}
            <div className="w-full lg:flex-1 md:w-44 relative">
              <label className="text-sm text-gray-500 mb-1 block">Trip</label>

              <div
                onClick={() => setOpenTrip(!openTrip)}
                className="border rounded-lg px-4 py-3 cursor-pointer capitalize"
              >
                {flightSearch.trip}
              </div>

              {openTrip && (
                <div className="absolute bg-white border rounded-lg mt-2 w-full shadow z-20">
                  {["return", "oneway"].map((t) => (
                    <div
                      key={t}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setFlightSearch({
                          ...flightSearch,
                          trip: t,
                          endDate: t === "oneway" ? null : flightSearch.endDate,
                        });
                        setOpenTrip(false);
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* DATES */}
            <div className="lg:flex-2 w-full md:w-44 ">
              <label className="text-sm text-gray-500 mb-1 block">
                Depart - Return
              </label>

              <div className="border rounded-lg px-4 py-3">
                <DatePicker
                  selectsRange={flightSearch.trip === "return"}
                  selected={flightSearch.startDate}
                  startDate={flightSearch.startDate}
                  endDate={flightSearch.endDate}
                  minDate={new Date()}
                  onChange={(date) => {
                    if (flightSearch.trip === "return") {
                      const [start, end] = date;
                      setFlightSearch({
                        ...flightSearch,
                        startDate: start,
                        endDate: end,
                      });
                    } else {
                      setFlightSearch({
                        ...flightSearch,
                        startDate: date,
                        endDate: null,
                      });
                    }
                  }}
                  placeholderText="Select dates"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* PASSENGERS */}
            <div className="lg:flex-2 w-full md:w-44  relative">
              <label className="text-sm text-gray-500 mb-1 block">
                Passenger - Class
              </label>

              <div
                onClick={() => setOpenPassengers(!openPassengers)}
                className="border rounded-lg px-4 py-3 cursor-pointer"
              >
                {flightSearch.passengers} Passenger, {flightSearch.cabin}
              </div>

              {openPassengers && (
                <div className="absolute bg-white border rounded-lg mt-2 w-full shadow p-4 z-20">
                  <input
                    type="number"
                    min={1}
                    value={flightSearch.passengers}
                    onChange={(e) =>
                      setFlightSearch({
                        ...flightSearch,
                        passengers: Number(e.target.value),
                      })
                    }
                    className="border w-full p-2 mb-3"
                  />

                  <select
                    value={flightSearch.cabin}
                    onChange={(e) =>
                      setFlightSearch({
                        ...flightSearch,
                        cabin: e.target.value,
                      })
                    }
                    className="border w-full p-2"
                  >
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* BUTTONS */}
          {location.pathname === "/flight-lists" ? (
            <>
              {" "}
              <div className="flex justify-end gap-4">
                <button className="btn bg-main max-w-16 max-h-16 aspect-square text-white">
                  <Search />
                </button>
              </div>
            </>
          ) : (
            <div className="flex justify-end gap-4">
              <button className="btn">+ Add Promo Code</button>
              <button onClick={handleSearch} className="btn bg-main text-white">
                Show Flights
              </button>
            </div>
          )}
        </div>
      )}

      {/* AIRPORT MODAL */}
      {openAirportModal && (
        <AirportModal
          airports={airports}
          flightSearch={flightSearch}
          setFlightSearch={setFlightSearch}
          onClose={() => setOpenAirportModal(false)}
          onSwap={swapLocations}
        />
      )}
    </>
  );
}
