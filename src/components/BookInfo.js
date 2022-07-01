import React from "react";
import "../Assets/Styles/BookInfo.css";
import Rating from "./Rating";

export default function BookInfo({ thumbnail, title, rating = 4, desc }) {
  return (
    <div className="BookInfo__container">
      <div className="item-thumbnail">
        <img className="thumbnail" alt={title} src={thumbnail} />
      </div>

      <div className="item-title">
        <div>{title} </div>
      </div>
      <div className="item-rating">
        <div>
          <Rating starsRating={rating} />
        </div>
      </div>
      <div className="item-desc">{desc}</div>
    </div>
  );
}
