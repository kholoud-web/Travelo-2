function FlightDetailsBox({ flight }) {
  return (
    <div className="flex flex-col gap-4 pr-4">
      <SectionHeader title="Flight details" />

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="font-medium">Airline</span>
          <span className="text-neutral-400">{flight.airline}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Aircraft</span>
          <span className="text-neutral-400">{flight.aircraft}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Departure</span>
          <span className="text-neutral-400">
            {flight.departure} — {flight.departureCode}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Arrival</span>
          <span className="text-neutral-400">
            {flight.arrival} — {flight.arrivalCode}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Duration</span>
          <span className="text-neutral-400">{flight.duration}</span>
        </div>
      </div>
    </div>
  );
}
export default FlightDetailsBox;