import { FlightHero } from "../../../components/Flight Flow/flight-hero";
import { FlightDealsSection } from "../../../components/Flight Flow/flightDeeals";
import { FlightMapSection } from "../../../components/Flight Flow/flightMapSection";
import { FlightTravelSection } from "../../../components/Flight Flow/FlightTravelSection";
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

