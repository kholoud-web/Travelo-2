import menuHero from "../../../assets/img/menu_hero.jpg";
import { Link } from "react-router-dom";

function HeroMenu() {
  return (
    <div
      className="relative h-[50vh] bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${menuHero})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <h1 className="relative z-10 text-white text-4xl lg:text-6xl font-bold mb-7">
        Our Menu
      </h1>
      <p className="relative z-10 ">
        <Link
          to="/cities/:cityId/restaurant"
          className="text-white me-3 font-semibold hover:text-[#2EC4B5]"
        >
          Home
        </Link>
        <span className="text-[#2EC4B5] font-semibold cursor-pointer">
          Menu
        </span>
      </p>
    </div>
  );
}

export default HeroMenu;
