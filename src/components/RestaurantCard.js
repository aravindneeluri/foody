import React from "react";

import { IMG_URL } from "../Constants";

export const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-52 p-2 m-2 flex-wrap shadow-md">
      <img src={IMG_URL + cloudinaryImageId} />
      <h3 className="font-medium">{name}</h3>
      <h4 className="font-thin justify-items-stretch">
        {cuisines.join(" , ")}
      </h4>

      <span className="justify-between">
        {avgRating}⭐ - {lastMileTravelString}{" "}
      </span>
    </div>
  );
};
