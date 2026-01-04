import { motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdLanguage } from "react-icons/md";

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "/assets/icons/GG.png";

import LanguagesModal from "../../components/Search/LanguagesModal";
import CurrencyModal from "../../components/Search/CurrencyModal";
import { ShoppingCart } from "lucide-react";
import Cities from '../../Pages/city/Cities';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Modal states (NEW)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("language");

  const [language, setLanguage] = useState({
    code: "EN",
    label: "English",
  });

  const [currency, setCurrency] = useState({
    code: "USD",
    symbol: "$",
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="top-0 left-0 right-0 z-50  bg-primary  w-full relative "
      >
        <div className="flex justify-between items-center md:w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:gap-4 ">
          <div className="flex items-center justify-center gap-2">
            <h1 className="font-medium sm:text-4xl lg:text-5xl logo-font">
              Travel
            </h1>
            <img className="w-12.5 h-11.5" src={Logo} />
          </div>

          <div className="md:flex gap-2 md:gap-4 items-center flex-1 justify-center">
            <ul className="hidden md:flex gap-2 md:gap-2.5 lg:gap-4 items-center">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `px-2 py-1 rounded-lg main-font font-medium text-[20px] transition
                  ${
                    isActive
                      ? "bg-[#29bbac] text-white"
                      : "hover:text-[#29bbac]"
                  }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"cities"}
                  className={({ isActive }) =>
                    `px-2 py-1 rounded-lg main-font font-medium text-[20px] transition
                  ${
                    isActive
                      ? "bg-[#29bbac] text-white"
                      : "hover:text-[#29bbac]"
                  }`
                  }
                >
                  Cities
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"restaurant"}
                  className={({ isActive }) =>
                    `px-2 py-1 rounded-lg main-font font-medium text-[20px] transition
                  ${
                    isActive
                      ? "bg-[#29bbac] text-white"
                      : "hover:text-[#29bbac]"
                  }`
                  }
                >
                  Restaurant
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"tickets"}
                  className={({ isActive }) =>
                    `px-2 py-1 rounded-lg main-font font-medium text-[20px] transition
                  ${
                    isActive
                      ? "bg-[#29bbac] text-white"
                      : "hover:text-[#29bbac]"
                  }`
                  }
                >
                  Tickets
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"Hotels"}
                  className={({ isActive }) =>
                    `px-2 py-1 rounded-lg main-font font-medium text-[20px] transition
                  ${
                    isActive
                      ? "bg-[#29bbac] text-white"
                      : "hover:text-[#29bbac]"
                  }`
                  }
                >
                  Hotel
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"contact"}
                  className={({ isActive }) =>
                    `px-2 py-1 rounded-lg main-font font-medium text-[20px] transition
                  ${
                    isActive
                      ? "bg-[#29bbac] text-white"
                      : "hover:text-[#29bbac]"
                  }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            {/* Toggle Button */}

            <div className="md:hidden flex items-center space-x-2">
              <button className="" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <IoMdClose className="w-6 h-6" />
                ) : (
                  <IoMdMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 lg:gap-8">
            {/* Language */}
            <div
              className="flex items-center md:hidden lg:block cursor-pointer"
              onClick={() => {
                setActiveTab("language");
                setIsModalOpen(true);
              }}
            >
              <MdLanguage className="md:w-8 md:h-8 inline-block mr-2 " />
              <span className="main-font font-medium lg:text-[20px]">
                {language.code.toUpperCase()}
              </span>
            </div>

            {/* Currency */}
            <button
              onClick={() => {
                setActiveTab("currency");
                setIsModalOpen(true);
              }}
              className="main-font font-medium lg:text-[20px] cursor-pointer"
            >
              {currency.code.toUpperCase()}
            </button>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `px-2 py-1 rounded-lg main-font font-medium text-[20px] transition
                  ${
                    isActive
                      ? "bg-[#29bbac] text-white"
                      : "hover:text-[#29bbac]"
                  }`
              }
            >
              <ShoppingCart />
            </NavLink>

            <NavLink to="login">
              <button className="px-5 lg:px-3 py-1  rounded bg-[#29bbac] main-font  font-medium text-[18px] lg:text-[20px]">
                Log in
              </button>
            </NavLink>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#29bbac] shadow-lg"
          >
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <Link
                  to={"/"}
                  className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"cities"}
                  className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                  onClick={toggleMenu}
                >
                  Cities
                </Link>
              </li>
              <li>
                <Link
                  to={"restaurant"}
                  className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                  onClick={toggleMenu}
                >
                  Restaurant
                </Link>
              </li>
              <li>
                <Link
                  to={"tickets"}
                  className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                  onClick={toggleMenu}
                >
                  Tickets
                </Link>
              </li>
              <li>
                <Link
                  to={"Hotels"}
                  className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                  onClick={toggleMenu}
                >
                  Hotel
                </Link>
              </li>

              <li>
                <Link
                  to={"contact"}
                  className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.nav>

      {activeTab === "language" && (
        <LanguagesModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedLanguage={language}
          setSelectedLanguage={setLanguage}
        />
      )}

      {activeTab === "currency" && (
        <CurrencyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedCurrency={currency}
          setSelectedCurrency={setCurrency}
        />
      )}
    </>
  );
};

export default Navbar;
