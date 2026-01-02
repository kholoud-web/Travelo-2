import StarterMenu from "./StarterMenu";
import FlowBar from "./FlowBar";
import DrinkMenu from "./DrinkMenu";
import DessertMenu from "./DessertMenu";
import Partners from "./Partners";
import Hero from "../../../components/restaurant/Hero";

function Menu() {
  return (
    <div className="w-full">
      <Hero title="Our Menu" page="Menu"/>
      <StarterMenu />
      <FlowBar />
      <DrinkMenu />
      <DessertMenu />
      <Partners />
    </div>
  );
}

export default Menu;
