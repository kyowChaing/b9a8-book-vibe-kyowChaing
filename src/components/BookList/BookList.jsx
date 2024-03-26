import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const BookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <>
      <div>
        <h2 className=" text-center">Book</h2>
      </div>
      <div >
        {
            books.map(book=> <Book key={book.bookId} book={book}> </Book>)
        }
      </div>
    </>
  );
};

export default BookList;
