import React from "react";

const Book = ({ book }) => {

    const { bookName, image,author }=book;
  return (
    <>
      <div className=" ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>By: {author}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
