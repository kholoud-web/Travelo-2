import React from "react";
import Hero from "../../../components/restaurant/Hero";
import ShopFillter from "./ShopFillter";
import ShopBody from "./ShopBody";
import { useParams } from "react-router-dom";

function Shop() {
  const { cityId } = useParams();
  return (
    <>
      <div>
        <Hero title="Our Shop" page="Shop" cityId={cityId} />
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <ShopBody />
          <ShopFillter  cityId={cityId}/>
        </div>
      </div>
    </>
  );
}

export default Shop;
