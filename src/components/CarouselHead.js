import "../Assets/Styles/CarouselHead.css";
import { Link } from "react-router-dom";
function CarouselHead({ Heading }) {
  return (
    <div className="CarouselHead_heading">
      <div>
        <h5>{Heading}</h5>
      </div>
      <Link to="/results" className="viewAll">
        View All
      </Link>
    </div>
  );
}
export default CarouselHead;
