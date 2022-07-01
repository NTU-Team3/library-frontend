import Carousel from "../components/Carousel";
import "../Assets/Styles/Home.css";
import CarouselHead from "../components/CarouselHead";
import PromotionCarousel from "../components/PromotionCarousel";
import SideInfo from "../components/SideInfo";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

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
      <div className="homepg_container">
        <div className="greeting">
          Greetings,{name}!<p className="greeting__p">{date}</p>
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
      <Footer date={"27th Jun 2022"}></Footer>
    </>
  );
}

export default HomePg;
