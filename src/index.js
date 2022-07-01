import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResultPage from "./Pages/ResultPage";
import Cart from "./Pages/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="search" element={<ResultPage />} />
      <Route path="cart" element={<Cart />} />
      <Route // 404 route for invalid url
        path="*"
        element={
          <main style={{ padding: "2rem" }}>
            <h1>404 Page NotFound</h1>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
