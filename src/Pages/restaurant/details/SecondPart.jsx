import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import d6 from "../../../assets/img/details/d6.jpg";

const products = [
  { id: 1, title: "Fresh Lime", price: 38, oldPrice: 45, img: d6 },
  { id: 2, title: "Chocolate Muffin", price: 38, oldPrice: 45, img: d6 },
  { id: 3, title: "Burger", price: 38, oldPrice: 45, img: d6 },
  { id: 4, title: "Fresh Lime", price: 38, oldPrice: 45, img: d6 },
];

function SecondPart() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mx-auto px-4 py-14">
      {/* ================= Tabs ================= */}
      <div className="flex gap-6 border-b mb-8">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-3 px-4 text-sm font-medium border-b-2
            ${
              activeTab === "description"
                ? "border-orange-400 text-black"
                : "border-transparent text-gray-500"
            }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-3 px-4 text-sm font-medium border-b-2
            ${
              activeTab === "reviews"
                ? "border-orange-400 text-black"
                : "border-transparent text-gray-500"
            }`}
        >
          Reviews (24)
        </button>
      </div>

      {/* ================= Tab Content ================= */}
      {activeTab === "description" && (
        <div className="text-gray-600 leading-relaxed space-y-6">
          <p>
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
            purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
            sagittis.
          </p>

          <p>
            Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
            blandit justo urna, id porttitor est dignissim nec.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-black mb-3">
              Key Benefits
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
              <li>Vestibulum sed massa vel ipsum imperdiet malesuada.</li>
              <li>Etiam nec massa et lectus faucibus ornare.</li>
              <li>Mauris eget diam magna, in blandit turpis.</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="text-gray-500">
          Reviews content goes here...
        </div>
      )}

      {/* ================= Similar Products ================= */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Similar Products</h2>

          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
              <ArrowLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="group">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition"
                />
              </div>

              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm">
                <span className="text-teal-500 font-medium">
                  ${item.price.toFixed(2)}
                </span>
                <span className="line-through text-gray-400 ml-2">
                  ${item.oldPrice.toFixed(2)}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecondPart;
