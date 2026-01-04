import { useParams } from "react-router-dom";
import CityQuickActions from "./CityQuickActions";
import CityHero from "./CityHero";
import CityHotelsPreview from "./CityHotelsPreview";
import CityRestaurantsPreview from "./CityRestaurantsPreview";

function CityDetails() {
  const { cityId } = useParams();

  return (
    <>
      <CityHero cityId={cityId} />

      <CityQuickActions cityId={cityId} />

      <CityHotelsPreview cityId={cityId} />
      <CityRestaurantsPreview cityId={cityId} />
    </>
  );
}

export default CityDetails;
