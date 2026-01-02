import { useState } from "react";

const DescriptionSection = () => {

    const [showMore, setShowMore] = useState(false);
return (
  <div>
    <h2 className="text-xl font-semibold mb-4">Description</h2>

    <p
      className={`text-sm leading-7 text-gray-600 transition-all ${
        showMore ? "" : "line-clamp-4"
      }`}
    >
      Hotel Arts Barcelona is a luxury five-star hotel located along the
      Mediterranean coastline, offering elegant rooms with panoramic sea and
      city views. The hotel is known for its modern architecture, exceptional
      hospitality, and refined interiors designed for comfort and relaxation.
      <br />
      <br />
      Guests can enjoy a wide range of premium amenities including a world-class
      spa, an outdoor swimming pool, multiple fine-dining restaurants, and
      direct access to the beach. Whether you are visiting for leisure or
      business, Hotel Arts Barcelona provides an unforgettable experience in one
      of the most vibrant cities in Europe.
    </p>

    <button
      onClick={() => setShowMore(!showMore)}
      className="mt-3 text-teal-600 text-sm font-medium hover:underline"
    >
      {showMore ? "Show less" : "Show more"}
    </button>
  </div>
);    
}

export default DescriptionSection;



