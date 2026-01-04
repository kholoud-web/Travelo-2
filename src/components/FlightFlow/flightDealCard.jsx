import { Heart } from "lucide-react";

export const FlightDealCard = ({ deal }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white relative rounded-xl overflow-hidden shadow-md w-full mx-auto md:max-w-xl max-w-[60dvw] min-w-75">
      {/* IMAGE */}
      <div className="relative md:w-1/2">
        <img
          src={deal.image}
          alt={`${deal.from} to ${deal.to}`}
          className="h-full w-full object-cover"
        />

        <button className="absolute z-50 top-3 left-3 bg-white rounded-full p-2">
          <Heart
            size={18}
            className={deal.liked ? "fill-red-500 text-red-500" : ""}
          />
        </button>
      </div>

      {/* CONTENT */}
      <div className="absolute w-full h-full flex md:justify-end  justify-center md:items-stretch items-center ">
        <div className="md:w-2/3 max-h-[60dvh] w-[40dvh] md:min-h-auto min-h-80 rounded-4xl p-5 flex flex-col bg-white  justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1 flex justify-between">
              <span>{deal.departDate}</span> -- <span> {deal.returnDate}</span>
            </p>

            <h3 className="text-lg font-bold mb-2 flex justify-between">
              <span>{deal.from}</span> ⇄ <span> {deal.to}</span>
            </h3>

            <div className="flex justify-between text-sm text-gray-500 mb-3">
              <span>{deal.cabin}</span>
              <span>{deal.cabin}</span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold">${deal.price}</p>
              <p className="text-2xl font-bold">${deal.price}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">
              {deal.seatsLeft} Seats left
            </span>

            <button className="bg-main text-white px-4 py-2 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
