import { React, useState, useEffect } from "react";
import DropdownBox from "../components/DropdownBox";
import Navbar from "../components/Navbar/Navbar";
import "../Assets/Styles/ResultPage.css";
import fakeData from "../fakeData";
import PaginationCustom from "../components/PaginationCustom";
import ShowBooks from "../components/ShowBooks";

function ResultPage({ bookPerPage = 20 }) {
  const [activePage, setActivePage] = useState(1);
  const [value, setValue] = useState("Most Popular");
  const [bookStartfrom, setBookStartfrom] = useState(1);
  const [bookTill, setBookTill] = useState(20);
  let length = fakeData.length;
  let page = Math.ceil(length / bookPerPage);

  //page logic
  // let bookStartfrom = ;
  // let bookTill = activePage === page ? length : activePage * bookPerPage;

  //Uplift state from PaginationCustom.js
  function getActivePage(state) {
    setActivePage(state);
    setBookStartfrom(1 + state * bookPerPage - bookPerPage);
    setBookTill(state === page ? length : state * bookPerPage);
  }

  // dropdown box
  const handleSelect = (e) => {
    setValue(e.target.textContent);
  };

  return (
    <div>
      <Navbar />
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
        <ShowBooks
          data={fakeData}
          indexfrom={bookStartfrom}
          indexTo={bookTill}
        />
      </div>
    </div>
  );
}

export default ResultPage;
