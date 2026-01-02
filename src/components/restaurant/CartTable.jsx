import { Minus, Plus, X } from "lucide-react";

function CartTable({ items, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b text-left text-gray-600 text-sm">
              <th className="py-4">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th className="text-center">Remove</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b">
                {/* Product */}
                <td className="py-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <div className="text-yellow-400 text-sm">
                        ★★★★☆
                      </div>
                    </div>
                  </div>
                </td>

                {/* Price */}
                <td className="text-gray-700">${item.price.toFixed(2)}</td>

                {/* Quantity */}
                <td>
                  <div className="flex items-center border rounded-full w-fit px-2">
                    <button
                      onClick={() => onDecrease(item.id)}
                      className="p-1 text-gray-500"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="px-3">{item.qty}</span>

                    <button
                      onClick={() => onIncrease(item.id)}
                      className="p-1 text-gray-500"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </td>

                {/* Total */}
                <td className="font-semibold">
                  ${(item.price * item.qty).toFixed(2)}
                </td>

                {/* Remove */}
                <td className="text-center">
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-gray-500 hover:text-orange-500"
                  >
                    <X />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartTable;
