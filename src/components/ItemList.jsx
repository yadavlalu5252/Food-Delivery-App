import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";


const ItemList = ({items,dummy}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItems(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2  border-gray-400 border-b-4 text-left flex justify-between items-center">
                    
                    <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {Math.floor(item.card.info.price/100)}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="p-1 mx-4 my-12 rounded-lg bg-black text-white hover:bg-green-600"
                    onClick={()=>handleAddItem(item)}>Add+</button>
                    </div>
                    <img src={CDN_URL+ item.card.info.imageId} className="w-full"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;