import { React, useState, useEffect } from "react";
import DropdownBox from "../components/DropdownBox";
import Navbar from "../components/Navbar/Navbar";
import "../Assets/Styles/ResultPage.css";
import fakeData from "../fakeData";
import PaginationCustom from "../components/PaginationCustom";
import ShowBooks from "../components/ShowBooks";

function ResultPage({ bookPerPage = 10 }) {
  let length = fakeData.length;

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
            {fakeData.length > 0 ? (
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
          data={fakeData}
          indexfrom={bookStartfrom}
          indexTo={bookTill}
        />
      </div>
    </div>
  );
}

export default ResultPage;
