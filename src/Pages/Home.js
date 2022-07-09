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
  const [login, setLogin] = useState(false);

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

  function timeGreeting() {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      return "Good morning";
    } else if (curHr < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
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
          {login ? (
            <>
              Greetings,{name}!<p className="greeting__p">{date}</p>
            </>
          ) : (
            <h1>{timeGreeting()}</h1>
          )}
        </div>
        <div></div>
        <div>
          <PromotionCarousel />
          <CarouselHead Heading={"New Releases"} data={newRelease} />
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
