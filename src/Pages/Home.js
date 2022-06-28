import Carousel from "../components/Carousel";
import "../Assets/Styles/Home.css";
import CarouselHead from "../components/CarouselHead";
import PromotionCarousel from "../components/PromotionCarousel";
import SideInfo from "../components/SideInfo";
import Navbar from "../components/Navbar/Navbar";
function HomePg() {
  const name = "Charline";
  let date = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
  });
  return (
    <>
      <Navbar />
      <div class="homepg_container">
        <div class="greeting">
          <h3>Greetings,{name}</h3>
          <p>{date}</p>
        </div>
        <div></div>
        <div>
          <PromotionCarousel />
          <CarouselHead Heading={"New Releases"} />
          <Carousel />
          <CarouselHead Heading={"Top Rated"} />
          <Carousel />
        </div>
        <SideInfo></SideInfo>
      </div>
    </>
  );
}

export default HomePg;
