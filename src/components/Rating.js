import React from "react";
import star from "../Assets/Images/star.svg";
import starFill from "../Assets/Images/star-fill.svg";
import "../Assets/Styles/Rating.css";

export default function Rating({ starsRating }) {
  const rate = [];
  for (let i = 0; i < 5; i++) {
    if (i < starsRating) {
      rate[i] = <img class="star" src={starFill} alt={starsRating}></img>;
    } else {
      rate[i] = <img class="star" src={star} alt={starsRating}></img>;
    }
  }
  return <div class="rating">{rate}</div>;
}
