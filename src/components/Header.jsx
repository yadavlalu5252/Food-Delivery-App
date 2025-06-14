import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Header rendered");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // useEffect(()=> {
  //   console.log("use Effect called");
  // },[btnNameReact])
  /* If btnName is const then how it changes to Logout ?
    on every render if any change in btnName of useState then it,
    create a new instance of that */

  // selector this useSelector is used to access the redux store state
  // we are subscribing to the store using useSelector.
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg p-4 m-2 rounded-lg">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex align-center items-center">
        <ul className="flex align-center px-5 space-x-4 font-bold text-lg jus">
          <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
