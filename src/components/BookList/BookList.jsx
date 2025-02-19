import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const BookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/fd871112904acfcad1cd")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <>
      <div>
        <h2 className=" text-center py-8 mt-8 text-4xl font-bold">Books</h2>
      </div>
      <div className=" grid justify-center lg:grid-cols-3  gap-4 ">
        {
            books.map(book=> <Book key={book.bookId} book={book}> </Book>)
        }
      </div>
    </>
  );
};

export default BookList;
