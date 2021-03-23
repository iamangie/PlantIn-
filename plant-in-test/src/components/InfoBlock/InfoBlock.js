import React from "react";

import { ReactComponent as Logo } from "../../assets/images/svg/logo.svg";

const InfoBlock = () => {
  return (
    <div className="info-block">
      <div className="info-block__container">
        <Logo />
        <h2 className="title-green">
          Get unlimited access to exclusive articles
        </h2>
        <p className="info-block__subtitle">
          Get rid of limits and read everything you wish
        </p>
        <button className="info-block__btn">Try For Free</button>
      </div>
    </div>
  );
};

export default InfoBlock;
