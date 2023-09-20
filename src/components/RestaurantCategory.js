import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {
  const handleClick = () => {
    setShowIndex()
  };
  return (
    <div className="bg-gray-100 shadow-lg p-2 w-1/2 mx-auto my-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg pb-2 ">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>🔽</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
