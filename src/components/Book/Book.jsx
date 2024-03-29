import React from "react";
import { Link } from "react-router-dom";
import star from "../../../public/star.jpeg";

const Book = ({ book }) => {
  const { bookName, image, author,bookId, rating,category} = book;
  return (
    <>
      <div className="">
        <div className="card w-96 bg-base-100 shadow-xl">
          <Link to={`/bookDetails/${bookId-1}`}>
            {/* <figure>
              
            </figure> */}
            <div className="flex justify-center items-center bg-[#F3F3F3]">
            <img className="  h-96 w-64  py-6 " src={image} alt="" />
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
              <hr className=" border-dashed py-4" />
              <div className="card-actions justify-between">
                <div className="badge badge-outline">{category}</div>
                <div className="badge badge-outline">{rating} <span><img className=" w-4 h-3 mx-1" src={star} alt="" /></span></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Book;
