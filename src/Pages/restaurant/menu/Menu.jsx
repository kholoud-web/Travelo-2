import StarterMenu from "./StarterMenu";
import FlowBar from "./FlowBar";
import DrinkMenu from "./DrinkMenu";
import DessertMenu from "./DessertMenu";
import Partners from "./Partners";
import Hero from "../../../components/restaurant/Hero";
import { useParams } from "react-router-dom";

function Menu() {
  const {cityId} = useParams();
  
  return (
    <div className="w-full">
      <Hero title="Our Menu" page="Menu" cityId={cityId} />
      <StarterMenu />
      <FlowBar />
      <DrinkMenu />
      <DessertMenu />
      <Partners />
    </div>
  );
}

export default Menu;
