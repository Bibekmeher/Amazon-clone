import React, { useContext } from "react";
import NavBar from "./NavBar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import CartContext from "../ContextApi/CartContext";
import HeaderSearchBar from "./SearchBar";
import { ThemeContext } from "../ContextApi/ThemeContext"; // Import ThemeContext
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import "./Header.css";
const Header = () => {
  const { productList } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggle function
  const [address, setAddress] = useState("Select Your Address");
  const [showDropdown, setShowDropdown] = useState(false);

  const addresses = ["New York, USA", "Los Angeles, USA", "London, UK", "Mumbai, India"];

  const handleSelectAddress = (selectedAddress) => {
    setAddress(selectedAddress);
    setShowDropdown(false);
  };

  return (
    <>
      <div >
        <div className={`header-container ${theme}`}>
          <div className="header-logoBar flexBox">
            <div className="logo">
              <Link to={"/"}>
                <img className="image" src="./image/amazonlog.png" alt="" />
              </Link>
            </div>
            <div className="header-addSelector flexBox">
              <div>
                <LocationOnIcon />
              </div>
              <div className="menu-items" style={{ margin: "0", position: "relative" }}>
      <span>Hello</span>
      <p 
        className="bold address-selector" 
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {address} ▼
      </p>

      {showDropdown && (
        <ul className="dropdown">
          {addresses.map((addr, index) => (
            <li key={index} onClick={() => handleSelectAddress(addr)}>
              {addr}
            </li>
          ))}
        </ul>
      )}
    </div>
            </div>
          </div>

          <HeaderSearchBar />
          <div className="header-menuBar flexBox">
            <div className="menu-items flexBox">
              <div className="flag flexBox">
                {/* <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/in.svg" /> */}
                <p className="bold"></p>
              </div>
              <div className="downArrow">
                {/* <ArrowDropDownIcon /> */}
              </div>
            </div>

            <div className="menu-items">
              <span>
                 <span></span>
              </span>
              <p className="bold"></p>
            </div>

            <div className="menu-items">
              <span></span>
              <p className="bold"></p>
            </div>

            <Link to={"/CartPage"}>
              <div className="menu-items flexBox">
                <div className="bold">
                  <AddShoppingCartIcon />
                  <span>{productList.length}</span>
                </div>
                <div>
                  <p>Cart</p>
                </div>
              </div>
            </Link>
            <div className="menu-items toggle-theme" onClick={toggleTheme}>
              {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </div>
          </div>
        </div>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
