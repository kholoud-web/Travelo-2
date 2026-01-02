import { Heart, ShoppingBag, Shuffle } from "lucide-react";

function MenuItems({ img, title, price, sell, oldPrice }) {
  return (
    <div
      className="group relative bg-white border border-transparent
                    hover:border-[#8B5CF6] transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-[270px] w-[340px] object-cover"
        />

        {sell && (
          <span
            className="absolute top-4 left-4 bg-[#00C2FF]
                           text-white text-sm px-3 py-1 rounded-md"
          >
            Sell
          </span>
        )}

        <div
          className="absolute inset-0 flex items-center justify-center gap-3
                     bg-black/20 opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
        >
          <button
            className="w-10 h-10 bg-white flex items-center
                             justify-center rounded-md hover:bg-[#00C2FF]
                             hover:text-white transition"
          >
            <Shuffle size={18} />
          </button>

          <button
            className="w-10 h-10 bg-white flex items-center
                             justify-center rounded-md hover:bg-[#00C2FF]
                             hover:text-white transition"
          >
            <ShoppingBag size={18} />
          </button>

          <button
            className="w-10 h-10 bg-white flex items-center
                             justify-center rounded-md hover:bg-[#00C2FF]
                             hover:text-white transition"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-[#333333] mb-1">{title}</h3>

        <div className="flex items-center gap-3">
          <span className="text-[#00C2FF] font-semibold">${price}</span>

          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
