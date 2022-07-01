import "../Assets/Styles/PromotionCard.css";
import oreoImg from "../Assets/Images/oreo.jpeg";
import product_oreo from "../Assets/Images/product_oreo.jpeg";

function PromotionCard({
  heading = "Coming Soon!",
  intro = "ＯＲＥＯ（Ｒ）クッキ−型ポ−チ ＢＯＯＫ （［バラエティ］）",
  price = "$39.12",
}) {
  return (
    <div className="PromotionCard_container">
      <div className="text">
        <div className="text__heading">
          {"< "}
          {heading}
          {" >"}
        </div>
        <div className="inter promotionInfo">
          <div>{intro}</div>
          <div>{price}</div>
        </div>
      </div>
      <div className="secondPhoto_container">
        <img className="secondPhoto" src={oreoImg} alt="Oreo"></img>
      </div>
      <div className="thirdPhotoContainer">
        <img className="product_oreo" src={product_oreo} alt="Oreo"></img>
      </div>
    </div>
  );
}

export default PromotionCard;
