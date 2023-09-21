import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="w-[150px]">
        <img className="w-full" src={LOGO_URL}></img>
      </div>
      <div className="flex w-1/2 justify-evenly items-center">
        <h3>Online status : {onlineStatus ? "🟢" : "🔴"}</h3>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/about">About Us</Link>
        </h3>
        <h3>
          <Link to="/contact">Contact Us</Link>
        </h3>
        <h3 className="font-bold">
          <Link to="/cart">Cart-({cartItems.length} items)</Link>
        </h3>

        <button
          className="login-btn"
          onClick={() => {
            loginBtn == "login" ? setLoginBtn("logout") : setLoginBtn("login");
          }}
        >
          {loginBtn}
        </button>
      </div>
    </div>
  );
};
export default Header;
