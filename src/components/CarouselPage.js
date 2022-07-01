import "../Assets/Styles/CarouselPage.css";
import BookCard from "./BookCard";

const CarouselPage = ({ booksToDisplay, noOfbooksToShow = 5 }) => {
  return (
    <div className="CarouselPage_container">
      {booksToDisplay.map((bookData) => {
        return (
          <BookCard
            key={bookData.id}
            source={bookData.thumbnail}
            title={bookData.title}
            rating={3}
          />
        );
      })}
    </div>
  );
};

export default CarouselPage;
