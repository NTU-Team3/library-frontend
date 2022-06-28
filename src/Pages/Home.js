import Carousel from "../components/Carousel";
import "../Assets/Styles/home.css";
import CarouselHead from "../components/CarouselHead";
import Navbar from '../components/Navbar/Navbar';


function HomePg() {
  return (
    <div class="homepg_container">
      <Navbar />
      <CarouselHead Heading={"New Releases"} />
      <Carousel />
    </div>
  );
}

export default HomePg;
