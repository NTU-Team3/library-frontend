import * as React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

function HomeButton(clearSearch) {
  let navigate = useNavigate();

  return (
    <div
      className="navbar-logo"
      onClick={() => {
        navigate("/library-frontend/");
      }}
    >
      <FontAwesomeIcon icon={faBookOpenReader} />
    </div>
  );
}
export default HomeButton;
