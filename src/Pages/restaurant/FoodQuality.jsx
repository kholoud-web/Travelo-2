import React from 'react';

const FoodQuality = () => {
  return (
    <section className="py-16 px-6 lg:px-24 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            <span className="text-[#2EC4B6]">We</span> Create the best <br /> foody product
          </h2>
          
          <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit 
            augue urna, vitae feugiat pretium donec id elementum.
          </p>

          <ul className="space-y-4 mb-10 w-full">
            <li className="flex items-center gap-3">
              <span className="text-[#000000] text-xl font-bold">✔</span>
              <span className="text-gray-700">Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#000000] text-xl font-bold">✔</span>
              <span className="text-gray-700">Quisque diam pellentesque bibendum non dui volutpat fringilla</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#000000] text-xl font-bold">✔</span>
              <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </li>
          </ul>

      
          <button className="bg-[#2EC4B6] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#259f8e] transition-all duration-300">
            Read More
          </button>
        </div>

       
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          
         
          <div className="col-span-2">
            <img 
              src="/assets/images/Food/unsplash_fdlZBWIP0aM.png" 
              alt="Food Spread" 
              className="w-full h-64 lg:h-72 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

         
          <div className="col-span-1">
            <img 
              src="/assets/images/Food/unsplash_jpkfc5_d-DI.png" 
              alt="Food Plate 1" 
              className="w-full h-40 lg:h-48 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

       
          <div className="col-span-1">
            <img 
              src="/assets/images/Food/unsplash_mAQZ3X_8_l0.png" 
              alt="Food Plate 2" 
              className="w-full h-40 lg:h-48 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoodQuality;