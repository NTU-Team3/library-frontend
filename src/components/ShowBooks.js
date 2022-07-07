import React from "react";
import BookInfo from "./BookInfo";
import "../Assets/Styles/ShowBooks.css";

export default function ShowBooks({
  data,
  indexfrom = 1,
  indexTo = data.length,
  type,
  author,
  func,
}) {
  const booksToDisplayPerPage = [];

  for (let index = indexfrom - 1; index <= indexTo - 1; index++) {
    function handleClick() {
      func(_id);
    }
    const { _id, thumbnail, title, rating, desc /* add author*/ } = data[index];
    booksToDisplayPerPage[index] = booksToDisplayPerPage[index] = (
      <BookInfo
        key={_id}
        thumbnail={thumbnail}
        title={title}
        rating={rating}
        desc={desc}
        type={type}
        author="To change"
        func={handleClick}
      />
    );
  }

  return <div className="container"> {booksToDisplayPerPage}</div>;
}
