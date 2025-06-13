import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

/*     const store = useSelector((store) => store);
    cosnst cartIems = store.cart.items */
    // both the store subscription is right but we need to subscribe those slice only which are required that will optimises the store

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1>Cart is empty Add items to cart!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;