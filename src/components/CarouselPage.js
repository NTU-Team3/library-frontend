import "../Assets/Styles/CarouselPage.css";
import BookCard from "./BookCard";

const CarouselPage = ({ booksToDisplay, noOfbooksToShow = 5 }) => {
  return (
    <div className="CarouselPage_container">
      {booksToDisplay.map((bookData) => {
        return (
          <BookCard
            key={bookData._id}
            source={bookData.thumbnail}
            title={bookData.title}
            rating={bookData.rating}
          />
        );
      })}
    </div>
  );
};

export default CarouselPage;
