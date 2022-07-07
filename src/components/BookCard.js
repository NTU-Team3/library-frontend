import "../Assets/Styles/BookCard.css";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

function BookCard({ source, title, rating, bookID, globalrating }) {
  const navigate = useNavigate();
  return (
    <div
      className="bookcard_container"
      onClick={() => {
        navigate(`/book/${bookID}`);
      }}
    >
      <div className="BookCard__imageContainer">
        {" "}
        <img src={source} alt={title} className="image" />
      </div>

      <div className="bookCard-title">{title}</div>
      <div className="bookCard-starsRating">
        <Rating starsRating={rating} globalrating={globalrating} />
      </div>
    </div>
  );
}

export default BookCard;
