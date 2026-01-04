import React from "react";
import { Link } from "react-router-dom";

const ChooseFood = () => {
  const foodItems = [
    {
      id: 1,
      img: "/assets/images/Food/unsplash_-lHZUkiWM74.png", // صورة الرول
      title: "Fast Food Dish",
      offer: "Save 30%",
      isFeatured: true, // هذا العنصر مميز (يظهر عليه التصميم الخاص)
    },
    {
      id: 2,
      img: "/assets/images/Food/unsplash_dphM2U1xq0U.png", // صورة البرجر
      title: "Burger",
      isFeatured: false,
    },
    {
      id: 3,
      img: "/assets/images/Food/unsplash_MRHyv-hHxgk.png", // صورة السلطة/الوعاء
      title: "Healthy Bowl",
      isFeatured: false,
    },
    {
      id: 4,
      img: "/assets/images/Food/unsplash_q54Oxq44MZs.png", // صورة البيتزا
      title: "Pizza",
      isFeatured: false,
    },
  ];

  return (
    <>
      <section className="py-16 px-6 lg:px-24 bg-white">
        <div className="text-center mb-12">
          <h4 className="text-[#2ebfab] font-serif italic text-xl mb-2">
            Favorite Menu
          </h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            <span className="text-[#2ebfab]">Choose</span> Food Item
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer h-80"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {item.isFeatured && (
                <div className="absolute inset-0 flex flex-col justify-end items-center pb-8">
                  <div className="bg-white text-black font-bold px-6 py-2 rounded-full mb-3 shadow-md transform translate-y-2">
                    {item.offer}
                  </div>

                  <div className="bg-[#2ebfab] text-white font-bold px-8 py-3 rounded-full shadow-md text-lg">
                    <Link to="/restaurant/shop">{item.title}</Link>
                  </div>
                </div>
              )}

              {!item.isFeatured && (
                <div className="flex flex-col justify-center items-center absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-6">
                  <span className="text-white font-bold text-xl">
                    {item.title}
                  </span>
                  <Link
                    to="/restaurant/shop"
                    className="bg-[#2ebfab] text-white font-semibold px-4 py-2 mt-3 rounded-full shadow-md text-lg cursor-pointer"
                  >
                    <button className="cursor-pointer">Shop Now</button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
        <section className="py-16 px-6 lg:px-24 bg-white overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-lg h-64 lg:h-auto">
                  <img
                    src="/assets/images/Food/unsplash_lP5MCM6nZ5A.png"
                    alt="Salmon"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="col-span-2 lg:col-span-1 relative overflow-hidden shadow-lg w-full lg:w-70.25 h-57.75 rounded-md border border-gray-200 lg:mt-16">
                  <img
                    src="/assets/images/Food/unsplash_dphM2U1xq0U (1).png"
                    alt="Burger"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="col-span-2 flex flex-col lg:flex-row gap-4 mt-8 h-auto lg:h-76.5">
                  <div className="relative overflow-hidden shadow-md w-full lg:w-51 h-76.5 rounded-md border border-gray-200 shrink-0">
                    <img
                      src="/assets/images/Food/unsplash_CLMpC9UhyTo.png"
                      alt="Salad"
                      className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 flex gap-4 h-76.5 lg:h-full">
                    <div className="relative overflow-hidden shadow-md w-full lg:w-55.25 h-56.5 rounded-md border border-gray-200 shrink-0">
                      <img
                        src="/assets/images/Food/unsplash_-GFCYhoRe48.png"
                        alt="Pancakes Honey"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1 flex flex-col gap-4 h-full">
                      <div className="flex-1 rounded-2xl overflow-hidden shadow-md w-full h-1/2">
                        <img
                          src="/assets/images/Food/unsplash_tzl1UCXg5Es.png"
                          alt="French Toast"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="flex-1 rounded-2xl overflow-hidden shadow-md w-full h-1/2">
                        <img
                          src="/assets/images/Food/unsplash_mmnKI8kMxpc.png"
                          alt="BBQ"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                <span className="text-[#2ebfab]">Ex</span>tra ordinary taste{" "}
                <br /> And Experienced
              </h2>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </p>

              <div className="flex gap-6 py-4">
                <div className="w-16 h-16 bg-[#2ebfab] rounded-lg flex items-center justify-center text-white text-3xl shadow-lg hover:bg-[#259f8e] transition-colors">
                  <i className="fas fa-hamburger"></i>
                  <img src="/assets/images/Food/Hamburger.png" />
                </div>
                <div className="w-16 h-16 bg-[#2ebfab] rounded-lg flex items-center justify-center text-white text-3xl shadow-lg hover:bg-[#259f8e] transition-colors">
                  <img src="/assets/images/Food/Vector.png" />
                </div>
                <div className="w-16 h-16 bg-[#2ebfab] rounded-lg flex items-center justify-center text-white text-3xl shadow-lg hover:bg-[#259f8e] transition-colors">
                  <img src="/assets/images/Food/Vector (1).png" />
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 border-l-4 border-[#2ebfab] pl-4">
                <span className="text-[#2ebfab] text-5xl font-bold">30+</span>
                <div className="flex flex-col">
                  <span className="text-black font-semibold text-lg">
                    Years of
                  </span>
                  <span className="text-black font-bold text-xl">
                    Experienced
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ChooseFood;
