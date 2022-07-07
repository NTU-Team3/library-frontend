import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePg from "./Pages/Home";
import ResultPage from "./Pages/ResultPage";
import Cart from "./Pages/Cart";
import Book from "./Pages/Book";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<HomePg />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/book/:bookId" element={<Book />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "3rem" }}>
              <h1>Invalid Page</h1>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
