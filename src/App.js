import "./App.css";
import { useEffect, useState } from "react";
const axios = require("axios");

function App() {
  const [bckData, setData] = useState("loading");

  function getData() {
    axios.get("http://localhost:8080/about").then(function (response) {
      setData(response["data"]);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p>{bckData}</p>
    </div>
  );
}

export default App;
