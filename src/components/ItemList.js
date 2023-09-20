import { useDispatch } from "react-redux";
import { HOTEL_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-200 p-2 flex justify-between mb-2"
        >
          <div className="w-9/12">
            <div className="flex flex-col text-left">
              <span className="font-semibold">{item?.card?.info?.name}</span>
              <span className="">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-left py-2">
              {item.card.info.description}
            </p>
          </div>

          {item.card.info.imageId ? (
            <div className="relative">
              <img
                src={HOTEL_URL + item.card.info.imageId}
                className="w-[100px] h-[100px] rounded-md object-cover"
              ></img>{" "}
              <button
                className="bg-white text-green-600 px-2 py-1 rounded-md absolute bottom-0 right-6"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
          ) : (
            <div className="relative">
              <button
                className="bg-white text-green-600 px-2 py-1 rounded-md absolute bottom-5 right-6"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default ItemList;
