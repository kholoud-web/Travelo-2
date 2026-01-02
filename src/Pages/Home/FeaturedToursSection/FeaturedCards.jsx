import { motion } from "framer-motion";
import { FaRegStar, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const FeaturedCards = ({
  Imgsrc,
  title,
  basePrice,
  durationInDays,
  destinations,
  difficultyLevel,
  id,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative overflow-hidden rounded-2xl w-full">
        <img
          src={Imgsrc}
          alt="Featured Tour"
          className="w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 aspect-video object-cover"
        />
        <div className="absolute top-6 right-6 bg-white/70 p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition duration-300 z-10 text-teal-500">
          <FaRegHeart />
        </div>
        {/* <div className=" bg-white absolute z-50 bottom-13 left-1/2 flex gap-10 px-2 py-3 border border-gray-400/40 rounded-xl -translate-x-1/4 items-center">
          <FaRegStar className="text-yellow-600 " />
          <span className="text-sm text-[#737373]">4.96 (672 reviews)</span>
        </div> */}
      </div>

      <div className="p-5  main-font space-y-2 relative border-2 border-gray-300 rounded-2xl -mt-16 bg-white z-20">
        <h3 className="font-bold text-[10px] md:text-[11px] lg:text-[14px] ">{title}</h3>
        <div className="flex justify-between">
          <span className="text-[10px] lg:text-sm text-[#737373] font-medium">
          {durationInDays} days {durationInDays + 1} nights - {difficultyLevel}
        </span>
        <p>{destinations}</p>
        </div>

        <div className="flex  items-center justify-between py-4 mt-4 border-t border-gray-300  ">
          <p className="flex items-center text-[10px] lg:text-sm font-semibold">
            {basePrice}$
            <span className="text-[10px] lg:text-sm text-[#737373] ps-1">person</span>
          </p>
          <Link
            to={`/payment/${id}`}
            className="bg-teal-500  px-2.5 py-2 font-bold text-[10px] lg:text-sm rounded-md hover:bg-teal-600 transition duration-300 cursor-pointer text-white"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;
