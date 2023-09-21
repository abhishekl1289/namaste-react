import { HOTEL_URL } from "../utils/constants";
const Card = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, locality, cuisines, avgRating, areaName } =
    resData?.info;
  return (
    <div className="w-[250px] bg-gray-100 p-4 m-2 rounded-md hover:bg-gray-200">
      <img
        className="food-pic rounded-lg h-[200px] w-full object-cover"
        src={HOTEL_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{locality || areaName}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4 className="delivery-time">{resData.info.sla.slaString}</h4>
    </div>
  );
};
export const withVegLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-300 text-black rounded-md p-2 mt-4 ml-6">
          Veg
        </label>
        <Card {...props} />
      </div>
    );
  };
};
export default Card;
