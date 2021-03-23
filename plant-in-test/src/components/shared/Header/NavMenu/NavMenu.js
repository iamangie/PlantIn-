import React from "react";
import { Link } from "react-router-dom";

const NavMenu = ({ openMenu }) => {
  return (
    <nav className={openMenu ? "nav nav_active" : "nav"}>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-menu__link">
            {" "}
            Discover{" "}
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-menu__link">
            My Plants
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-menu__link">
            Deseases
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-menu__link">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-menu__link">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-menu__link">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
