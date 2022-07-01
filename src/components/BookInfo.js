import React from "react";
import "../Assets/Styles/BookInfo.css";
import Rating from "./Rating";

export default function BookInfo({
  thumbnail,
  title,
  rating = 4,
  desc,
  type,
  author,
  func,
}) {
  return (
    <div
      className={`BookInfo__container ${type === "cart" ? "borderBottom" : ""}`}
    >
      <div className="item-thumbnail">
        <img className="thumbnail" alt={title} src={thumbnail} />
      </div>

      <div className="item-title">
        <div>{title} </div>
      </div>
      <div className="item-rating">
        <div>{type === "cart" ? author : <Rating starsRating={rating} />}</div>
      </div>
      <div className="item-desc">{type === "cart" ? "" : desc}</div>
      <button
        className={type === "cart" ? "item-button" : "none"}
        onClick={func}
      >
        -
      </button>
    </div>
  );
}
