import "../Assets/Styles/SideInfo.css";
import GenreCard from "./GenreCard";
import FeaturePict from "../Assets/Images/Featured.jpg";
import FeatureLanguage from "../Assets/Images/FeaturedLanguage.jpg";
function SideInfo() {
  const readingList = [
    { title: "Atomic Habits" },
    { title: "The Great Gatsby" },
  ];

  return (
    <>
      <div className="SideInfo__container">
        <div>Currently Reading</div>
        {readingList.map((book) => {
          return (
            <div key={book.title} className="dueAlert">
              {book.title}
            </div>
          );
        })}
        <div className="bookdue__container">Books due</div>
        {readingList.map((book) => {
          return (
            <div key={book.title} className="bookDueAlert">
              {book.title}
            </div>
          );
        })}
        <div>
          <GenreCard heading="Featured Genre" imgsrc={FeaturePict}></GenreCard>
        </div>
        <GenreCard
          heading="Featured Language"
          imgsrc={FeatureLanguage}
        ></GenreCard>
      </div>
    </>
  );
}
export default SideInfo;
