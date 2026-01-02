import React from 'react';
import Herosec from "./Herosec.jsx";
import FoodQuality from "./FoodQuality.jsx";
import ChooseFood from "./ChooseFood.jsx";
import FoodStats from "./FoodStats.jsx";
import FoodMenu from "./FoodMenu.jsx";
import MeetChefs from "./MeetChefs.jsx";
import FoodBean from "./FoodBean.jsx";
import LatestBlog from "./LatestBlog.jsx";
import { Outlet } from 'react-router-dom';




const Restaurant = () => {
  return (
  <> 
  <Herosec/>
  <FoodQuality/>
  <ChooseFood/>
  <FoodStats/>
  <FoodMenu/>
  <MeetChefs/>
  <FoodBean/>
  <LatestBlog/>
  </>
  
  )
}

export default Restaurant