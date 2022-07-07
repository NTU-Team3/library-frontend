import "../Assets/Styles/BookCard.css";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

function BookCard({ source, title, rating, bookID }) {
  const navigate = useNavigate();
  return (
    <div
      className="bookcard_container"
      onClick={() => {
        navigate(`/book/${bookID}`);
      }}
    >
      <img src={source} alt={title} className="image" />
      <div className="title">{title}</div>

      <Rating starsRating={rating} />
    </div>
  );
}

export default BookCard;
