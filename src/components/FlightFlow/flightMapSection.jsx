import map from "../../../public/assets/images/flight-map.png";
export const FlightMapSection = () => {
  return (
    <section className="py-5 mt-10 font-[manrope]">
      <div className="flex sm:flex-row flex-col gap-4 justify-between items-center md:mx-20 mx-5 mb-12 ">
        <div className="text">
          <h2 className="md:text-4xl text-3xl font-extrabold leading-12 md:leading-19">
            Let's go places together
          </h2>
          <p className="md:text-[16px] text-sm  font-semibold leading-5 md:leading-8 ">
            Discover the latest offers and news and start planning your next trip with us.
          </p>
        </div>
        <button className="btn border border-main ">See All </button>
      </div>
      <div className="image w-full h-120 ">
        <img src={map} alt="flight map" className="w-full h-full md:object-cover "/>
      </div>
    </section>
  );
};
