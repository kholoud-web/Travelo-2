import { createHashRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./Layouts/RootLayout.jsx";
import ProfileLayout from "./Layouts/ProfileLayout.jsx";
import Support from "./Pages/profile/Support.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Restaurant from "./Pages/restaurant/Resturant.jsx";
import Menu from "./Pages/restaurant/menu/Menu.jsx";
import BookimgDetails from "./Pages/Home/FlightFlow/BookingDetails.jsx";

// const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const SignUp = lazy(() => import("./Pages/Auth/SignUp.jsx"));
const SignUPT = lazy(() => import("./Pages/Auth/SignUPT.jsx"));
const SignUpH = lazy(() => import("./Pages/Auth/SignUPH.jsx"));
const Login = lazy(() => import("./Pages/Auth/Login.jsx"));
const ForgetPassword = lazy(() => import("./Pages/Auth/ForgetPassword.jsx"));
const ResetPassword = lazy(() => import("./Pages/Auth/ResetPassword.jsx"));
const Payment = lazy(() => import("./Pages/Payment/Payment.jsx"));
const ReservationSuccess = lazy(() =>
  import("./Pages/ReservationSuccess/ReservationSuccess.jsx")
);
const NotFound = lazy(() => import("./Pages/NotFound/NotFound.jsx"));
const PersonalData = lazy(() => import("./Pages/profile/PersonalData.jsx"));
const PaymentAccount = lazy(() => import("./Pages/profile/PaymentAccount.jsx"));
const WishLists = lazy(() => import("./Pages/profile/WishLists.jsx"));
const Reviews = lazy(() => import("./Pages/profile/Reviews.jsx"));
const AllTrips = lazy(() => import("./Pages/profile/trips/AllTrips.jsx"));
const ActiveTrips = lazy(() => import("./Pages/profile/trips/ActiveTrips.jsx"));
const Details = lazy(() => import("./Pages/profile/trips/Details.jsx"));
const Settings = lazy(() => import("./Pages/profile/Settings.jsx"));

const FlightFlow = lazy(() =>
  import("./Pages/Home/FlightFlow/FlightFlow.jsx")
);

const FlightLists = lazy(() =>
  import("./Pages/Home/FlightFlow/FlightLists.jsx")
);
const FlightDeals = lazy(() =>
  import("./Pages/Home/FlightFlow/FlightDeals.jsx")
);

// const FlightDeals = lazy(() =>
//   import("./Pages/Home/FlightFlow/flightDeals.js")
// );
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent border-blue-500"></div>
  </div>
);

const SearchResults = lazy(() =>
  import("./components/Search/SearchResults.jsx")
);
const LoadingPage = lazy(() => import("./components/Search/LoadingPage.jsx"));
const Modal = lazy(() => import("./components/Search/Modal.jsx"));
import Shop from "./Pages/restaurant/shop/Shop";
import ShopDetails from "./Pages/restaurant/details/ShopDetails.jsx";
import Cart from "./Pages/restaurant/cart/Cart.jsx";
import Blog from "./Pages/restaurant/blog/Blog.jsx";
import SignUPHotel from "./Pages/Auth/SignUPHotel.jsx";
import SignUPTourist from "./Pages/Auth/SignUPTourist";
import Contact from "./Pages/contact/Contact.jsx";
import FlightPayment from "./Pages/Home/FlightFlow/FlightPayment.jsx";
import MyNextTripDetails from "./components/profile/MyNextTripDetails.jsx";
import Home from "./Pages/Home/Home.jsx";
import Cities from "./Pages/city/Cities.jsx";
import CityDetails from "./Pages/city/cityDetails/CityDetails.jsx";

const HotelDetailPage1 = lazy(() =>
  import("./components/HotelDetail/HotelDetailPage1.jsx")
);
const PropertyDetails = lazy(() =>
  import("./components/HotelDetail/PropertyDetails.jsx")
);
const Mapp = lazy(() => import("./components/HotelDetail/map.jsx"));
import FlightLists from './Pages/Home/FlightFlow/FlightLists';
import { FlightDealsSection } from "./components/FlightFlow/flightDeeals.jsx";

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/", element: <Home /> },
        {
          path: "tickets",
          element: <FlightFlow />,
        },
        {path: "Bookdetails", element: <BookimgDetails/>},
        { path: "search", element: <SearchResults /> },
        { path: "loading", element: <LoadingPage /> }, // just a model
        { path: "modal", element: <Modal /> }, // just a void model
        { path: "payment/:id", element: <Payment /> }, // conect with any payment
        { path: "reservationSuccess/:id", element: <ReservationSuccess /> }, // last payment step
        { path: "cities", element: <Cities /> },
        { path: "cities/:cityId/restaurant", element: <Restaurant /> },
        { path: "cities/:cityId", element: <CityDetails /> },

        { path: "cities/:cityId/restaurant/menu", element: <Menu /> },

        { path: "flight-flow", element: <FlightFlow /> },
        { path: "flight-lists", element: <FlightLists /> },
        { path: "cities/:cityId/Hotels", element: <HotelDetailPage1 /> },
        { path: "PropertyDetails", element: <PropertyDetails /> },
        { path: "map", element: <Mapp /> },

        { path: "cities/:cityId/restaurant/shop", element: <Shop /> },
        { path: "cities/:cityId/restaurant/shop/details", element: <ShopDetails /> },
        { path: "cities/:cityId/restaurant/blog", element: <Blog /> },
        { path: "cart", element: <Cart /> },
        { path: "flight-lists/:id", element: <FlightDealsSection /> },
        { path: "flight-lists/:id/payment", element: <FlightPayment /> },
        { path: "contact", element: <Contact /> },

        { path: "*", element: <NotFound /> },

      ],
    },

    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "signupt",
      element: <SignUPTourist />,
    },
    {
      path: "signuph",
      element: <SignUPHotel />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "forget-password",
      element: <ForgetPassword />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },

    {
      path: "profile",
      element: <ProfileLayout />,
      children: [
        { path: "personal-data", element: <PersonalData /> },
        { path: "payment-account", element: <PaymentAccount /> },
        { path: "wishlists", element: <WishLists /> },
        { path: "reviews", element: <Reviews /> },
        { path: "settings", element: <Settings /> },
        { path: "feedback", element: <Feedback /> },
        { path: "wishlists/next-trip", element: <MyNextTripDetails /> },

        {
          path: "trips",
          children: [
            { path: "all", element: <AllTrips /> },
            { path: "active", element: <ActiveTrips /> },
            { path: "details/:id", element: <Details /> },
          ],
        },
        {
          path: "support",
          element: <Support />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
