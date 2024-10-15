//rafc

import React, { useContext, useState } from "react";
import "./navbar.css";
import logo from "../asset/Assets/logo.png";
import cart_icon from "../asset/Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link className="Link" to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr/> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link className="Link" to="/men">
            Men
          </Link>
          {menu === "men" ? <hr/> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link className="Link" to="/women">
            Women
          </Link>
          {menu === "women" ? <hr/> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link className="Link" to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr/> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default NavBar;
