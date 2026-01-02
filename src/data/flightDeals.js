export const flightDeals = [
  {
    id: 1,
    from: "Denmark",
    to: "New York",
    departDate: "2024-06-09",
    returnDate: "2024-06-16",
    cabin: "Business",
    price: 288.15,
    seatsLeft: 18,
    image:
      "../../public/assets/images/flightDeals-1.png",
    liked: false,
  },
  {
    id: 2,
    from: "Denmark",
    to: "New York",
    departDate: "2024-06-09",
    returnDate: "2024-06-16",
    cabin: "Business",
    price: 288.15,
    seatsLeft: 18,
    image:
      "../../public/assets/images/flightDeals-2.png",
    liked: true,
  },
  {
    id: 3,
    from: "Denmark",
    to: "New York",
    departDate: "2024-06-09",
    returnDate: "2024-06-16",
    cabin: "Business",
    price: 288.15,
    seatsLeft: 18,
    image:
      "../../public/assets/images/flightDeals-3.png",
    liked: false,
  },
  {
    id: 4,
    from: "Denmark",
    to: "New York",
    departDate: "2024-06-09",
    returnDate: "2024-06-16",
    cabin: "Business",
    price: 288.15,
    seatsLeft: 18,
    image:
      "../../public/assets/images/flightDeals-4.png",
    liked: false,
  },
];
export const flightTravelimgs=[
  {
    id:1,
    image:"../../public/assets/images/flight-travel-1.png", 
  },
  {
    id:2,
    image:"../../public/assets/images/flight-travel-2.png", 
  },
  {
    id:3,
    image:"../../public/assets/images/flight-travel-3.png", 
  },
  {
    id:4,
    image:"../../public/assets/images/flight-travel-4.png", 
  },
]
export  const flights = [
    {
      id: 1,
      airline: 'Emirates',
      logo: '🇦🇪',
      rating: 4.2,
      reviews: 54,
      price: 104,
      flights: [
        { departure: '12:00 pm', arrival: '01:28 pm', type: 'non stop', duration: '2h 28m', route: 'EWR-BNA' },
        { departure: '12:00 pm', arrival: '01:28 pm', type: 'non stop', duration: '2h 28m', route: 'EWR-BNA' }
      ]
    },
    {
      id: 2,
      airline: 'flydubai',
      logo: '✈️',
      rating: 4.2,
      reviews: 54,
      price: 104,
      flights: [
        { departure: '12:00 pm', arrival: '01:28 pm', type: 'non stop', duration: '2h 28m', route: 'EWR-BNA' },
        { departure: '12:00 pm', arrival: '01:28 pm', type: 'non stop', duration: '2h 28m', route: 'EWR-BNA' }
      ]
    },
    {
      id: 3,
      airline: 'Qatar Airways',
      logo: '🇶🇦',
      rating: 4.2,
      reviews: 54,
      price: 104,
      flights: [
        { departure: '12:00 pm', arrival: '01:28 pm', type: 'non stop', duration: '2h 28m', route: 'EWR-BNA' },
        { departure: '12:00 pm', arrival: '01:28 pm', type: 'non stop', duration: '2h 28m', route: 'EWR-BNA' }
      ]
    },
    {
      id: 4,
      airline: 'Etihad',
      logo: '🇦🇪',
      rating: 4.2,
      reviews: 54,
      price: 104,
      flights: [
        { departure: '12:00 pm', arrival: '01:28 pm', type: 'non stop', duration: '2h 28m', route: 'EWR-BNA' },
        { departure: '12:00 pm', arrival: '01:28 pm', type: 'non stop', duration: '2h 28m', route: 'EWR-BNA' }
      ]
    }
  ];
export const flightsDetails = [
  {
    id: 1,
    title: "Emirates A380 Airbus",
    airline: "Emirates",
    image:
      "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg",
    departureCode: "EWR",
    arrivalCode: "IST",
    departure: "12:00 pm",
    arrival: "2:28 pm",
    date: "Wed, Dec 8",
    duration: "2h 28m",
    aircraftModel: "Airbus A380",
    price: 240,
    baseFare: 400,
    discount: 120,
    taxes: 40,
    serviceFee: 20,
     amenities: ["wifi", "power", "food", "wheelchair"],
    rating: 4.2,
    reviews: "54 reviews",
  },

  {
    id: 2,
    title: "Qatar Airways Boeing 777",
    airline: "Qatar Airways",
    image:
      "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg",
    departureCode: "DOH",
    arrivalCode: "IST",
    departure: "9:15 am",
    arrival: "12:10 pm",
    date: "Thu, Dec 9",
    duration: "2h 55m",
    aircraftModel: "Boeing 777",
    price: 260,
    baseFare: 420,
    discount: 130,
    taxes: 55,
     amenities: ["wifi", "power", "food", "wheelchair"],
    serviceFee: 25,
    rating: 4.5,
    reviews: "78 reviews",
  },

  {
    id: 3,
    title: "Turkish Airlines A321",
    airline: "Turkish Airlines",
    image:
      "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg",
    departureCode: "LHR",
    arrivalCode: "IST",
    departure: "6:40 pm",
    arrival: "11:45 pm",
    date: "Fri, Dec 10",
    duration: "3h 05m",
    aircraftModel: "Airbus A321",
    price: 210,
    baseFare: 380,
    discount: 100,
    taxes: 45,
    serviceFee: 18,
     amenities: ["wifi", "power", "food", "wheelchair"],
    rating: 4.3,
    reviews: "62 reviews",
  },

  {
    id: 4,
    title: "Lufthansa A350",
    airline: "Lufthansa",
    image:
      "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg",
    departureCode: "FRA",
    arrivalCode: "IST",
    departure: "8:20 am",
    arrival: "12:40 pm",
    date: "Sat, Dec 11",
    duration: "3h 20m",
    aircraftModel: "Airbus A350",
    price: 230,
    baseFare: 390,
    discount: 110,
    taxes: 50,
    serviceFee: 22,
     amenities: ["wifi", "power", "food", "wheelchair"],
    rating: 4.4,
    reviews: "69 reviews",
  },
];

export const amenitiesGrid = [
  { id: 1, name: "Seat", icon: "🪑" },
  { id: 2, name: "Flight", icon: "✈️" },
  { id: 3, name: "Entertainment", icon: "📺" },
  { id: 4, name: "Window", icon: "🪟" },
  { id: 5, name: "Luggage", icon: "🧳" },
  { id: 6, name: "Meal", icon: "🍽️" },
  { id: 7, name: "Power", icon: "🔌" },
  { id: 8, name: "Wi-Fi", icon: "📶" },
];
