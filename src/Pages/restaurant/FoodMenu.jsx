import React, { useState } from 'react';

const FoodMenu = () => {
  const [activeCategory, setActiveCategory] = useState('Breakfast');

  const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];

  const menuItems = [
    { id: 1, img: "/assets/images/Food/1.png", title: "Lettuce Leaf", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 2, img: "/assets/images/Food/2.png", title: "Glow Cheese", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 3, img: "/assets/images/Food/3.png", title: "Fresh Breakfast", price: "14.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 4, img: "/assets/images/Food/4.png", title: "Italian Pizza", price: "14.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 5, img: "/assets/images/Food/5.png", title: "Mild Butter", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 6, img: "/assets/images/Food/6.png", title: "Slice Beef", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 7, img: "/assets/images/Food/7.png", title: "Fresh Bread", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
    { id: 8, img: "/assets/images/Food/8.png", title: "Mushaom Pizza", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
  ];

  return (
    <section className="py-16 px-6 lg:px-24 bg-white overflow-hidden">
      
      <div className="text-center mb-10">
        <h3 style={{ fontFamily: "'Great Vibes', cursive", color: "#27A599" }} className="text-[32px] leading-10 font-normal">
          Choose & pick
        </h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-black mt-2">
          <span className="text-[#27A599]">Fr</span>om Our Menu
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-12 text-lg lg:text-xl text-gray-600 font-medium">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`transition-colors duration-300 ${
              activeCategory === cat ? "text-[#27A599] font-bold" : "hover:text-[#27A599]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        
      <div className="w-full lg:w-1/3 flex justify-center items-center relative py-10">
            
            <div className="absolute w-[320px] h-80 lg:w-112.5 lg:h-112.5 z-0 pointer-events-none">
                 <img 
                    src="/assets/images/Food/unsplash_INjdgkCwHp0.png" 
                    alt="Decoration Leaves" 
                    className="w-full h-full object-contain scale-110 lg:scale-125 opacity-90"
                 />
            </div>

            {/* 2. صورة الطبق الرئيسي - في الأمام */}
            <div className="relative w-70 h-70 lg:w-95 lg:h-95 z-10">
                <img 
                    src="/assets/images/Food/unsplash_Lv174o7fn7Y.png" 
                    alt="Main Plate" 
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 hover:rotate-6"
                />
            </div>
        </div>

        {/* الجزء الأيمن: قائمة الطعام */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            {menuItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 group cursor-pointer">
                    {/* صورة الطبق الصغير */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                    </div>
                    
                    {/* تفاصيل الطبق */}
                    <div className="flex flex-col">
                        <h4 className="text-xl font-bold text-black group-hover:text-[#27A599] transition-colors">
                            {item.title}
                        </h4>
                        <p className="text-gray-500 text-sm leading-tight my-1">
                            {item.desc}
                        </p>
                        <span className="text-[#27A599] font-bold text-lg">
                            {item.price}
                        </span>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default FoodMenu;