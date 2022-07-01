import "../Assets/Styles/BookCard.css";
import Rating from "./Rating";

function BookCard({ source, title, rating }) {
  return (
    <div className="bookcard_container">
      <img src={source} alt={title} className="image" />
      <div className="title">{title}</div>

      <Rating starsRating={rating} />
    </div>
  );
}

export default BookCard;
