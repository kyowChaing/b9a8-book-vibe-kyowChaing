import { useEffect, useState } from "react";
import {getStoredBooksId} from "../../utilitis/storeBookId"
import ReadsBooks from "../ReadsBooks/ReadsBooks";

const ListedBooks = () => {
    const [books,setBooks]=useState([]);



    useEffect(() => {
        const storedBookIds=getStoredBooksId();
    console.log(storedBookIds);
        fetch("https://api.npoint.io/fd871112904acfcad1cd")
          .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.length>0){
                    const listedBook = data.filter(book=>storedBookIds.includes(book.bookId));
                    setBooks(listedBook);
                    console.log(listedBook)
                }
            });
      }, []);

  return (
    <>
    <div> {books.length}</div>
    <div role="tablist" className="tabs tabs-lifted">
        
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            {
                books.map(book=><ReadsBooks key={book.bookId} book={book}> </ReadsBooks>)
            }
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="WishList Books" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>


    </div>
    </>
  );
};

export default ListedBooks;
