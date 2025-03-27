import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LeftMenuBox, LeftMenuBox2 } from "./LeftMenuBox";
import { useContext } from "react";
import { LeftBarItem, shopByCategory, ProgramsFeatures, Trending } from "../Details/LeftBarItem";
import CartContext from "../ContextApi/CartContext";
import React from "react";
const LeftBar = () => {
  const { open, closeButton } = useContext(CartContext);

  return (
    <>
      <div className={`leftBar-section ${open ? "active" : ""}`}>
        <div className={`leftBar-container ${open ? "leftBar-active" : ""}`}>
          {/* Sidebar Header */}
          <div className="leftBar-header top-bottom-padding flexBox">
            <div className="avtar-section">
              <AccountCircleIcon />
            </div>
            <div>
              <span>Hello, sign In</span>
            </div>
          </div>

          {/* Sidebar Content with Scroll */}
          <div className="leftBar-information">
            <LeftMenuBox2 title="Trending" listDetail={Trending} />
            <LeftMenuBox title="Digital Content And Devices" listDetail={LeftBarItem} />
            <LeftMenuBox title="Shop By Category" listDetail={shopByCategory} />
            <LeftMenuBox title="Programs & Features" listDetail={ProgramsFeatures} />
          </div>

          {/* Close Button */}
          <button className="leftbar-close-btn" onClick={() => closeButton()}>
            <CloseIcon className="leftBar-closeIcon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
