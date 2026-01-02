import { ArrowLeft, ArrowRight } from "lucide-react";
import { flightDeals } from "../../data/flightDeals";
import { FlightDealCard } from "./flightDealCard";

export const FlightDealsSection = () => {
  return (
    <section className="py-14 md:px-24 sm:px-5 mt-10">
      <div className="container mx-auto sm:px-6 px-2">
        <h2 className="font-[manrope] text-black md:text-5xl text-3xl font-bold md:leading-19 leading-12">Recommendation</h2>
        <p className="text-gray-400 mb-10">
          Competitive fares for your route-specific searches.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flightDeals.map((deal) => (
            <FlightDealCard key={deal.id} deal={deal} />
          ))}
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-4 mt-10">
          <button className="w-10 h-10 rounded-full bg-[#E4E6E8]  flex items-center justify-center">
            <ArrowLeft/>
          </button>
          <button className="w-10 h-10 rounded-full bg-[#E4E6E8]  flex items-center justify-center">
            <ArrowRight/>
          </button>
        </div>
      </div>
    </section>
  );
};
