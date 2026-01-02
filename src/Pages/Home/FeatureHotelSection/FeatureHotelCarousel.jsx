
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HotelCard from "./HotelCard";



const FeatureHotelCarousel = ({ hotelsData }) => {

  const settings = {
    // dots: false, 
    infinite: true, 
    speed: 500,
    slidesToScroll: 1, 
   slidesToShow: 3,
   dots: true,
   arrows:true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
         dots: true,
         arrows:true
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          arrows: false, 
          dots: true,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
          arrows: false,
          dots: true,
        }
      }
    ]
  };

  return (
    <div className="w-full mx-auto">
  
      <Slider {...settings}>
        {
      
          hotelsData.map((hotel, index) => (
            <div key={index} className="px-3">
              
           
            <HotelCard hotel={hotel} />
              
             
              
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export default FeatureHotelCarousel;