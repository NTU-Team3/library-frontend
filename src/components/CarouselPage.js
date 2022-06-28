import "../Assets/Styles/CarouselPage.css";
import BookCard from "./BookCard";

const CarouselPage = ({ booksToDisplay, noOfbooksToShow = 5 }) => {
  return (
    <div class="CarouselPage_container">
      {booksToDisplay.map((bookData) => {
        return (
          <BookCard
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
