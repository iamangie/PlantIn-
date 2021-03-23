import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <ul className="main-nav">
      <li>
        <Link to="/" className="text-secondary">
          Home
        </Link>
      </li>
    </ul>
  );
};

export default MainNav;
