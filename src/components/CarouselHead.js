import "../Assets/Styles/CarouselHead.css";
import { useNavigate } from "react-router-dom";

function CarouselHead({ Heading, data }) {
  const navigate = useNavigate();

  return (
    <div className="CarouselHead_heading">
      <div>
        <h5>{Heading}</h5>
      </div>
      <p
        onClick={() => {
          navigate("/results", { state: { data: [...data] } });
        }}
        className="viewAll"
      >
        View All
      </p>
    </div>
  );
}
export default CarouselHead;
