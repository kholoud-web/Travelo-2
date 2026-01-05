
import Herosec from "./Herosec.jsx";
import FoodQuality from "./FoodQuality.jsx";
import ChooseFood from "./ChooseFood.jsx";
import FoodStats from "./FoodStats.jsx";
import FoodMenu from "./FoodMenu.jsx";
import MeetChefs from "./MeetChefs.jsx";
import FoodBean from "./FoodBean.jsx";
import LatestBlog from "./LatestBlog.jsx";
import { useParams } from "react-router-dom";




const Restaurant = () => {
  const {cityId} = useParams();
  
  return (
  <>
  <Herosec cityId={cityId}/>
  <FoodQuality/>
  <ChooseFood cityId={cityId}/>
  <FoodStats/>
  <FoodMenu/>
  <MeetChefs/>
  <FoodBean/>
  <LatestBlog cityId={cityId}/>
  </>
  
  )
}

export default Restaurant