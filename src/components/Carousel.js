import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselPage from "./CarouselPage";

import "../Assets/Styles/Carousel.css";

function GalleryContainer({ booksToDisplay = 5, data }) {
  return (
    <div className="Carousel_container">
      <Carousel
        interval={null}
        nextIcon={<span className="slider">{">"}</span>}
        prevIcon={<span className="slider">{"<"}</span>}
      >
        <Carousel.Item>
          <CarouselPage booksToDisplay={data.slice(0, booksToDisplay)} />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselPage
            booksToDisplay={data.slice(
              booksToDisplay,
              booksToDisplay + booksToDisplay
            )}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default GalleryContainer;
