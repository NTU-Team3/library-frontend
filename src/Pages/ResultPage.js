import { React, useState } from "react";
import DropdownBox from "../components/DropdownBox";
import "../Assets/Styles/ResultPage.css";
// import fakeData from "../fakeData";
import PaginationCustom from "../components/PaginationCustom";
import ShowBooks from "../components/ShowBooks";
import { useLocation } from "react-router-dom";

function ResultPage({ bookPerPage = 10 }) {
  const { state } = useLocation();
  const { data } = state;

  let length = data.length;

  const [value, setValue] = useState("Most Popular");
  const [bookStartfrom, setBookStartfrom] = useState(1);
  const [bookTill, setBookTill] = useState(length); //for media query

  let page = Math.ceil(length / bookPerPage);

  //Uplift state from PaginationCustom.js
  function getActivePage(state) {
    setBookStartfrom(1 + state * bookPerPage - bookPerPage);
    setBookTill(state === page ? length : state * bookPerPage);
  }

  // dropdown box
  const handleSelect = (e) => {
    setValue(e.target.textContent);
  };

  return (
    <div>
      <div>
        <div className="heading">Search Results</div>
        <div className="pagination_container">
          <div>
            {data.length > 0 ? (
              <p>
                {bookStartfrom}
                {" - "}
                {bookTill} of {length} results for “fantasy”
              </p>
            ) : (
              <p>No result found</p>
            )}
          </div>
          <div className="dropDown_Pagination">
            <DropdownBox value={value} handleSelect={handleSelect} />
            <PaginationCustom page={page} setActivePage={getActivePage} />
          </div>
        </div>
      </div>
      <div>
        <ShowBooks //type: default
          data={data}
          indexfrom={bookStartfrom}
          indexTo={bookTill}
        />
      </div>
    </div>
  );
}

export default ResultPage;
