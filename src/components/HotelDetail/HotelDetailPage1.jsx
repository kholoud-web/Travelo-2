import { useNavigate } from "react-router-dom";

export default function HotelDetailPage1() {
  const card = [
    {
      image: "/assets/images/detail1.jpg",
      title: "California Sunset/Twilight Boat Cruise",
      name: "2 days 3 nights - Family",
      salary: "$48.25 / person",
      button: "Book Now",
      rate: "4.96 (672 reviews)",
    },
    {
      image: "/assets/images/detail2.jpg",
      title: "California Sunset/Twilight Boat Cruise",
      name: "2 days 3 nights - Family",
      salary: "$48.25 / person",
      button: "Book Now",
      rate: "4.96 (672 reviews)",
    },
    {
      image: "/assets/images/detail3.jpg",
      title: "California Sunset/Twilight Boat Cruise",
      name: "2 days 3 nights - Family",
      salary: "$48.25 / person",
      button: "Book Now",
      rate: "4.96 (672 reviews)",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <div
        className="relative h-130"
        style={{
          background: `linear-gradient(90deg, rgba(0,35,77,.65) 15%, rgba(0,35,77,0) 75%), url(/assets/images/hoteldetail1.jpg) center/cover no-repeat`,
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-10 pt-36">
          <h1 className="text-white text-5xl font-bold max-w-lg leading-tight">
            Make your travel wishlist, we’ll do the rest
          </h1>
          <p className="text-white text-lg mt-4">
            Special offers to suit your plan
          </p>
        </div>
      </div>

      {/* SEARCH BOX */}
      <div className="relative z-20 -mt-24 max-w-7xl mx-auto px-6 ">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-teal-100 text-teal-600 rounded-full">
            Hotel
          </span>

          <form className="flex items-center gap-6">
            {/* Location */}
            <div className="relative flex-1">
              <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-semibold">
                Location
              </label>
              <input
                type="text"
                placeholder="Where to go?"
                className="w-full border p-3 pl-10 rounded outline-none"
              />
              <img
                src="/assets/icons/location.svg.png"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5"
              />
            </div>

            {/* Check in */}
            <div className="relative w-56">
              <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-semibold">
                Check in
              </label>
              <input
                type="text"
                placeholder="Select date"
                className="w-full border p-3 pl-10 rounded outline-none"
              />
              <img
                src="/assets/icons/calendar.svg.png"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5"
              />
            </div>

            {/* Check out */}
            <div className="relative w-56">
              <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-semibold">
                Check out
              </label>
              <input
                type="text"
                placeholder="Select date"
                className="w-full border p-3 pl-10 rounded outline-none"
              />
              <img
                src="/assets/icons/calendar.svg.png"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5"
              />
            </div>

            {/* Guests */}
            <div className="relative w-64">
              <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-semibold">
                Guest
              </label>
              <input
                type="text"
                placeholder="2 adults, 2 children"
                className="w-full border p-3 pl-10 rounded outline-none"
              />
              <img
                src="/assets/icons/user.svg.png"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={() => navigate("/PropertyDetails")}
              className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* RECOMMENDATION */}
      <div className="max-w-7xl mx-auto px-10 mt-24">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-4xl font-bold">Recommendation</h2>
            <p className="text-gray-500 mt-3">
              Discover our top-rated destinations, handpicked based on customer
              reviews.
            </p>
          </div>

          <div className="flex gap-2">
            {["Categories", "Duration", "Review / Rating", "Price range"].map(
              (item, i) => (
                <button
                  key={i}
                  className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {card.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border shadow-sm overflow-hidden"
            >
              <div className="relative">
                <img src={item.image} className="w-full h-60 object-cover" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg text-sm font-semibold">
                  ⭐ {item.rate}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.name}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold">{item.salary}</span>
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm">
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FALL INTO TRAVEL */}
      <div className="bg-gray-50 mt-24 py-20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold">Fall into travel</h2>
              <p className="text-gray-600 mt-3 max-w-xl">
                Going somewhere to celebrate this season? Whether you’re going
                home or somewhere to roam, we’ve got the travel tools to get you
                to your destination.
              </p>
            </div>
            <button className="border border-teal-500 text-teal-500 px-4 py-2 rounded-lg">
              See All
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-teal-500 text-white rounded-2xl p-10 flex flex-col justify-between min-h-105">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold leading-snug">
                    Backpacking
                    <br />
                    Sri Lanka
                  </h3>

                  <div className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold text-right">
                    From <br />
                    $700
                  </div>
                </div>

                <p className="text-sm text-teal-50 leading-relaxed">
                  Traveling is a unique experience as it's the best way to
                  unplug from the pushes and pulls of daily life. It helps us to
                  forget about our problems, frustrations, and fears at home.
                  During our journey, we experience life in different ways. We
                  explore new places, cultures, cuisines, traditions, and ways
                  of living.
                </p>
              </div>

              <button className="bg-white text-black py-3 rounded-lg font-semibold mt-8">
                Book Flight
              </button>
            </div>

            {/* الصور */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden aspect-4/3">
                <img
                  src="/assets/images/srilanka1.jpg"
                  alt="Sri Lanka nature"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-xl overflow-hidden aspect-4/3">
                <img
                  src="/assets/images/srilanka2.jpg"
                  alt="Sri Lanka beach"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-xl overflow-hidden aspect-4/3">
                <img
                  src="/assets/images/srilanka3.jpg"
                  alt="Sri Lanka forest"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-xl overflow-hidden aspect-4/3">
                <img
                  src="/assets/images/srilanka4.jpg"
                  alt="Sri Lanka resort"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
