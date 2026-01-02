import React from 'react'
import Hero from './../../../components/restaurant/Hero';
import MainDetails from './MainDetails';
import SecondPart from './SecondPart';

function ShopDetails() {
  return (
    <>
    <div className="">
      <Hero title="Shop Details" page="Shop details" />
      <MainDetails/>
      <SecondPart/>
    </div>
    </>
  )
}

export default ShopDetails
