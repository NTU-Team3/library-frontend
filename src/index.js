import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePg from "./Pages/Home";
import ResultPage from "./Pages/ResultPage";
import Cart from "./Pages/Cart";
import Book from "./Pages/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<HomePg />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/book/:bookId" element={<Book />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
