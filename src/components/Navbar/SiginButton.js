import * as React from "react";
import { useNavigate } from "react-router-dom";

function SiginButton() {
  let navigate = useNavigate();
  return (
    <button
      className="SignIn"
      onClick={() => {
        navigate("/login");
      }}
    >
      Sign in / Register
    </button>
  );
}
export default SiginButton;
