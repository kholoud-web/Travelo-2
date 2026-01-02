import { CreditCard } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function CartSummary({ items }) {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subTotal = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.qty, 0),
    [items]
  );

  const shipping = 0;

  const total = subTotal - discount + shipping;

  const applyCoupon = () => {
    // مثال بسيط – عدلها بعدين API
    if (coupon.toLowerCase() === "discount10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ================= Coupon ================= */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">Coupon Code</h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="flex gap-3">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter Here code"
              className="flex-1 border rounded-lg px-4 py-3 focus:outline-none"
            />
            <button
              onClick={applyCoupon}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-lg"
            >
              Apply
            </button>
          </div>
        </div>

        {/* ================= Total Bill ================= */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Total Bill</h2>

          <div className="space-y-4 text-gray-600">
            <div className="flex justify-between">
              <span>Cart Subtotal</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping Charge</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>- ${discount.toFixed(2)}</span>
              </div>
            )}

            <hr />

            <div className="flex justify-between font-semibold text-lg text-black">
              <span>Total Amount</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Link to="/payment/:id">
            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg flex items-center justify-center gap-2">
              Proceed to Checkout <CreditCard size={18}/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
