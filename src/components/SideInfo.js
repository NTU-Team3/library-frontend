import "../Assets/Styles/SideInfo.css";
import API from "../API/APIUtils";
import React, { useEffect, useState } from "react";

function SideInfo() {
  const today = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  console.log(today);
  const [onLoan, setOnLoan] = useState([
    { loans: { title: "None", duedate: "None" } },
  ]);

  async function getLoanHistory() {
    const response = await API.get("/member/v-loans/62bb5207127ffb266882da91");
    setOnLoan(response.data.data);
  }

  useEffect(() => {
    getLoanHistory();
  }, []);

  const readingList = [
    { title: "Atomic Habits" },
    { title: "The Great Gatsby" },
  ];

  return (
    <>
      <div className="SideInfo__container">
        <div>Currently Reading</div>
        {onLoan.map((book) => {
          return (
            <div key={book._id} className="dueAlert">
              {book.loans.title}
            </div>
          );
        })}
        <div className="bookdue__container">Books due</div>
        {onLoan.map((book) => {
          const dueDate = new Date(book.loans.duedate);
          const diffDays = Math.round(Math.abs((today - dueDate) / oneDay));

          return (
            <div
              key={book._id}
              className={diffDays <= 7 ? "bookDueAlertDueSoon" : "bookDueAlert"}
            >
              {diffDays <= 7
                ? `In ${diffDays} days - ${book.loans.title}`
                : ` ${dueDate.toLocaleString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })} - ${book.loans.title}`}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SideInfo;
