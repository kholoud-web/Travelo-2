import { useParams } from "react-router-dom";
import Hero from './../../../components/restaurant/Hero';
import MainDetails from './MainDetails';
import SecondPart from './SecondPart';

function ShopDetails() {
  const { cityId } = useParams();
  return (
    <>
    <div className="">
      <Hero title="Shop Details" page="Shop details" cityId={cityId} />
      <MainDetails/>
      <SecondPart/>
    </div>
    </>
  )
}

export default ShopDetails
