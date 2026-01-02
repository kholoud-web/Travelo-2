const rooms = [
  {
    id: 1,
    image: "/assets/images/room1.png",
    name: "Deluxe Double Room with Sea View",
    description:
      "Spacious room with a king-size bed, modern decor, and a private balcony overlooking the Mediterranean Sea.",
    guests: "2 adults",
    size: "32 m²",
    beds: "1 large double bed",
    price: "$320",
  },
  {
    id: 2,
    image: "/assets/images/room2.png",
    name: "Executive Suite",
    description:
      "Elegant suite featuring a separate living area, luxury bathroom amenities, and panoramic city views.",
    guests: "3 adults",
    size: "48 m²",
    beds: "1 large double bed",
    price: "$450",
  },
  {
    id: 3,
    image: "/assets/images/room3.png",
    name: "Family Room",
    description:
      "Ideal for families, this spacious room offers two double beds and extra space for comfort.",
    guests: "4 adults",
    size: "55 m²",
    beds: "2 double beds",
    price: "$520",
  },
  {
    id: 4,
    image: "/assets/images/room4.png",
    name: "Superior Twin Room",
    description:
      "Modern twin room with floor-to-ceiling windows and stylish furnishings.",
    guests: "2 adults",
    size: "30 m²",
    beds: "2 single beds",
    price: "$300",
  },
  {
    id: 5,
    image: "/assets/images/room5.png",
    name: "Deluxe Double Room with Sea View",
    description:
      "Spacious room with a king-size bed, modern decor, and a private balcony overlooking the Mediterranean Sea.",
    guests: "2 adults",
    size: "32 m²",
    beds: "1 large double bed",
    price: "$320",
  },
  {
    id: 6,
    image: "/assets/images/room6.png",
    name: "Executive Suite",
    description:
      "Elegant suite featuring a separate living area, luxury bathroom amenities, and panoramic city views.",
    guests: "3 adults",
    size: "48 m²",
    beds: "1 large double bed",
    price: "$450",
  },
];

const RoomsSection = () => {
  return (
    <div id="rooms" className="mt-14">
      <h2 className="text-xl font-semibold mb-6">Available Rooms</h2>

      <div className="space-y-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="border border-gray-200 rounded-xl overflow-hidden flex bg-white shadow-sm"
          >
            <div className="w-72 h-56 flex-shrink-0">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{room.name}</h3>

                <p className="text-sm text-gray-600 mb-3">{room.description}</p>

                <div className="flex gap-6 text-sm text-gray-500">
                  <span>👤 {room.guests}</span>
                  <span>📐 {room.size}</span>
                  <span>🛏 {room.beds}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mt-4">
                <div className="text-md font-bold">{room.price} / night</div>

                <button
                  className="border border-teal-500 text-teal-600 px-4 py-2 rounded-lg
              hover:bg-teal-50 transition text-sm font-medium"
                >
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsSection;
