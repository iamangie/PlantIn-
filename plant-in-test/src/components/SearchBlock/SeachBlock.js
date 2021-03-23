import React from "react";

const SearchBlock = () => {
  return (
    <div className="search-block">
      <div className="search-block__container">
        <h2 className="title-green">Stay always tuned with planting trends</h2>
        <p className="search-block__subtitle">
          <span>Tips&Tricks</span> selected specially fro <span>you!</span>
        </p>
        <input
          type="text"
          placeholder="Seach"
          className="search-block__input"
        />
      </div>
    </div>
  );
};

export default SearchBlock;
