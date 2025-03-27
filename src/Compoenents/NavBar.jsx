import { useContext, useState } from "react";
import NavBarItem from "../Details/NavBarItem"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LeftBar from "./LeftBar";
import CartContext from "../ContextApi/CartContext";
import React from "react";
const NavBar = () => {

  const { openButton }  = useContext(CartContext);

  return (
    <>
      <div id="Navbar-container" className="flexBox">
        <div className="leftBarSection">
            <div onClick={() => openButton()}><MenuIcon /></div>
            <div className="bold">All</div>
             <LeftBar/>
        </div>
        <div className="Navbar-menu">
            <ul>
                {
                  NavBarItem.map((item)=>(<li className="Navbar-menu-item" key={item.id}>{item.MenuItem}</li>))
                }
            </ul>
        </div>
        {/* <div className="offer-section flexBox"> */}
            {/* <div>
                <p>CITADEL</p>
            </div>
            <div className="between-Border"></div> */}
            {/* <div class="nav-right-image-amazon-prime">
                <img
                    src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/Watch-Entertainment-for-FREE_400-x39._CB605460886_.jpg" />
            </div>
        </div> */}
      </div>
    </>
  )
}

export default NavBar