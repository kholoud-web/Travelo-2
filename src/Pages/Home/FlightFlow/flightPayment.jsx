import { useParams } from "react-router-dom";
import { flightsDetails } from "../../../data/flightDeals";
import FlightCheckoutBox from "../../../components/FlightFlow/flight-payment/CheckoutBox";

function FlightPayment() {
  const { id } = useParams();
  const flightId = Number(id);
  const flight = flightsDetails.find((f) => f.id === flightId);

  if (!flight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Flight not found
          </h2>
          <p className="text-gray-600 mt-2">
            The flight you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-red-400">Turkey</span>
            <span>›</span>
            <span className="text-red-400">Istanbul</span>
            <span>›</span>
            <span className="text-gray-900">
              CVK Park Bosphorus Hotel Istanbul
            </span>
          </div>
        </div>

        <FlightCheckoutBox flight={flight} />
      </div>
    </div>
  );
}

export default FlightPayment;
