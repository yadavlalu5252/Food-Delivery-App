import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } = resData?.info;

  return (
    <div className="m-4 p-4 w-64 bg-pink-300 shadow-lg rounded-lg hover:shadow-xl hover:bg-pink-200">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name font-bold py-2">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>Rating {avgRating} Stars</p>
      <p>{costForTwo}</p>
      <p>Delivered In {sla.deliveryTime} Minutes</p>
    </div>
  );
};

// Higher order component (HOC) to add additional functionality to the RestaurantCard component
// input - RestaurantCard => RestaurantCardWithPromotedLabel

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
