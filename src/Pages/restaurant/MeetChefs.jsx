import React from 'react';

const MeetChefs = () => {
  const chefs = [
    {
      id: 1,
      img: "/assets/images/Food/Rectangle 8863.png", 
      name: "D.Estwood",
      role: "Chief Chef",
    },
    {
      id: 2,
      img: "/assets/images/Food/Chef Card 1.png",
      name: "D.Scoriesh",
      role: "Assistant Chef",
    },
    {
      id: 3,
      img: "/assets/images/Food/Card 3.png",
      name: "M. William",
      role: "Advertising Chef",
    },
    {
      id: 4,
      img: "/assets/images/Food/Rectangle 8863 (1).png",
      name: "W.Readfread",
      role: "Chef",
    },
    
  ];

  return (
    <section className="py-16 px-6 lg:px-24 bg-white">
      
      {/* === العنوان (Header) === */}
      <div className="text-center mb-12">
        <h3 
          style={{ fontFamily: "'Great Vibes', cursive", color: "#27A599" }} 
          className="text-[32px] font-normal leading-tight"
        >
          Chefs
        </h3>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-black mt-2">
          <span className="text-[#27A599]">Me</span>et Our Chef
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {chefs.map((chef) => (
          // الكارت
          <div key={chef.id} className="relative overflow-hidden rounded-[20px] group shadow-lg h-[400px]">
            
            <img 
              src={chef.img} 
              alt={chef.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />

            <div className="absolute bottom-0 left-0 bg-white py-4 px-6 rounded-tr-[20px] shadow-sm w-3/4">
              <h4 className="text-lg font-bold text-black">
                {chef.name}
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                {chef.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="border border-[#27A599] text-[#27A599] px-10 py-3 rounded-full font-medium hover:bg-[#27A599] hover:text-white transition-all duration-300">
          See More
        </button>
      </div>

    </section>
  );
};

export default MeetChefs;