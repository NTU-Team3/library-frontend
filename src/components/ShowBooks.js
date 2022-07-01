import React from "react";
import BookInfo from "./BookInfo";

export default function ShowBooks({ data, indexfrom, indexTo }) {
  const booksToDisplayPerPage = [];

  for (let index = indexfrom - 1; index <= indexTo - 1; index++) {
    const { id, thumbnail, title, rating, desc } = data[index];
    booksToDisplayPerPage[index] = booksToDisplayPerPage[index] = (
      <BookInfo
        key={id}
        thumbnail={thumbnail}
        title={title}
        rating={rating}
        desc={desc}
      />
    );
  }

  return <div> {booksToDisplayPerPage} ;</div>;
}
