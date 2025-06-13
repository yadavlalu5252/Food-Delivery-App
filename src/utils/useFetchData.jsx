import { useEffect } from "react";

const useFetchData = (setListOfRestaurants, setFilteredRestaurants) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.209300012956007&lng=72.94875673949718&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    console.log(restaurants);

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };
  return fetchData;
};

export default useFetchData;
