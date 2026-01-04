import { flightTravelimgs } from "../../data/flightDeals";
export const FlightTravelSection = () => {
  return (
    <section className="py-5 min-h-screen  font-[manrope]">
      <div className="flex sm:flex-row flex-col gap-4 justify-between items-center md:mx-20 mx-5 mb-12 ">
        <div className="text">
          <h2 className="md:text-4xl text-3xl font-extrabold leading-12 md:leading-19">
            Fall into travel{" "}
          </h2>
          <p className="md:text-[16px] text-sm  font-semibold leading-5 md:leading-8 ">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.{" "}
          </p>
        </div>
        <button className="btn border border-main ">See All </button>
      </div>

      <div className="offer flex md:flex-row flex-col gap-5 container md:px-0 px-5 mx-auto h-full ">
        <div className=" flex-3 min-h-110 bg-main/90 flex flex-col p-6 gap-5 justify-between ">
          <div className="flex flex-col gap-5">
            <div className=" flex justify-between items-start ">
              <h3 className="md:text-2xl text-lg font-semibold md:leading-8 leading-5  ">
                Backpacking Sri Lanka
              </h3>
              <div className="flex flex-col justify-between p-1 items-center size-17 rounded-sm bg-white ">
                <span className="text-sm ">from</span>
                <span className="text-xl font-semibold">$700</span>
              </div>
            </div>
            <p className="text-sm ">
              Traveling is a unique experience as it's the best way to unplug
              from the pushes and pulls of daily life. It helps us to forget
              about our problems, frustrations, and fears at home. During our
              journey, we experience life in different ways. We explore new
              places, cultures, cuisines, traditions, and ways of living.
            </p>
          </div>
          <button className="btn bg-white"> Book Flight </button>
        </div>
        <div className="right flex-5 grid sm:grid-cols-2 ">
          {flightTravelimgs.map((img) => (
            <div key={img.id} className=" p-2 ">
              <img
                src={img.image}
                alt="flight-travel-img"
                className="w-full h-full rounded-lg object-cover "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
