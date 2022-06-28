import Carousel from "../components/Carousel";
import "../Assets/Styles/home.css";
import CarouselHead from "../components/CarouselHead";
function HomePg() {
  return (
    <div class="homepg_container">
      <CarouselHead Heading={"New Releases"} />
      <Carousel />
    </div>
  );
}

export default HomePg;
