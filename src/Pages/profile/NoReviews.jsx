import noReviews from "/assets/icons/noReviews.png";
export default function NoReviews() {
    return (
        <div className="flex flex-col items-center justify-center p-6 min-h-[800px] bg-white rounded-xl">
            <img src={noReviews} alt="No Trips" className="w-32 h-32 mb-4" />
            {/* search */}
            <div className="relative w-[180px] h-[50px] mb-5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Start searching"
                    className="w-full h-full pl-12 pr-4 bg-white border border-gray-500 rounded-xl text-gray-600 font-medium"
                />
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-2">You haven’t reviewed any stays yet.</h2>
            <p className="text-gray-500">
After you complete a stay, you’ll be invited to leave a review here. </p>
        </div>
    )
}
