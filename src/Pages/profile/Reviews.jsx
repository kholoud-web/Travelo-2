import NoReviews from './NoReviews';
import ReviewCard from '../../components/profile/MyReviewCard';

const Reviews = () => {
  // Mock Data
  const reviews = [
    {
      id: 1,
      status: 'posted',
      hotelName: 'Via Golden Tulip Hotel',
      date: '24 Oct 2024',
      rating: 3.0,
      ratingLabel: 'Poor',
      reviewText: "The receptionist was a good guy.",
      additionalComments: [
        "It doesn't have any daily cleaning or towel changing. It doesn't have any liquid soap; it was empty. The kitchen didn't have any dishwashing liquid."
      ],
      helpfulCount: 2,
      propertyResponse: "Hi Anna, we are very sorry for this feedback. Our property is a short-let house, not a hotel. Therefore, daily cleaning and towel changes are not foreseen in this type of short let. Probably, if you had kept this distinction in mind, you would not have judged your experience so harshly, and please forgive us for any misunderstanding. In any case, advice from our guests is always welcome. We thank you for choosing us!"
    },
    {
      id: 2,
      status: 'rejected',
      hotelName: 'Via Forest Whisper Cabin',
      date: '24 Jul 2023',
      rating: 3.0,
      ratingLabel: 'Poor',
      reviewText: "Nothing was good. It was my worst experience.",
      additionalComments: [
        "It doesn't have any daily cleaning or towel changing. It doesn't have any liquid soap; it was empty. The kitchen didn't have any dishwashing liquid."
      ],
      helpfulCount: 0,
      propertyResponse: null
    },
    {
      id: 3,
      status: 'pending',
      hotelName: 'Via Golden Tulip Hotel',
      date: '24 Jul 2023',
      rating: 7.0,
      ratingLabel: 'Good',
      reviewText: "Great location and friendly staff!",
      additionalComments: [],
      helpfulCount: 77,
      propertyResponse: null
    },
    {
      id: 3,
      status: 'pending',
      hotelName: 'Via Golden Tulip Hotel',
      date: '24 Jul 2023',
      rating: 7.0,
      ratingLabel: 'Good',
      reviewText: "Great location and friendly staff!",
      additionalComments: [],
      helpfulCount: 77,
      propertyResponse: null
    },
    {
      id: 3,
      status: 'pending',
      hotelName: 'Via Golden Tulip Hotel',
      date: '24 Jul 2023',
      rating: 7.0,
      ratingLabel: 'Good',
      reviewText: "Great location and friendly staff!",
      additionalComments: [],
      helpfulCount: 77,
      propertyResponse: null
    }
  ];

  if (reviews.length === 0) {
    return <NoReviews />;
  }

  return (
    <div className=" mx-auto p-4">
      <div className="space-y-4 max-h-screen overflow-y-auto">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;


