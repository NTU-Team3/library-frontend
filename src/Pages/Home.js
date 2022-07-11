import Carousel from "../components/Carousel";
import "../Assets/Styles/Home.css";
import CarouselHead from "../components/CarouselHead";
import PromotionCarousel from "../components/PromotionCarousel";
import SideInfo from "../components/SideInfo";

import API from "../API/APIUtils";
import React, { useEffect, useState } from "react";
import GenreCard from "../components/GenreCard";
import FeaturePict from "../Assets/Images/Featured.jpg";
import FeatureLanguage from "../Assets/Images/FeaturedLanguage.jpg";

function HomePg() {
  const [newRelease, setNewRelease] = useState(["loading"]);
  const [topRated, setTopRated] = useState(["loading"]);
  const [isLogin, setIsLogin] = useState(true);

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
          {isLogin ? (
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
          <CarouselHead Heading={"Top Rated"} data={topRated} />
          <Carousel data={topRated} />
        </div>
        <div>
          {isLogin && <SideInfo></SideInfo>}
          <div className="GenreCard">
            <GenreCard
              heading="Featured Genre"
              imgsrc={FeaturePict}
            ></GenreCard>

            <GenreCard
              heading="Featured Language"
              imgsrc={FeatureLanguage}
            ></GenreCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePg;
