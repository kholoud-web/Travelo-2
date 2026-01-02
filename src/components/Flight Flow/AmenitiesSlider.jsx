import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const amenitySliderSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 5 } },
    { breakpoint: 768, settings: { slidesToShow: 4 } },
    { breakpoint: 480, settings: { slidesToShow: 3 } },
  ],
};

export default function AmenitiesSlider({ amenities }) {
  return (
    <Slider {...amenitySliderSettings}>
      {amenities.map((amenity) => (
        <div key={amenity.id} className="px-2">
          <div className="aspect-square bg-gray-100 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer">
            <div className="text-3xl mb-2">{amenity.icon}</div>
            <span className="text-xs text-gray-600 text-center">
              {amenity.name}
            </span>
          </div>
        </div>
      ))}
    </Slider>
  );
}
