import { useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    date: "March 2024",
    rating: 5,
    avatar: "/assets/icons/user.svg.png",
    text: "Amazing stay! The hotel exceeded our expectations. The staff were incredibly friendly, the room was spotless, and the sea view was absolutely breathtaking.",
  },
  {
    id: 2,
    name: "Michael Brown",
    date: "February 2024",
    rating: 4,
    avatar: "/assets/icons/user.svg.png",
    text: "Great location and very comfortable rooms. Breakfast was delicious and the facilities were top-notch. Would definitely stay here again.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    date: "January 2024",
    rating: 5,
    avatar: "/assets/icons/user.svg.png",
    text: "One of the best hotels I’ve stayed at in Barcelona. Everything was perfect from check-in to check-out.",
  },
  {
    id: 4,
    name: "David Martinez",
    date: "December 2023",
    rating: 4,
    avatar: "/assets/icons/user.svg.png",
    text: "Very nice hotel with excellent service. The only downside was the busy pool area during peak hours.",
  },
  {
    id: 5,
    name: "Olivia Garcia",
    date: "November 2023",
    rating: 5,
    avatar: "/assets/icons/user.svg.png",
    text: "Outstanding experience. The amenities, the food, and the views were all exceptional.",
  },
];


const ReviewsSection = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <div id="reviews" className="mt-16">
      <h2 className="text-xl font-semibold mb-2">Reviews</h2>

      {/* Review Summary */}
      <div className="flex items-center gap-2 text-sm text-gray-700 mb-6">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="font-medium">4.8</span>
        <span>(100 reviews)</span>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {(showAllReviews ? reviews : reviews.slice(0, 3)).map((review) => (
          <div key={review.id} className="flex gap-4">
            {/* Avatar */}
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover"
            />

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-sm">{review.name}</h4>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 my-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-6">{review.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <button
        onClick={() => setShowAllReviews(!showAllReviews)}
        className="mt-6 border border-teal-600 text-teal-600 px-4 py-2 rounded-lg
    text-sm font-medium hover:bg-gray-50 transition"
      >
        {showAllReviews ? "Show less reviews" : "Show all 100 reviews"}
      </button>
    </div>
  );
};
export default ReviewsSection;
