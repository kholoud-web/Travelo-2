import { FlightHero } from "../../../components/FlightFlow/flight-hero";
import { FlightDealsSection } from "../../../components/FlightFlow/flightDeeals";
import { FlightMapSection } from "../../../components/FlightFlow/flightMapSection";
import { FlightTravelSection } from "../../../components/FlightFlow/FlightTravelSection";
const FlightFlow = () => {
  return (
    <>
      <FlightHero />
      <FlightDealsSection />
      <FlightMapSection/>
      <FlightTravelSection/>
    </>
  );
};
export default FlightFlow;

