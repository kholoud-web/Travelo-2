import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

import FeaturedCards from "./FeaturedCards";
import FiltersBar from "./FiltersBar";
import { useEffect, useState } from "react";
import axiosClient from "./../../../../axiosClient";
import { LoaderCircleIcon } from "lucide-react";
import SkeletonCard from "../../../components/common/SkeletonCard";

const FeaturedTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await axiosClient.get("/api/tours");

        // console.log(response.data);
        setTours(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto my-8">
        <div>
          <h2 className="text-2xl lg:text-5xl font-bold main-font">
            {" "}
            Our Featured Tours
          </h2>
          <p className="my-5 md:my-10 text-gray-500  md:text-[20px]">
            Discover our top-rated destinations, handpicked based on customer
            reviews.
          </p>
        </div>

        <div>
          <FiltersBar />
        </div>
      </div>

      {loading ? (
        <p className="px-10 flex gap-5">
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
        </p>
      ) : (
        <div className="px-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
            navigation={{ enabled: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
          >
            {tours.map((tour) => (
              <SwiperSlide key={tour.id}>
                <FeaturedCards
                  id={tour.id}
                  title={tour.title}
                  Imgsrc={tour.imageUrl}
                  basePrice={tour.basePrice}
                  durationInDays={tour.durationInDays}
                  destinations={tour.destinations}
                  difficultyLevel="Family"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default FeaturedTours;
