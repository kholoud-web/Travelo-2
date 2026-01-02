// Layout.jsx
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ProfileFooter from "./Footer/ProfileFooter";
import comment from "/assets/icons/comment-text.png"
import credit from "/assets/icons/credit-card.png"
import heart from "/assets/icons/heart.png"
import luggage from "/assets/icons/Luggage.png"
import settings from "/assets/icons/settings.png"
import userCircle from "/assets/icons/user-circle.png"
import { useState } from "react";
export default function ProfileLayout() {
    const [isTripsOpen, setIsTripsOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `flex items-center p-2 rounded hover:bg-gray-50 ${isActive ? "bg-gray-50 text-gray-900 font-medium" : "text-gray-700"
    }`;
  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row h-full bg-[#F9F9F9]">
        {/* Sidebar */}
          <aside className="mt-[50px] mb-8 ms-6 me-5 ml-5 w-full lg:w-[296px] px-6 bg-white rounded-2xl flex flex-col overflow-auto">
      {/* Profile Section */}
      <div className="py-6 flex items-start">
        <div className="w-14 h-14 rounded-full bg-gray-50 shrink-0 mr-4 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div>
          <div className="text-lg font-bold text-gray-900">Emmily Morgan</div>
          <div className="text-sm text-gray-500 mt-1">Customer Operations</div>
        </div>
      </div>

      {/* Separator */}
      <div className="my-4 border-t border-gray-300"></div>

      {/* Navigation Links */}
      <nav className="space-y-1 ">
        <NavLink to="/profile/personal-data" className={linkClass}>
          <img src={userCircle} alt="data" className="w-5 h-5 mr-3" />
          Personal Data
        </NavLink>
        <NavLink to="/profile/payment-account" className={linkClass}>
          <img src={credit} alt="Payment" className="w-5 h-5 mr-3" />
          Payment Account
        </NavLink>

        {/* Trips with Submenu */}
        <div>
          <button
            onClick={() => setIsTripsOpen(!isTripsOpen)}
            className={`flex justify-between items-center w-full p-2 rounded ${
              isTripsOpen ? "bg-blue-50 text-green-800 font-medium" : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <div className="flex items-center">
              <img src={luggage} alt="Trips" className="w-5 h-5 mr-3" />
              Trips
            </div>
            <svg
              className={`w-5 h-5 transition-transform ${isTripsOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          {/* Submenu */}
          {isTripsOpen && (
            <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-300 pl-4">
              <NavLink
                to="/profile/trips/allTrips"
                className={({ isActive }) =>
                  `block py-1.5 px-2 rounded hover:bg-gray-50 ${isActive ? "text-green-800 font-medium" : "text-gray-700"}`
                }
              >
                All
              </NavLink>
              <NavLink
                to="/profile/trips/active"
                className={({ isActive }) =>
                  `block py-1.5 px-2 rounded hover:bg-gray-50 ${isActive ? "text-green-800 font-medium" : "text-gray-700"}`
                }
              >
                Active
              </NavLink>
              <NavLink
                to="/profile/trips/completed"
                className={({ isActive }) =>
                  `block py-1.5 px-2 rounded hover:bg-gray-50 ${isActive ? "text-gray-700 font-medium" : "text-gray-700"}`
                }
              >
                Completed
              </NavLink>
              <NavLink
                to="/trips/canceled"
                className={({ isActive }) =>
                  `block py-1.5 px-2 rounded hover:bg-gray-50 ${isActive ? "text-gray-700 font-medium" : "text-gray-700"}`
                }
              >
                Canceled
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/profile/wishlists" className={linkClass}>
          <img src={heart} alt="Wishlist" className="w-5 h-5 mr-3" />
          Wish Lists
        </NavLink>
        <NavLink to="/profile/support" className={linkClass}>
          <img src={settings} alt="Support" className="w-5 h-5 mr-3" />
          Support
        </NavLink>
        <NavLink to="/profile/reviews" className={linkClass}>
          <img src={comment} alt="Reviews" className="w-5 h-5 mr-3" />
          My Reviews
        </NavLink>
      </nav>

      {/* Separator */}
      <div className="my-4 border-t border-gray-300"></div>

      {/* Settings */}
      <NavLink to="/profile/settings" className={linkClass}>
        <img src={settings} alt="Settings" className="w-5 h-5 mr-3" />
        Settings
      </NavLink>

      {/* Logout */}
      <div className="mt-auto mb-10">
        <button className="text-red-500 font-medium flex items-center hover:text-red-600 transition-colors">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          Log out
        </button>
      </div>
    </aside>
        {/* Main content */}
        <main className="mt-[50px] mr-5 flex-1  h-[106vh]  mb-8 ">
          <Outlet />
        </main>
      </div>
      <ProfileFooter />
    </>
  );
}