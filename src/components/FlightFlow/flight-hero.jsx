import SearchBar from "./flightSearchArea";

export const FlightHero = () => {
  return (
    <section className="w-full min-h-screen relative">
      {/* HERO */}
      <div className="flight-hero w-full h-136">
        <div className="overlay w-full h-full max-w-180 lg:p-[80px_174px_120px_126px] md:pt-10 pt-30 font-[manrope] flex flex-col items-start gap-2.5 p-10 bg-linear-to-r from-[#00234d]/63 to-[#00234d]/0">
          <h1 className="md:text-5xl text-3xl font-extrabold text-white">
            Make your travel whishlist, we’ll do the rest
          </h1>
          <p className="text-lg text-white">Special offers to suit your plan</p>
        </div>
      </div>
      <div className="md:absolute md:w-[80%] w-[90%] md:bottom-0 md:left-1/2 mx-auto md:-translate-x-1/2 bg-white px-6 py-8 shadow-lg rounded-xl">
        <SearchBar />
      </div>
    </section>
  );
};
