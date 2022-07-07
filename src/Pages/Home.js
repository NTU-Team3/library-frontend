import Carousel from "../components/Carousel";
import "../Assets/Styles/Home.css";
import CarouselHead from "../components/CarouselHead";
import PromotionCarousel from "../components/PromotionCarousel";
import SideInfo from "../components/SideInfo";
import Footer from "../components/Footer";
import API from "../API/APIUtils";
import React, { useEffect, useState } from "react";

function HomePg() {
  const [newRelease, setNewRelease] = useState(["loading"]);
  const [topRated, setTopRated] = useState(["loading"]);

  async function GetNewRelease() {
    const response = await API.get("/public/newreleases");
    const getNewRelease = response.data.data;
    setNewRelease(getNewRelease);
  }

  async function GetTopRated() {
    const response = await API.get("/public/toprated");
    const getTopRated = response.data.data;
    setTopRated(getTopRated);
  }

  const name = "Charline";
  let date = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
  });

  useEffect(() => {
    GetNewRelease();
    GetTopRated();
  }, []);

  return (
    <>
      <div className="homepg_container">
        <div className="greeting">
          Greetings,{name}!<p className="greeting__p">{date}</p>
        </div>
        <div></div>
        <div>
          <PromotionCarousel />
          <CarouselHead Heading={"New Releases"} />
          <Carousel data={newRelease} />
          <CarouselHead Heading={"Top Rated"} />
          <Carousel data={topRated} />
        </div>
        <SideInfo></SideInfo>
      </div>
      <Footer date={"27th Jun 2022"}></Footer>
    </>
  );
}

export default HomePg;
