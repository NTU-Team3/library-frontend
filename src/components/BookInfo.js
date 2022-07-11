import React from "react";
import "../Assets/Styles/BookInfo.css";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

export default function BookInfo({
  thumbnail,
  title,
  rating = 4,
  desc,
  type,
  author,
  func,
  bookID,
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`BookInfo__container ${type === "cart" ? "borderBottom" : ""}`}
    >
      <div
        className="item-thumbnail"
        onClick={() => {
          navigate(`/book/${bookID}`);
        }}
      >
        <img className="thumbnail" alt={title} src={thumbnail} />
      </div>

      <div className="item-title">{title}</div>
      <div className="item-rating">
        {type === "cart" ? author : <Rating starsRating={rating} />}
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
