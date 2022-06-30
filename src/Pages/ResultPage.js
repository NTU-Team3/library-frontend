import { React, useState } from "react";
import DropdownBox from "../components/DropdownBox";
import Navbar from "../components/Navbar/Navbar";
import "../Assets/Styles/ResultPage.css";
import fakeData from "../fakeData";
import PaginationCustom from "../components/PaginationCustom";

function ResultPage({ bookPerPage = 20 }) {
  const [activePage, setActivePage] = useState(1);
  const [value, setValue] = useState("Most Popular");

  let length = fakeData.length;
  let page = Math.ceil(length / bookPerPage);

  function getActivePage(state) {
    setActivePage(state);
  }

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
                {1 + activePage * bookPerPage - bookPerPage}-{" "}
                {activePage === page ? length : activePage * bookPerPage} of{" "}
                {length} results for “fantasy”
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
    </div>
  );
}

export default ResultPage;
