import { useState } from "react";
import { Wifi, Car, Snowflake, Tv, Coffee, Waves, Dumbbell, ShieldCheck, Briefcase, Wind } from "lucide-react";


const AmenitiesSection = () => {
    
    const [showAllAmenities, setShowAllAmenities] = useState(false);

    const amenities = [
          { icon: <Wifi size={18} />, label: "Free WiFi" },
          { icon: <Car size={18} />, label: "Free parking" },
          { icon: <Snowflake size={18} />, label: "Air conditioning" },
          { icon: <Tv size={18} />, label: "Flat-screen TV" },
          { icon: <Coffee size={18} />, label: "Coffee machine" },
          { icon: <Waves size={18} />, label: "Outdoor swimming pool" },
          { icon: <Dumbbell size={18} />, label: "Fitness center" },
          { icon: <ShieldCheck size={18} />, label: "24-hour security" },
          { icon: <Briefcase size={18} />, label: "Business facilities" },
          { icon: <Wind size={18} />, label: "Balcony with sea view" },
        ];

    return (
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4" id="amenities">
          Amenities
        </h2>

        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          {(showAllAmenities ? amenities : amenities.slice(0, 6)).map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm text-gray-700"
              >
                <span className="text-teal-600">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            )
          )}
        </div>

        <button
          onClick={() => setShowAllAmenities(!showAllAmenities)}
          className="mt-4 text-teal-600 text-sm font-medium hover:underline"
        >
          {showAllAmenities ? "Show less" : "Show all 10 amenities"}
        </button>
      </div>
    );
};
export default AmenitiesSection;