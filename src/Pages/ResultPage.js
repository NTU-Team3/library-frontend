import { React, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "../components/Navbar/Navbar";

function ResultPage() {
  const [value, setValue] = useState("Most Popular");

  const handleSelect = (e) => {
    setValue(e.target.textContent);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="heading">Search Results</div>
        <DropdownButton
          id="dropdown-item-button"
          variant={"light border-dark rounded-0 dropdown-item-button"}
          title={value}
        >
          <Dropdown.Item as="button" onClick={handleSelect}>
            Most Popular
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={handleSelect}>
            Trending
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={handleSelect}>
            Something else
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default ResultPage;
