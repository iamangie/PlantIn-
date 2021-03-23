import React from "react";
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";

import { ReactComponent as AccountLogo } from "../../../../assets/images/svg/accountLogo.svg";

const NavButtons = ({ openMenu, handleOpenMenu }) => {
  return (
    <div className="nav-btns">
      <div className="search-btn-container">
        <input type="text" placeholder="Search..." />
        <div className="search"></div>
      </div>
      <div className="account-btn">
        <Link to="/">
          <AccountLogo />
        </Link>
      </div>
      <Burger openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
    </div>
  );
};

export default NavButtons;
