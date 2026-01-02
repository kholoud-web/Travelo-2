import { useState } from "react";
import Hero from "../../../components/restaurant/Hero";

import d1 from "../../../assets/img/details/d1.jpg";
import d2 from "../../../assets/img/details/d2.jpg";
import d3 from "../../../assets/img/details/d3.jpg";
import d4 from "../../../assets/img/details/d4.jpg";
import d5 from "../../../assets/img/details/d5.jpg";
import CartTable from './../../../components/restaurant/CartTable';
import CartSummary from "../../../components/restaurant/CartSummary";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Burger", price: 35, qty: 1, img: d1 },
    { id: 2, title: "Fresh Lime", price: 25, qty: 1, img: d2 },
    { id: 3, title: "Pizza", price: 15, qty: 1, img: d3 },
    { id: 4, title: "Chocolate Muffin", price: 45, qty: 1, img: d4 },
    { id: 5, title: "Cheese Butter", price: 15, qty: 1, img: d5 },
  ]);

  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <>
      <Hero title="Shopping Cart" page="Shop details" />

      <CartTable
        items={cartItems}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
        onRemove={removeItem}
      />
      <CartSummary items={cartItems}/>
    </>
  );
}

export default Cart;
