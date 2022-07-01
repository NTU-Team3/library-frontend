import { React, useState } from "react";
import "../Assets/Styles/PaginationCustom.css";

export default function PaginationCustom({ page, setActivePage }) {
  let pages = [];
  const [active, setActive] = useState(1);
  //page logic
  // let bookStartfrom = 1 + activePage * bookPerPage - bookPerPage;
  // let bookTill = activePage === page ? length : activePage * bookPerPage;

  function handleSetNext() {
    setActivePage(active + 1);
    setActive(active + 1);
  }

  function handleSetPrev() {
    setActive(active - 1);
    setActivePage(active - 1);
  }
  for (let number = 1; number <= page; number++) {
    pages[number] = (
      <div key={number} className={number === active ? "boxActive" : "box"}>
        {number}
      </div>
    );
  }

  return (
    <div className="PaginationCustom__container">
      <button className={active === 1 ? "none" : "box"} onClick={handleSetPrev}>
        {"<"}
      </button>
      {pages}
      <button
        className={active === page ? "none" : "box"}
        onClick={handleSetNext}
      >
        {">"}
      </button>
    </div>
  );
}
