import React, { useState } from "react";
import "../../Assets/Styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import data from "./TemplateData.json";
import { Link, useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate("/search");
            }}
          >
            <FontAwesomeIcon
              className="searchbar-logo"
              icon={faMagnifyingGlass}
            />

            <input
              className="searchBox"
              type="text"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <input className="submit" type="submit" value="Search" />
          </form>
        </div>
        {/* <div className="template_Container">
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
      </div>
    </>
  );
}

export default SearchBar;
