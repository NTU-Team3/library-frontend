import Carousel from "react-bootstrap/Carousel";
import PromotionCard from "./PromotionCard";
import "../Assets/Styles/PromotionCarousel.css";

function PromotionCarousel() {
  return (
    <div className="PromotionCarousel_container">
      <Carousel
        interval={8000}
        nextIcon={<span className="slider">{">"}</span>}
        prevIcon={<span className="slider">{"<"}</span>}
      >
        <Carousel.Item>
          <PromotionCard />
        </Carousel.Item>
        <Carousel.Item>
          <PromotionCard />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PromotionCarousel;
