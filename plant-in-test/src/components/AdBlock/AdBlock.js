import React from "react";

import { ReactComponent as Logo } from "../../assets/images/svg/logo.svg";

const AdBlock = () => {
  return (
    <div className="ad-block">
      <div className="ad-block__container">
        <Logo />
        <h2 className="title-green">
          Get unlimited access to exclusive articles
        </h2>
        <p className="ad-block__subtitle">
          Get rid of limits and read everything you wish
        </p>
        <button className="ad-block__btn">Try For Free</button>
      </div>
    </div>
  );
};

export default AdBlock;
