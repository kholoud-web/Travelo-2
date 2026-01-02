import { useEffect, useRef, useState } from "react";
import {
  Heart,
  Shuffle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import d1 from "../../../assets/img/details/d1.jpg";
import d2 from "../../../assets/img/details/d2.jpg";
import d3 from "../../../assets/img/details/d3.jpg";
import d4 from "../../../assets/img/details/d4.jpg";
import d5 from "../../../assets/img/details/d5.jpg";

const images = [d1, d2, d3, d4, d5];

function MainDetails() {
  const [current, setCurrent] = useState(0);
  const [qty, setQty] = useState(1);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleImageClick = (index) => {
    stopAutoSlide();
    setCurrent(index);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(startAutoSlide, 5000);
  };

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex gap-6">
        <div className="flex flex-col gap-3">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => handleImageClick(index)}
              className={`w-20 h-20 object-cover cursor-pointer rounded-lg border
              ${current === index ? "border-purple-500" : "border-gray-200"}`}
            />
          ))}
        </div>

        <div className="flex-1">
          <img
            src={images[current]}
            alt=""
            className="w-full h-[450px] object-cover rounded-xl transition-all duration-500"
          />
        </div>
      </div>

      {/* ================= Right: Details ================= */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-teal-100 text-teal-600 text-sm px-3 py-1 rounded-full">
            In stock
          </span>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <button className="flex items-center gap-1 hover:text-black">
              <ChevronLeft size={16} /> Prev
            </button>
            <button className="flex items-center gap-1 hover:text-black">
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Yummy Chicken Chup</h1>

        <p className="text-gray-500 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>

        <h2 className="text-2xl font-semibold mb-4">54.00$</h2>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex text-yellow-400">
            ★★★★★
          </div>
          <span className="text-sm text-gray-500">
            5.0 Rating | 22 Review
          </span>
        </div>

        <p className="text-gray-600 mb-6">Dictum/cursus/Risus</p>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-4 py-2"
            >
              −
            </button>
            <span className="px-4">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="px-4 py-2"
            >
              +
            </button>
          </div>

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            Add to cart
          </button>
        </div>

        <div className="flex items-center gap-6 text-gray-500 mb-6">
          <button className="flex items-center gap-2 hover:text-black">
            <Heart size={18} /> Add to Wishlist
          </button>
          <button className="flex items-center gap-2 hover:text-black">
            <Shuffle size={18} /> Compare
          </button>
        </div>

        <div className="text-sm text-gray-500 space-y-2">
          <p>
            <span className="font-medium text-gray-700">Category:</span> Pizza
          </p>
          <p>
            <span className="font-medium text-gray-700">Tag:</span> Our Shop
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainDetails;
