import React from "react";

const Article = ({ article }) => {
  const { img, title, text, date, time, featured } = article;
  return (
    <article className={featured ? "article article_featured" : "article"}>
      <div className="article__block">
        <img src={img} alt="article" />
      </div>
      <div className="article__block">
        <div className="article__time-info">
          <span className="text">{date}</span>
          <span>{" · "}</span>
          <span className="text">{time}</span>
        </div>
        <h2 className="article__title">{title}</h2>
        <p className="text article__text">{text}</p>
      </div>
    </article>
  );
};

export default Article;
