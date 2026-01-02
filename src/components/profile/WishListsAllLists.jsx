import React, { useState } from "react";
import plus from "../../assets/icons/plus.svg";
import nextTripImg1 from "../../assets/img/wishlists/w1.jpg";
import nextTripImg2 from "../../assets/img/wishlists/w2.jpg";
import nextTripImg3 from "../../assets/img/wishlists/w3.jpg";
import nextTripImg4 from "../../assets/img/wishlists/w4.jpg";
import nextTripImg5 from "../../assets/img/wishlists/w5.jpg";
import nextTripImg6 from "../../assets/img/wishlists/w6.jpg";
import CreateNewListModal from "./CreateNewListModal";
import { Link } from "react-router-dom";

const WishListsAllLists = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6">
      {isOpen && <CreateNewListModal setIsOpen={setIsOpen} />}
      <div className="flex justify-between pb-[60px]">
        <div>
          <h2 className="self-stretch justify-center mb-2 text-zinc-600 text-3xl font-semibold font-['Roboto'] leading-8">
            Wish Lists
          </h2>
          <p className="self-stretch justify-center text-gray-400 text-lg font-normal font-['Roboto'] leading-6">
            Explore and save your favorite destinations here.
          </p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="  flex items-center  cursor-pointer gap-2 font-semibold border   rounded-xl border-[#2B3037] py-2 px-6 text-[20px] leading-none"
        >
          <img src={plus} alt="" className="w-7 h-7" />
          Create a list
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Link to='/profile/wishlists/next-trip' >
          <div className="grid gap-2 grid-cols-2  mb-[18px] ">
            <img
              src={nextTripImg1}
              className="block w-full h-[162px] object-cover rounded-tl-2xl"
            />
            <img
              src={nextTripImg2}
              className="block w-full h-[162px] object-cover rounded-tr-2xl"
            />
            <img
              src={nextTripImg3}
              className="block w-full h-[162px] object-cover rounded-bl-2xl"
            />
            <img
              src={nextTripImg4}
              className="block w-full h-[162px] object-cover rounded-br-2xl"
            />
          </div>

          <div>
            <h3 className="text-[20px] font-semibold">My next trip</h3>
            <p className="text-[16px] text-[#454C58]">6 Saved</p>
          </div>
        </Link>
        <div>
          <img
            src={nextTripImg6}
            className="block w-full h-[332px] object-cover rounded-2xl mb-[18px] "
          />
          <div>
            <h3 className="text-[20px] font-semibold">
              Falkensee, Germany 2025
            </h3>
            <p className="text-[16px] text-[#454C58]">2 Saved</p>
          </div>
        </div>
        <div>
          <img
            src={nextTripImg5}
            className="block w-full h-[332px] object-cover rounded-2xl mb-[18px] "
          />
          <div>
            <h3 className="text-[20px] font-semibold">Prague, Czechia 2025</h3>
            <p className="text-[16px] text-[#454C58]">1 Saved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListsAllLists;
