import { useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { saveBooksIds,getStoredBooksId} from "../../utilitis/storeBookId"
import { saveWishList } from "../../utilitis/storeWishList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
 
    const listReadsBooks=(id)=>{
    const listedBooks =  getStoredBooksId();
    if(!listedBooks.includes(id)){
      saveBooksIds(id);
      toast("Books Added to Read list");
    }else{
      toast("You have Already Read this Book !");
    }
    

  }

  const listWsihList = (id)=>{

    const listedBooks =  getStoredBooksId();
    if(!listedBooks.includes(id)){
      saveWishList(bookId);
      toast("Books Added to WishList");
    }else{
      toast("You have Already Read this Book");
    }
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

  // const notify = () => toast("Wow so easy!");


  return (
    <div>
      <ToastContainer />

      <div className="flex justify-center gap-11 pt-14 mb-10">
      <div className="rounded-[16px] bg-[#F3F3F3] flex justify-center items-center w-96">
          <img src={image} className="rounded-lg w-72 h-96 " />
          </div>

          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className=" py-5 font-semibold">By : {author}</p>
            <hr />
            <p className=" py-5 font-semibold">{category}</p>
            <hr />
            <p className="py-5"><span className=" text-xl font-bold"> Review  </span>: {review}</p>
            <div className=" flex justify-start gap-7 items-center">
            <p className="font-semibold">Tag</p>
            <div>
              <span className=" bg-[#F4FCF3] text-[#57CE44] p-2 rounded-3xl">#{tags[0]} </span>
            </div>
            <span  className=" bg-[#F4FCF3] text-[#57CE44] p-2 rounded-3xl"> #{tags[1]}</span>
            </div>

            <hr className=" my-3" />
            {/*  */}
            <div className=" flex justify-start gap-14">
            <p>
          
          Number of Pages:
        </p>
        <span className="font-bold" > {totalPages}</span>
            </div>
            
            <div className=" flex justify-start gap-28 items-center py-3">
            <p>
          
          Publisher:
        </p>
        <span className="font-bold"> {publisher}</span>
            </div>
            <div className=" flex justify-start gap-12 items-center py-3">
            <p>
          
          Year of Publishing:
        </p>
        <span  className="font-bold" > {yearOfPublishing}</span>
            </div>
            
            <div className=" flex justify-start gap-32">
            <p>
          
          Rating :
        </p>
        <span  className="font-bold" > {rating}</span>
            </div>


            <div className=" flex justify-start gap-8 py-5 ">
            <button onClick={()=>{listReadsBooks(bookId)}} className="btn btn-primary">
              Read
            </button>
            
            <button onClick={()=>{listWsihList(bookId)}} className="btn btn-primary">WishList</button>
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
