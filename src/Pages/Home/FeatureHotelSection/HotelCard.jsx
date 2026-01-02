import {  FaRegHeart } from "react-icons/fa";

const HotelCard = ({hotel}) => {
    console.log(hotel);
    
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img src={hotel.img} alt={hotel.name} className="w-full h-60 object-cover" />
                 
                  <div className="absolute top-3 right-3 bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100">
                        <FaRegHeart />
                  </div>
                </div>
                
                <div className="p-4 space-y-1">
                  <div className="flex items-center text-sm">
                    <span className="font-bold text-blue-600 mr-1">{hotel.rating}</span>
                    <span className="text-blue-600  mr-2">{hotel.reviewText}</span>
                    <span className="text-gray-400">({hotel.reviewsCount} reviews)</span>
                  </div>
                  <h3 className="text-lg font-bold">{hotel.name}</h3>
                  <p className="text-sm text-gray-500">{hotel.location}</p>
                  
                  <div className="pt-2 text-right">
                    <span className="text-sm text-gray-500">per night</span> 
                    <span className="text-xl font-bold ml-1">${hotel.pricePerNight}</span>
                  </div>
                </div>
              </div>
  )
}

export default HotelCard
