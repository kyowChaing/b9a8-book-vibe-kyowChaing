import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, image, author,bookId } = book;
  return (
    <>
      <div className="">
        <div className="card w-96 bg-base-100 shadow-xl">
          <Link to={`/bookDetails/${bookId-1}`}>
            {/* <figure>
              
            </figure> */}
            <div className="flex justify-center items-center align-middle">
            <img className="  h-96 w-64 " src={image} alt="" />
            </div>
            
            <div className="card-body">
              <div className="flex justify-around">
                <span className=" bg-[#F4FCF3] p-2 text-[#23BE0A]"> Young Adult </span>
                <span className=" bg-[#F4FCF3] p-2 text-[#23BE0A]">  Identity </span>
              </div>
              <h2 className="card-title">
                {bookName}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p>By: {author}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Book;
