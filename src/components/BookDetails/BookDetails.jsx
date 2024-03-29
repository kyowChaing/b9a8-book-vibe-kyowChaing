import { useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { saveBooksIds } from "../../utilitis/storeBookId"
import { saveWishList } from "../../utilitis/storeWishList";

const BookDetails = () => {

  const listReadsBooks=()=>{
    saveBooksIds(bookId);

  }

  const listWsihList = ()=>{
    saveWishList(bookId);
  }
  // console.log(readsBooksIds);
  const book = useLoaderData();

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;


  return (
    <div>

      <div className="flex justify-center gap-11 pt-14">
      <div className="rounded-[16px] bg-[#F3F3F3]">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl  max-w-sm max-h-96" />
          </div>

          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className=" py-5">By : {author}</p>
            <hr />
            <p className=" py-5">{category}</p>
            <hr />
            <p className="py-5">{review}</p>
            <div className=" flex justify-start gap-7">
            <p>Tag</p>
            <div>
              <span className=" bg-[#F4FCF3] text-[#57CE44] p-2 rounded-3xl">#{tags[0]} </span>
            </div>
            <span  className=" bg-[#F4FCF3] text-[#57CE44] p-2 rounded-3xl"> #{tags[1]}</span>
            </div>
            
            <div className=" flex justify-start gap-14">
            <p>
          
          Number of Pages:
        </p>
        <span > {totalPages}</span>
            </div>
            
            <div className=" flex justify-start gap-28">
            <p>
          
          Publisher:
        </p>
        <span > {publisher}</span>
            </div>
            <div className=" flex justify-start gap-12">
            <p>
          
          Year of Publishing:
        </p>
        <span > {yearOfPublishing}</span>
            </div>
            
            <div className=" flex justify-start gap-32">
            <p>
          
          Rating :
        </p>
        <span > {rating}</span>
            </div>


            <div className=" flex justify-start gap-8 mt-5">
            <button onClick={listReadsBooks} className="btn btn-primary">
              Read
            </button>
            
            <button onClick={listWsihList} className="btn btn-primary">WishList</button>
            </div>
          </div>
          

      </div>

      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         
          
        
        </div>
      </div> */}
    </div>
  );
};

export default BookDetails;
