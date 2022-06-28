import "../Assets/Styles/CarouselHead.css";
function CarouselHead({ Heading }) {
  return (
    <div class="CarouselHead_heading">
      <div>
        <h5>{Heading}</h5>
      </div>
      <div>View All</div>
    </div>
  );
}
export default CarouselHead;
