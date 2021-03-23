import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";
import NavButtons from "./NavButtons/NavButtons";

import { ReactComponent as Logo } from "../../../assets/images/svg/logo.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <NavMenu openMenu={openMenu} />
      <NavButtons openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
    </header>
  );
};

export default Header;
