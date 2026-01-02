export default function FlightSummaryCard({ flight }) {
  if (!flight) return null;

  return (
    <div className="w-full lg:w-[360px] h-fit bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-6">
      <img
        src={flight.image}
        alt={flight.title}
        className="rounded-xl h-32 w-full object-cover"
      />

      <div className="mt-4">
        <p className="text-xs text-gray-500 mb-1">Economy</p>
        <h3 className="text-lg font-semibold text-gray-900">{flight.title}</h3>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1 px-2 py-1 bg-teal-50 rounded border border-teal-200">
            <span className="text-sm font-semibold text-teal-700">{flight.rating}</span>
          </div>
          <span className="text-sm text-gray-600">Very Good</span>
          <span className="text-sm text-gray-500">{flight.reviews}</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3">Your booking is protected by <span className="font-semibold text-gray-900">golobe</span></p>

        <div className="space-y-3">
          <h4 className="text-base font-semibold text-gray-900">Price Details</h4>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Base Fare</span>
              <span className="text-gray-900 font-medium">${flight.baseFare}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span className="text-gray-900 font-medium">${flight.discount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Taxes</span>
              <span className="text-gray-900 font-medium">${flight.taxes}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Service Fee</span>
              <span className="text-gray-900 font-medium">${flight.serviceFee}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
            <span className="text-base font-semibold text-gray-900">Total</span>
            <span className="text-lg font-bold text-gray-900">${flight.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
