import React from "react";
import MainNav from "../MainNav/MainNav";
import SearchBlock from "../SearchBlock/SeachBlock";

import ArticleContainer from "../Article/ArticleContainer";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <MainNav />
        <SearchBlock />
        <ArticleContainer />
      </div>
    </main>
  );
};

export default Main;
