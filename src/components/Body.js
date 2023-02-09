import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { restaurantList } from "../constants";
import { RestaurantCard } from "./restaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.507375008722985&lng=78.33546929061413&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-gray-200 shadow-lg m-1">
        <input
          type="text"
          className="p-1 bg-yellow-100 m-1 shadow-md justify-center rounded-md "
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-1 bg-gray-400 m-0.5 shadow-2xl justify-center text-black rounded-xl"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap p-4 m-2 ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );  
};

export default Body;
