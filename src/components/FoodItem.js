import React from "react";

import { IMG_URL } from "../Constants";

export const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-52 p-2 m-2 flex-wrap shadow-md">
      <img src={IMG_URL + cloudinaryImageId} />
      <h3 className="font-medium">{name}</h3>
      <h4 className="font-thin justify-items-stretch">{description}</h4>

     <h4>Rupees : {price/100}</h4>
    </div>
  );
};

export default FoodItem;