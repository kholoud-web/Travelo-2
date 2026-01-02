import FlightImg1 from "/assets/images/flight.png.png";
import FlightImg2 from "/assets/images/flight4.png.png";
import FlightImg3 from "/assets/images/flight2.png.png";
import FlightImg4 from "/assets/images/flight5.png.png";
import FlightOverCard from "./FlightOverCard";

const FlightOver = () => {
  return (
    <section className="px-24">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Flight Offer Deals
          </h2>
          <p className="text-gray-700 md:text-[20px] mb-3 font-medium">
            Competitive fares for your route-specific searches.
          </p>
        </div>
        <div className="">
          <div className="flex flex-wrap w-full">
            <FlightOverCard src={FlightImg1} />
            <FlightOverCard src={FlightImg2} />
          
            <FlightOverCard src={FlightImg3} />
            <FlightOverCard src={FlightImg4} />
          </div>
        </div>
    </section>
  );
};

export default FlightOver;
