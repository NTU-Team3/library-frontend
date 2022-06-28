import "../Assets/Styles/GenreCard.css";

function GenreCard({ heading, imgsrc }) {
  return (
    <>
      <div className="GenreCard__container">
        <div className="GenreCard__heading">{heading}</div>
        <div className="GenreCard__imgContainer">
          <img className="GenreCard__img" src={imgsrc} alt="featured"></img>
        </div>
      </div>
    </>
  );
}
export default GenreCard;
