import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img
      className="w-16"
      alt="logo"
      src="https://ideally-global.com/wp-content/uploads/2021/06/Img_IdeallyGlobal_Foody_Free_logo_feher.png"
    />
  </a>
);

const Header = () => {
  const [isOnline, setIsOnline] = useState(true);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex  justify-between bg-gray-200 shadow-lg m-1">
      <Title />
      <div className="flex-wrap justify-between align-text-bottom m-2">
        <ul className="flex">
          <li className="p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2">
            <Link to="About">About</Link>
          </li>
          <li className="p-2">
            <Link to="contact">Contact</Link>
          </li>
          <li className="p-2">
            <Link to="Cart"> 🛒- {cartItems.length} items </Link>
          </li>
          <li className="p-2">
            <Link to="instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {isOnline ? (
        <button onClick={() => setIsOnline(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsOnline(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
