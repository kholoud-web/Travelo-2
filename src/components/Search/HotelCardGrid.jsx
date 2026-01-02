// import React from "react";
// import { Heart, MapPin } from "lucide-react";

// const HotelCardGrid = ({ hotel }) => {
//   const image = hotel.images?.[0];

//   return (
//     <div className="bg-white rounded-xl border overflow-hidden">
//       <div className="relative h-56">
//         <img src={image} alt={hotel.name} className="w-full h-full object-cover" />

//         {hotel.badge && (
//           <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
//             {hotel.badge}
//           </span>
//         )}

//         <button className="absolute top-3 right-3 bg-white p-2 rounded-full">
//           <Heart className="w-4 h-4 text-red-500" />
//         </button>
//       </div>

//       <div className="p-4">
//         {/* Title + star */}
//         <div className="flex justify-between items-center">
//           <h3 className="text-lg font-semibold">{hotel.name}</h3>
//           <div className="flex items-center gap-1">
//             <span className="font-semibold">{hotel.rating}</span>
//             <span className="text-yellow-400">★</span>
//           </div>
//         </div>

//         {/* Location */}
//         <div className="flex items-center gap-2 text-blue-600 text-sm mt-1">
//           <MapPin className="w-4 h-4" />
//           {hotel.location}
//         </div>

//         {/* Score */}
//         <div className="flex items-center gap-2 text-sm mt-2">
//           <span className="bg-blue-100 text-blue-700 px-2 rounded">
//             {hotel.score}
//           </span>
//           <span className="text-blue-700">{hotel.scoreLabel}</span>
//           <span className="text-gray-500">
//             {hotel.reviews.toLocaleString()} reviews
//           </span>
//         </div>

//         {/* Type */}
//         <div className="text-sm text-gray-700 mt-2">
//           {hotel.type} · {hotel.bedType}
//         </div>

//         {/* Price */}
//         <div className="flex justify-between items-end mt-4">
//           {hotel.discount && (
//             <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
//               {hotel.discount}
//             </span>
//           )}

//           <div className="text-right">
//             {hotel.originalPrice && (
//               <div className="line-through text-gray-400 text-sm">
//                 ${hotel.originalPrice}
//               </div>
//             )}
//             <div className="text-xl font-bold">${hotel.price}</div>
//             <div className="text-sm text-gray-500">
//               {hotel.nights} nights, {hotel.adults} adults
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCardGrid;
