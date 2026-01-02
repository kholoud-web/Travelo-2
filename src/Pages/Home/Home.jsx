import {Helmet} from "react-helmet";
import FeaturedTours from './FeaturedToursSection/FeaturedTours'
import Hero from './HeroSection/Hero'
import Payment from './PaymentSection/Payment'
import Review from './ReviewSection/Review'
import FlightOver from "./FlightOverSection/FlightOver";
import FeatureHotel from "./FeatureHotelSection/FeatureHotel";
import HowItWork from "./HowItWorkSection/HowItWork";

const Home = () => {
  return (
   <>
   
    <Helmet>
      <title>Travelo-Home Page</title>
    </Helmet>
    <section className='min-h-screen'>
     <Hero/>
     <FeaturedTours/>
     <Payment/>
     <FlightOver/>
     <FeatureHotel/>
     <HowItWork/>
     <Review/>
    </section>
   </>
  )
}

export default Home
