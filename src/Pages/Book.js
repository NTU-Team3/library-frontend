import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../API/APIUtils";
import "../Assets/Styles/Book.css";
import Rating from "../components/Rating";

export default function Book() {
  const [book, setBookInfo] = useState([
    {
      title: "",
      author: "",
      rating: "",
      thumbnail: "",
    },
  ]);

  let id = useParams().bookId;

  const [activetab, setActiveTab] = useState("synopsis");
  const [bookId, setId] = useState(id);

  async function getBook() {
    const response = await API.get(`/public/bookdetail/${id}`);
    const getBook = response.data.data;
    setBookInfo(getBook[0]);
  }
  useEffect(() => {
    getBook();
  }, [id]);

  let { title, author, rating, thumbnail, globalrating, desc } = book;

  return (
    <div className="main__container">
      <div className="upper__container">
        <div className="book__top">
          <div className="book-title">{title}</div>
          <div className="author">{author}</div>
          <div className="book__ratingContainer">
            <div>
              <Rating starsRating={rating} />
            </div>
            <div className="book__globalrating">{globalrating} Reviews</div>
          </div>
        </div>
        <div className="book__middle">
          <div className="book__middle__leftcontainer">
            <div className="book__middle__leftcontainer_top">
              <img className="bigImage" src={thumbnail} alt={thumbnail}></img>
              <button className="addToCart">add to cart</button>
            </div>

            <div className="book__middle__leftcontainer_right">
              <div className="nav_container">
                <div
                  className={activetab === "synopsis" ? "book__active" : ""}
                  onClick={() => {
                    setActiveTab("synopsis");
                  }}
                >
                  Synopsis
                </div>
                <div
                  className={activetab === "reviews" ? "book__active" : ""}
                  onClick={() => {
                    setActiveTab("reviews");
                  }}
                >
                  Reviews
                </div>
              </div>

              <div className="desc">
                {activetab === "synopsis" ? desc : "reviews"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
