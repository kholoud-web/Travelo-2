import React from "react";
import { Link } from "react-router-dom";

const herosec = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-24 lg:py-16 bg-white overflow-hidden min-h-screen">
      <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 z-10 text-center lg:text-left mb-12 lg:mb-0">
        <h4 className="text-[#2EC4B6] font-serif italic text-2xl lg:text-3xl font-normal">
          Its Quick & Amusing!
        </h4>

        <h1 className="text-black font-bold text-4xl lg:text-6xl leading-tight">
          <span className="text-[#2EC4B6]">The</span> Art of speed <br /> food
          Quality
        </h1>

        <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>

        <Link to="/restaurant/menu">
          <button className="bg-[#2EC4B6] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#259f8e] hover:scale-105 transition-transform duration-300 mx-auto lg:mx-0">
            See Menu
          </button>
        </Link>
      </div>

      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[600px] flex justify-center items-center">
        <img
          src="/assets/images/Food/image 68.png"
          alt="Leaf Background"
          className="absolute top-0 right-0 lg:-right-4 w-64 lg:w-[400px] rotate-12 z-0 opacity-90 pointer-events-none"
        />

        <div className="relative z-10">
          <img
            src="/assets/images/Food/Rectangle 8926.png"
            alt="Main Dish"
            className="w-64 h-64 lg:w-[450px] lg:h-[450px] object-cover rounded-full shadow-2xl  "
          />
        </div>

        <img
          src="/assets/images/Food/Rectangle 8928.png"
          alt="Small Dish 1"
          className="absolute w-14 h-14 lg:w-20 lg:h-20 rounded-full border-2 border-white shadow-lg object-cover z-20 top-[15%] left-[15%] lg:top-[10%] lg:left-[15%]"
        />

        <img
          src="/assets/images/Food/unsplash_M-tzZD5z720.png"
          alt="Small Dish 2"
          className="absolute w-14 h-14 lg:w-20 lg:h-20 rounded-full border-2 border-white shadow-lg object-cover z-20 top-[50%] -left-2.5 lg:left-[5%] -translate-y-1/2"
        />

        <img
          src="/assets/images/Food/unsplash_Gkc_xM3VY34.png"
          alt="Small Dish 3"
          className="absolute w-14 h-14 lg:w-20 lg:h-20 rounded-full border-2 border-white shadow-lg object-cover z-20 bottom-[15%] left-[15%] lg:bottom-[10%] lg:left-[15%]"
        />
      </div>
    </section>
  );
};

export default herosec;
