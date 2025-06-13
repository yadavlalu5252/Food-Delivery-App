import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  if (!data || !data.title || !data.itemCards) {
    return null; // Optional fallback
  }

  return (
    <div>
      <div
        className="w-6/12 mx-auto my-4 bg-gray-550 shadow-lg p-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
