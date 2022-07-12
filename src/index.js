import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePg from "./Pages/Home";
import ResultPage from "./Pages/ResultPage";
import Cart from "./Pages/Cart";
import Book from "./Pages/Book";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route element={<App />}>
        <Route path="/library-frontend" element={<HomePg />} />
        <Route path="/results/:searchTerm" element={<ResultPage />} />
        <Route path="/book/:bookId" element={<Book />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:memberId" element={<Profile />} />

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
