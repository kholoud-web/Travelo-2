import React from 'react';

const FoodStats = () => {
  const stats = [
    {
      id: 1,
      icon: "/assets/images/Food/Group.png", 
      label: "Professional Chefs",
      count: "420",
    },
    {
      id: 2,
      icon: "/assets/images/Food/Group (1).png", 
      label: "Items Of Food",
      count: "320",
    },
    {
      id: 3,
      icon: "/assets/images/Food/Group (2).png", 
      label: "Years Of Experienced",
      count: "30+",
    },
    {
      id: 4,
      icon: "/assets/images/Food/Group (3).png", 
      label: "Happy Customers",
      count: "220",
    },
  ];

  return (
    <section className="relative w-full h-117 bg-cover bg-center bg-fixed flex items-center" 
      style={{ 
        
        backgroundImage: "url('/assets/images/Food/Group 1000002107.png')" 
      }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {stats.map((item) => (
            <div key={item.id} className="flex flex-col items-center group">
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={item.icon} 
                  alt={item.label} 
                  className="w-16 h-16 object-contain filter drop-shadow-lg" 
                />
              </div>

              <h3 className="text-white text-lg font-semibold mb-2 font-sans tracking-wide">
                {item.label}
              </h3>

              <p className="text-white text-4xl lg:text-5xl font-bold">
                {item.count}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FoodStats;