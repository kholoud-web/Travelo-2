import React from "react";
import angleLeftSvg from "../../assets/icons/angle-left.svg";
import shareSvg from "../../assets/icons/share.svg";
import locationPinSvg from "../../assets/icons/location-pin.svg";
import routeSvg from "../../assets/icons/route.svg";
import nextTripImg2 from "../../assets/img/wishlists/w2.jpg";
import { IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const MyNextTripDetails = () => {
  return (
    <div className="flex flex-col h-full rounded-xl">
      <Link
        to="/profile/wishlists"
        className="flex gap-2 items-center py-2 px-4 mb-3.5"
      >
        <img src={angleLeftSvg} alt="" className="w-7 h-7" />
        Back to Wish lists
      </Link>

      <div className="bg-white  h-full rounded-2xl p-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[28px] font-semibold text-[#454C58]">
            My next trip
          </h2>
          <img src={shareSvg} alt="" className="w-5 h-5" />
        </div>

        <div className="flex gap-4">
          <div className="border border-[#DDDFE3] rounded-2xl self-stretch flex-1">
            <div className="relative">
              <img
                src={nextTripImg2}
                alt=""
                className="block w-full  h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
              />
              <button
                className="absolute flex items-center justify-center  w-8 h-8 top-4 right-4 bg-white rounded-full p-1 shadow-lg hover:bg-red-50 transition-colors"
                aria-label="Add to favorites"
              >
                <IoHeartSharp className="text-[#FF5375]  w-6 h-6 " />
              </button>
            </div>

            <div className="p-4 flex flex-col gap-[9px]">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span className="bg-[#F1F2F3] px-2 py-1 rounded-2xl rounded-tr-none text-[#27A599] font-bold">
                  5.0
                </span>
                <span className="text-[#27A599] font-bold">Excellent</span>
                <span className="text-[#8B94A4]">160 reviews</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                Blue Horizon Villa
              </h3>

              <p className="flex items-center gap-1 text-sm text-[#27A599]">
                <img src={locationPinSvg} alt="Location" className="w-4 h-4" />
                Amalfi Coast, Italy
              </p>

              <p className="flex items-center gap-1 text-sm text-[#8B94A4]">
                <img src={routeSvg} alt="Distance" className="w-4 h-4" />3 km
                from down town
              </p>

              <input
                type="text"
                placeholder="Add note"
                className="border border-[#B5BAC2] rounded-xl w-full py-2 px-4 text-sm placeholder:text-[#B5BAC2] placeholder:underline placeholder:underline-offset-2 focus:outline-none placeholder:font-semibold "
              />
            </div>
          </div>
          <div className="border border-[#DDDFE3] rounded-2xl self-stretch flex-1">
            <div className="relative">
              <img
                src={nextTripImg2}
                alt=""
                className="block w-full  h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
              />
              <button
                className="absolute flex items-center justify-center  w-8 h-8 top-4 right-4 bg-white rounded-full p-1 shadow-lg hover:bg-red-50 transition-colors"
                aria-label="Add to favorites"
              >
                <IoHeartSharp className="text-[#FF5375]  w-6 h-6 " />
              </button>
            </div>

            <div className="p-4 flex flex-col gap-[9px]">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span className="bg-[#F1F2F3] px-2 py-1 rounded-2xl rounded-tr-none text-[#27A599] font-bold">
                  5.0
                </span>
                <span className="text-[#27A599] font-bold">Excellent</span>
                <span className="text-[#8B94A4]">160 reviews</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                Blue Horizon Villa
              </h3>

              <p className="flex items-center gap-1 text-sm text-[#27A599]">
                <img src={locationPinSvg} alt="Location" className="w-4 h-4" />
                Amalfi Coast, Italy
              </p>

              <p className="flex items-center gap-1 text-sm text-[#8B94A4]">
                <img src={routeSvg} alt="Distance" className="w-4 h-4" />3 km
                from down town
              </p>

              <input
                type="text"
                placeholder="Add note"
                className="border border-[#B5BAC2] rounded-xl w-full py-2 px-4 text-sm placeholder:text-[#B5BAC2] placeholder:underline placeholder:underline-offset-2 focus:outline-none placeholder:font-semibold "
              />
            </div>
          </div>
          <div className="border border-[#DDDFE3] rounded-2xl self-stretch flex-1">
            <div className="relative">
              <img
                src={nextTripImg2}
                alt=""
                className="block w-full  h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
              />
              <button
                className="absolute flex items-center justify-center  w-8 h-8 top-4 right-4 bg-white rounded-full p-1 shadow-lg hover:bg-red-50 transition-colors"
                aria-label="Add to favorites"
              >
                <IoHeartSharp className="text-[#FF5375]  w-6 h-6 " />
              </button>
            </div>

            <div className="p-4 flex flex-col gap-[9px]">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span className="bg-[#F1F2F3] px-2 py-1 rounded-2xl rounded-tr-none text-[#27A599] font-bold">
                  5.0
                </span>
                <span className="text-[#27A599] font-bold">Excellent</span>
                <span className="text-[#8B94A4]">160 reviews</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                Blue Horizon Villa
              </h3>

              <p className="flex items-center gap-1 text-sm text-[#27A599]">
                <img src={locationPinSvg} alt="Location" className="w-4 h-4" />
                Amalfi Coast, Italy
              </p>

              <p className="flex items-center gap-1 text-sm text-[#8B94A4]">
                <img src={routeSvg} alt="Distance" className="w-4 h-4" />3 km
                from down town
              </p>

              <input
                type="text"
                placeholder="Add note"
                className="border border-[#B5BAC2] rounded-xl w-full py-2 px-4 text-sm placeholder:text-[#B5BAC2] placeholder:underline placeholder:underline-offset-2 focus:outline-none placeholder:font-semibold "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNextTripDetails;
