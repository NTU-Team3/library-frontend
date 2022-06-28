import "../Assets/Styles/PromotionCard.css";
import oreoImg from "../Assets/Images/oreo.jpeg";
import product_oreo from "../Assets/Images/product_oreo.jpeg";

function PromotionCard({
  heading = "Coming Soon!",
  intro = "ＯＲＥＯ（Ｒ）クッキ−型ポ−チ ＢＯＯＫ （［バラエティ］）",
  price = "$39.12",
}) {
  return (
    <div class="PromotionCard_container">
      <div className="text">
        <h5>
          {"<"}
          {heading}
          {">"}
        </h5>
        <p>{intro} </p>
        <p>{price}</p>
      </div>
      <div className="secondPhoto_container">
        <img className="secondPhoto" src={oreoImg} alt="Oreo"></img>
      </div>
      <div class="thirdPhotoContainer">
        <img class="product_oreo" src={product_oreo} alt="Oreo"></img>
      </div>
    </div>
  );
}

export default PromotionCard;
