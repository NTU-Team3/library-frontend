import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResultPage from "./Pages/ResultPage";

<link
  href="https://fonts.googleapis.com/css2?family=Arsenal&family=Inter&display=swap"
  rel="stylesheet"
></link>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="search" element={<ResultPage />} />
    </Routes>
  </BrowserRouter>
);
