import { FaRegHeart, FaRegClock } from "react-icons/fa";
import ArrowIcons from "/assets/images/ArrowIcon.svg.png";
import { Link } from "react-router-dom";

const FlightOverCard = ({ src }) => {
  return (
    <div className="flex items-center gap-5 relative w-1/2 mb-6">
      {/* card left side */}
      <img
        src={src}
        alt="Flight Offer"
        className=" h-auto rounded-3xl shadow-md"
      />
      <div className="absolute top-6 left-6 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition duration-300 z-10">
        <FaRegHeart />
      </div>

      {/* card right side */}
      <div className="bg-white rounded-4xl md:rounded-3xl absolute left-30 md:left-50  p-5 shadow-md z-10 md:h-[400px] lg:h-80 w-3/5">
        <div className="space-y-2 main-font pe-12">
          {/* div1 */}
          <div className="flex items-center gap-2 md:gap-5 mt-10 mr-1 md:mr-5 justify-between">
            <div className="flex items-center gap-1 ">
              <FaRegClock />
              <h3 className="text-sm md:text-[20px] text-nowrap">09 Jun 2024</h3>
            </div>

            <div className="flex items-center gap-1">
              <FaRegClock />
              <h3 className="text-sm md:text-[20px] text-nowrap">16 Jun 2024</h3>
            </div>
          </div>

          {/* div2 */}
          <div className="flex items-center gap-1 justify-between">
            <h3 className=" md:text-[20px] font-extrabold">Denmark</h3>
            <img
              src={ArrowIcons}
              alt="Arrow Icon"
              className="w-8 h-8 font-bold"
            />
            <h3 className="md:text-[20px] font-extrabold">New York</h3>
          </div>

          {/* div3 */}

          <div className="flex items-center gap-7 md:gap-10 justify-between">
            <div className="my-5  space-y-2">
              <h3 className="font-medium text-[#575756]">Business</h3>
              <h3 className="font-extrabold text[20px] ">$288.15</h3>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-[#575756]">Business</h3>
              <h3 className="font-extrabold text[20px]">$288.15</h3>
            </div>
            <div></div>
          </div>

          {/* div4 */}
          <div className="flex items-center justify-between gap-5 pb-10">
            <h3 className="text-[#737373] font-medium">18 Seats left</h3>
            <Link
              to={`/payment/2548`}
              className="bg-teal-500 px-1 py-1 md:px-5 md:py-2 font-bold text-sm rounded-md hover:bg-teal-600 transition duration-300 cursor-pointer"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightOverCard;
