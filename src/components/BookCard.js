import "../Assets/Styles/BookCard.css";
import star from "../Assets/Images/star.svg";
import starFill from "../Assets/Images/star-fill.svg";

function BookCard({ source, title, rating }) {
  const rate = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      rate[i] = <img src={starFill} alt={rating}></img>;
    } else {
      rate[i] = <img src={star} alt={rating}></img>;
    }
  }

  return (
    <div class="bookcard_container">
      <img src={source} alt={title} class="image" />
      <div>
        <p>{title}</p>
      </div>

      <div class="rating">{rate}</div>
    </div>
  );
}

export default BookCard;
