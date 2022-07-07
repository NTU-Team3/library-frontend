import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import API from "../API/APIUtils";
import "../Assets/Styles/Book.css";
import Rating from "../components/Rating";

export default function Book() {
  const [book, setBookInfo] = useState([
    {
      title: "loading",
      author: "loading",
      rating: "loading",
      thumbnail: "loading",
    },
  ]);

  let id = useParams().bookId;

  async function getBook() {
    const response = await API.get(`/public/bookdetail/${id}`);
    const getBook = response.data.data;
    setBookInfo(getBook[0]);
  }
  useEffect(() => {
    getBook();
  }, []);

  let { title, author, rating, thumbnail, globalrating, desc } = book;

  return (
    <div className="main__container">
      <div className="upper__container">
        <div className="book__top">
          <div className="book-title">{title}</div>
          <div className="author">{author}</div>
          <div>
            <Rating starsRating={rating} /> {globalrating} Reviews
          </div>
        </div>
        <div className="book__middle">
          <div className="book__middle__leftcontainer">
            <div className="book__middle__leftcontainer_top">
              <img className="bigImage" src={thumbnail} alt={thumbnail}></img>
              <button>add to cart</button>
            </div>

            <div className="book__middle__leftcontainer_right">
              <div className="nav_container">
                <div>
                  <Link to="/invoices">Synopsis</Link>
                </div>
                <div>
                  <Link to="/invoices">Reviews</Link>
                </div>
              </div>
              <div className="desc">{desc}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}