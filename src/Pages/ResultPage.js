import { React, useEffect, useState } from "react";
import DropdownBox from "../components/DropdownBox";
import "../Assets/Styles/ResultPage.css";

import PaginationCustom from "../components/PaginationCustom";
import ShowBooks from "../components/ShowBooks";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import API from "../API/APIUtils";

function ResultPage({ bookPerPage = 10 }) {
  let searchTerm = useParams().searchTerm;
  const { state } = useLocation();

  const [SearchResult, setData] = useState(
    state !== null ? state.data : "loading"
  );

  let length = 0;
  length = SearchResult.length;

  async function Search() {
    const response = await API.get(`/public/search/${searchTerm}`);
    const GetResult = await response.data.data;
    setData(GetResult);
    setBookTill(GetResult.length);
    console.log(GetResult);
  }

  if (SearchResult === "loading") {
    Search();
  }

  const [value, setValue] = useState("Most Popular");
  const [bookStartfrom, setBookStartfrom] = useState(1);
  const [bookTill, setBookTill] = useState(length); //for media query

  let page = Math.ceil(length / bookPerPage);

  // Uplift state from PaginationCustom.js
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
        <div className="ResultPageHeading">Search Results</div>
        <div className="pagination_container">
          <div>
            {SearchResult.length > 0 ? (
              <p>
                {bookStartfrom}
                {" - "}
                {bookTill} of {length} results for "{searchTerm}"
              </p>
            ) : (
              <p>No result found</p>
            )}
          </div>{" "}
          <div className="dropDown_Pagination">
            <DropdownBox value={value} handleSelect={handleSelect} />
            <PaginationCustom page={page} setActivePage={getActivePage} />
          </div>
        </div>
      </div>
      <div>
        {SearchResult !== "loading" && (
          <ShowBooks //type: default
            data={SearchResult}
            indexfrom={bookStartfrom}
            indexTo={bookTill}
          />
        )}
      </div>
    </div>
  );
}

export default ResultPage;
