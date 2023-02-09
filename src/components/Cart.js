import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <button className="bg-gray-300" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
