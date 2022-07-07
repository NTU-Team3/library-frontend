import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import API from "./API/APIUtils";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [returnResult, setReturnResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    importBooks();
  }, []);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const returnSearch = allBooks.filter((element) => {
        return element.title
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });
      setReturnResult(returnSearch);
    } else {
      setReturnResult([""]);
    }
  }, [searchTerm, allBooks]);

  async function importBooks() {
    const response = await API.get("/public/all");
    const importBooks = response.data.data;
    setAllBooks(importBooks);
  }

  function clear() {
    setSearchTerm("");
    setReturnResult([]);
  }

  // when user click submit on search bar
  function onSearchSubmit(term) {
    setSearchTerm(term);
  }
  return (
    <div>
      <Navbar
        onSearchSubmit={onSearchSubmit}
        returnResult={returnResult}
        Clear={clear}
      />
      <Outlet />
    </div>
  );
}

export default App;
