import React, { useEffect, useState } from "react";
import "../../Assets/Styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import data from "./TemplateData.json";

function SearchBar({ onSearchSubmit, returnResult, Clear }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [onBlur, SetOnBlur] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm !== "") {
      onSearchSubmit(searchTerm);
    }
  }, [searchTerm, onSearchSubmit]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (searchTerm !== "") {
            navigate(`/results/${searchTerm}`);
            window.location.reload();
          }
        }}
      >
        <FontAwesomeIcon className="searchbar-logo" icon={faMagnifyingGlass} />
        <div>
          <input
            className="searchBox"
            type="text"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            onBlur={() => {
              setTimeout(() => {
                SetOnBlur(true);
              }, 300);
            }}
            onFocus={() => {
              SetOnBlur(false);
            }}
          />
          <div className={onBlur ? "none" : "result_container"}>
            {returnResult.map((e) => {
              return (
                <div
                  className="span_results"
                  key={e._id}
                  onClick={() => {
                    console.log(`${e._id}`);
                    navigate(`/book/${e._id}`, { replace: false });
                    setSearchTerm("");
                    Clear();
                  }}
                >
                  {" "}
                  {e.title}
                </div>
              );
            })}
          </div>
        </div>

        <input className="submit" type="submit" value="Search" />
      </form>

      {/* <div className="template_Container">.
          {
            data
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <p className="price">${val.price}</p>
                  </div>
                )
              })
          }
        </div> */}
    </>
  );
}

export default SearchBar;
