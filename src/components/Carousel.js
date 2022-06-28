import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselPage from "./CarouselPage";
import fakeData from "../fakeData";
import "../Assets/Styles/Carousel.css";
function GalleryContainer() {
  const [booksToDisplay, setBooksToDisplay] = useState(7);

  return (
    <div>
      <Carousel interval={null}>
        <Carousel.Item>
          <CarouselPage booksToDisplay={fakeData.slice(0, booksToDisplay)} />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselPage
            booksToDisplay={fakeData.slice(
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
