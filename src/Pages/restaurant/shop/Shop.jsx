import React from "react";
import Hero from "../../../components/restaurant/Hero";
import ShopFillter from "./ShopFillter";
import ShopBody from "./ShopBody";

function Shop() {
  return (
    <>
      <div>
        <Hero title="Our Shop" page="Shop" />
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <ShopBody />
          <ShopFillter />
        </div>
      </div>
    </>
  );
}

export default Shop;
