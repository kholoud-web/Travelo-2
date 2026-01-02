import mockHotels from "@/data/mockHotels"
import FeatureHotelCarousel from "./FeatureHotelCarousel"


const FeatureHotel = () => {
  return (
    <section>
      <div className='w-[90%] mx-auto mt-10 p-5'>
        <h2 className='text-2xl md:text-5xl font-bold mb-5 text-[#121316]'>Featured Hotels</h2>
        <FeatureHotelCarousel hotelsData={mockHotels} />
      </div>
    </section>
  )
}

export default FeatureHotel
