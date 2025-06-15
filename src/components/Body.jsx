import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("body render", listOfRestaurants);
  useFetchData(setListOfRestaurants, setFilteredRestaurants);
  // if (!fetchData) return <h1>Loading...</h1>;

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks Like you're offline! Please check your internet connection</h1>
    );

    const {loggedInUser,setUsername} = useContext(UserContext);


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-2 p-4 flex">
          <input
            type="text"
            data-testid="searchInput"
            className="border-solid border-2 border-black square"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-4 bg-gray-300 px-2.5 rounded-lg text-black-500"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn mx-2 bg-gray-300 px-2.5 rounded-lg text-black-500"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="mx-2 bg-gray-400 text-black rounded-md">
          <label>UserName </label>
          <input className="border border-black p-0"
          value={loggedInUser} 
          onChange={(e) => setUsername(e.target.value)}/>

        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center items-start gap-4">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (<RestaurantCardPromoted resData={restaurant} /> ): (<RestaurantCard resData={restaurant} />)}
            {/* <RestaurantCard resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
