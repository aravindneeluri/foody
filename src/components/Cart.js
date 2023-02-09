import React from "react";
import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
  