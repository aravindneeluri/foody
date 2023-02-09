import React from "react";
import { Link, useParams } from "react-router-dom";
import { IMG_URL } from "../Constants";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex m-3 ">
      <div>
        <h1 className="font-bold">{restaurant?.name}</h1>
        <h2>Restaurant id: {resId}</h2>
        <img className="w-56" src={IMG_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.totalRatings} ratings</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
        <h3>{restaurant?.locality}</h3>
      </div>
      <div>
        <h1 className="font-semibold justify-center px-5" > Menu</h1>
        <h4>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id} className="flex p-3 m-2">
              {item.name} - Rs.{item.price / 100} -{" "}
              <Link>
                <img className="w-14" src={IMG_URL + item.cloudinaryImageId} />{" "}
              </Link>{" "}
              -{" "}
              <button
                className="bg-gray-200 shadow-md p-2 m-2 text-xs"
                onClick={() => addFoodItem(item)}
              >
                add
              </button>
            </li>
          ))}
        </h4>
      </div>  
    </div>
  );
};

export default RestaurantMenu;
