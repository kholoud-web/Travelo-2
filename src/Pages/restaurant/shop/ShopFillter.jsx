import { Search } from "lucide-react";
import taste from "../../../assets/img/taste.jpg";
import { Link } from "react-router-dom";
import { Range } from "react-range";
import { useState } from "react";
import LastProduct from "../../../components/restaurant/LastProduct";
const MIN = 0;
const MAX = 8000;

function ShopFillter() {
  const categories = [
    { name: "Sandwiches" },
    { name: "Burger" },
    { name: "Chicken Chup" },
    { name: "Drink" },
    { name: "Pizza" },
    { name: "Thi" },
    { name: "Non Veg" },
    { name: "Uncategorized" },
  ];
  const tags = [
    { name: "Services" },
    { name: "Our Menu" },
    { name: "Pizza" },
    { name: "Cupcake" },
    { name: "Burger" },
    { name: "Cookies" },
    { name: "Our Shop" },
    { name: "Tandoori Chicken" },
  ];

  const [values, setValues] = useState([0, 8000]);
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <>
      <aside className="w-full lg:w-85 space-y-8">
        <div className="bg-white my-4 mx-2.5 border border-[#F2F2F2] rounded-lg py-8 px-6 shadow-sm">
          <div className="mb-6">
            <button className="flex justify-between w-full bg-[#2EC4B6] px-5 py-4 rounded-lg text-white">
              Search Product <Search />
            </button>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#333333] font-bold text-xl mb-6">Category</h3>
            <div className="flex flex-col">
              {categories.map((item) => (
                <div className="flex gap-2.5 mb-4">
                  <input type="checkbox" name={item.name} id={item.name} />
                  <label htmlFor={item.name}>{item.name}</label>
                </div>
              ))}
            </div>
            <div
              className="relative bg-center bg-cover h-71.5 w-67.5 rounded-2xl px-6 py-8 flex flex-col justify-between"
              style={{ backgroundImage: `url(${taste})` }}
            >
              <div className="text-white font-bold">
                <h3 className="text-lg">Perfect Taste</h3>
                <p className="text-xl">Classic Restaurant</p>
                <span className="text-lg text-[#2EC4B6]">45.00$</span>
              </div>
              <Link to="/cities/:cityId/restaurant/shop/details">
                <button className="text-xl text-white font-semibold bg-gray-200/25 hover:bg-gray-200/40 transition-colors duration-500 px-4 py-2 rounded-xl">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mt-6 mb-4">Filter By Price</h3>
              <Range
                step={100}
                min={MIN}
                max={MAX}
                values={values}
                onChange={setValues}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1.5 w-full rounded bg-gray-200"
                    style={{
                      background: `linear-gradient(
                to right,
                #e5e7eb ${(values[0] / MAX) * 100}%,
                #2EC4B6 ${(values[0] / MAX) * 100}%,
                #2EC4B6 ${(values[1] / MAX) * 100}%,
                #e5e7eb ${(values[1] / MAX) * 100}%
              )`,
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="h-4 w-4 bg-[#2EC4B6] rounded-full shadow cursor-pointer"
                  />
                )}
              />
              <p className="mt-4 text-gray-600 text-sm">
                From ${values[0]} to ${values[1]}
              </p>
            </div>
            <div className="flex flex-col mb-6">
              <h2 className="font-bold text-xl text-[#333333] mb-6">
                Latest Products
              </h2>
              <LastProduct name="Pizza" />
              <LastProduct name="Cupchake" />
              <LastProduct name="Cookies" />
              <LastProduct name="Burger" />
            </div>
            <div className="flex flex-col mb-6">
              <h2 className="font-bold text-xl text-[#333333] mb-6">
                Product Tags
              </h2>
              <div className="flex flex-wrap">
                {tags.map((tag) => {
                  const isSelected = selectedTags.includes(tag.name);

                  return (
                    <div key={tag.name} className="mb-4 me-7">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedTags(
                            (prev) =>
                              isSelected
                                ? prev.filter((t) => t !== tag.name) // remove
                                : [...prev, tag.name] // add
                          );
                        }}
                        className={`
            font-normal text-[16px] border-b transition-colors hover:text-[#27A599] cursor-pointer
            ${
              isSelected
                ? "text-[#27A599] border-[#27A599]"
                : "text-[#4F4F4F] border-gray-400/30"
            }
          `}
                      >
                        {tag.name}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default ShopFillter;
