import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowResize";
import { articlesData } from "../../data/articlesData";
import Article from "./Article";
import InfoBlock from "../InfoBlock/InfoBlock";

import { ReactComponent as NewBadge } from "../../assets/images/svg/newBadge.svg";

const ArticleContainer = () => {
  const [width] = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width > 992) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width]);

  const featuredArticle = articlesData
    .filter((article) => {
      return article.featured;
    })
    .map((article) => {
      return <Article key={article.id} article={article} />;
    });

  const topArticle = articlesData
    .filter((article) => {
      return article.top;
    })
    .map((article) => {
      return <Article key={article.id} article={article} />;
    });

  const renderDesktop = () => {
    const interestingArticleFirst = articlesData
      .filter((article) => {
        return article.interesting;
      })
      .slice(0, 6)
      .map((article) => {
        return <Article key={article.id} article={article} />;
      });

    const interestingArticleSecond = articlesData
      .filter((article) => {
        return article.interesting;
      })
      .slice(6, 15)
      .map((article) => {
        return <Article key={article.id} article={article} />;
      });

    return (
      <>
        <section>
          <NewBadge className="article__new-badge" />
          {featuredArticle}
        </section>
        <p className="article__lable"> TOP OF THE DAY </p>
        <section className="article-section">{topArticle}</section>
        <p className="article__lable"> INTERESTING </p>
        <section className="article-section article-section_interesting">
          {interestingArticleFirst}
        </section>
        <InfoBlock />
        <section className="article-section article-section_interesting">
          {interestingArticleSecond}
        </section>
      </>
    );
  };

  const renderMobile = () => {
    const interestingArticleFirst = articlesData
      .filter((article) => {
        return article.interesting;
      })
      .slice(0, 3)
      .map((article) => {
        return <Article key={article.id} article={article} />;
      });

    const interestingArticleSecond = articlesData
      .filter((article) => {
        return article.interesting;
      })
      .slice(4, 7)
      .map((article) => {
        return <Article key={article.id} article={article} />;
      });

    return (
      <>
        <section>
          <NewBadge className="article__new-badge" />
          {featuredArticle}
        </section>
        <p className="article__lable"> TOP OF THE DAY </p>
        <section className="article-section">{topArticle}</section>
        <p className="article__lable"> INTERESTING </p>
        <section className="article-section">{interestingArticleFirst}</section>
        <InfoBlock />
        <section className="article-section">
          {interestingArticleSecond}
        </section>
      </>
    );
  };

  return isMobile ? <div>{renderMobile()}</div> : <div>{renderDesktop()}</div>;
};

export default ArticleContainer;
