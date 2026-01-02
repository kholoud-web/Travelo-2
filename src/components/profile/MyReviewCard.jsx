const MyReviewCard = ({ review }) => {
    const getStatusConfig = (status) => {
        switch (status) {
            case 'posted':
                return { text: 'Review posted', color: 'text-green-600 border-green-600' };
            case 'rejected':
                return { text: 'Review rejected', color: 'text-red-600 border-red-600' };
            case 'pending':
                return { text: 'Review Pending', color: 'text-orange-600 border-orange-600' };
            default:
                return { text: 'Unknown', color: 'text-gray-600 border-gray-600' };
        }
    };

    const statusConfig = getStatusConfig(review.status);

    return (
        <div className="bg-white rounded-xl shadow-sm p-5 mb-5 border border-gray-200">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="flex gap-3">
                    <img
                        src={`https://picsum.photos/seed/${review.id}/150/150`}
                        alt="Property"
                        className="w-30 h-30 object-cover rounded-lg"
                    />
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${statusConfig.color}`}>
                                {statusConfig.text}
                            </span>
                        </div>
                        <h3 className="font-semibold text-gray-800">
                            You reviewed{' '}
                            <a href="#" className="text-teal-600 hover:text-teal-700 underline">
                                {review.hotelName}
                            </a>
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-medium">
                                {review.rating}
                            </span>
                            <span className="font-medium ">
                                {review.ratingLabel}
                            </span>
                        </div>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    ...
                </button>
            </div>
            <div className="pl-32 p-4 mt-4 rounded-lg">
                {/* Review Text */}
                <div className="flex items-center gap-1">
                    <img className="h-7 w-7" src="/public/assets/icons/face-smile.png" />
                    <li key={review.id} className="text-gray-700 text-sm flex gap-1">
                        {review.reviewText}
                    </li>
                </div>
                {/* Additional Comments */}
                {review.additionalComments.length > 0 && (
                    <ul className="mt-3 space-y-1">
                        {review.additionalComments.map((comment, idx) => (
                            <div className="items-center flex gap-1">
                                <img className="h-7 w-7" src="/public/assets/icons/face-smile.png" />
                                <li key={idx} className="text-gray-700 text-sm flex gap-1">
                                    {comment}
                                </li>
                            </div>
                        ))}
                    </ul>
                )}
                <hr className="text-gray-200 mt-3" />
                {/* Helpful Info */}
                <div className="flex mt-4 text-sm text-gray-500 items-center gap-2">
                    {review.helpfulCount > 0 && (
                        <>
                            <img src="/assets/icons/like.png" alt="like icon" className="w-4 h-4" />
                            <span>{review.helpfulCount} people found this helpful</span>
                        </>
                    )}
                </div>

                {/* Property Response */}
                {review.propertyResponse && (
                    <div className="mt-4 pt-4 bg-gray-200 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2"><img src="/public/assets/icons/Property-response.png" /><p className="text-sm font-medium text-gray-800 mb-1">Property response</p></div>
                        <p className="text-sm text-gray-700">{review.propertyResponse}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyReviewCard;