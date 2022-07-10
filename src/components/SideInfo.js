import "../Assets/Styles/SideInfo.css";

function SideInfo() {
  const readingList = [
    { title: "Atomic Habits" },
    { title: "The Great Gatsby" },
  ];

  return (
    <>
      <div className="SideInfo__container">
        <div>Currently Reading</div>
        {readingList.map((book) => {
          return (
            <div key={book.title} className="dueAlert">
              {book.title}
            </div>
          );
        })}
        <div className="bookdue__container">Books due</div>
        {readingList.map((book) => {
          return (
            <div key={book.title} className="bookDueAlert">
              {book.title}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SideInfo;
