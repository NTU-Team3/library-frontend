import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "../components/Navbar/Navbar";

function ResultPage() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <Navbar></Navbar>
      <div>
        <h5>Search Results</h5>
        <DropdownButton id="dropdown-item-button" title="Dropdown button">
          <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
          <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default ResultPage;
