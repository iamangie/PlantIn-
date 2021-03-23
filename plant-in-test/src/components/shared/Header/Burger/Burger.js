import React from "react";

const Burger = ({ openMenu, handleOpenMenu }) => {
  return (
    <button
      className={openMenu ? "burger burger_open" : "burger"}
      onClick={handleOpenMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Burger;
