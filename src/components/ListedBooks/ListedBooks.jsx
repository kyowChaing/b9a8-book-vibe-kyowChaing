import { useEffect, useState } from "react";
import { getStoredBooksId } from "../../utilitis/storeBookId";
import { getStoredWishList } from "../../utilitis/storeWishList";
import ReadsBooks from "../ReadsBooks/ReadsBooks";
import WishList from "../WishList/WishList";
import dropdownicon from "../../../public/dropdown.png"

const ListedBooks = () => {
  const [books, setBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  // const [displayBook,setDisplayBook]=useState([]);
  const handleBookFilter=(filter)=>{
    // console.log(filter)
    
    const sortData = [...books].sort((a,b)=>{
      if(a[filter]<b[filter]){
        return 1;
      }
      if(a[filter]>b[filter]){
        return -1;
      }
      return 0;
    });
    setBooks(sortData);
  }

  useEffect(() => {
    const storedBookIds = getStoredBooksId();
    // console.log(storedBookIds);
    fetch("https://api.npoint.io/fd871112904acfcad1cd")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.length > 0) {
          const listedBook = data.filter((book) =>
            storedBookIds.includes(book.bookId)
          );
          setBooks(listedBook);
          // console.log(listedBook)
        }
      });
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    console.log(storedWishList);
    fetch("https://api.npoint.io/fd871112904acfcad1cd")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          const wishList = data.filter((book) =>
            storedWishList.includes(book.bookId)
          );
          // const listedBook = data.filter(book=>storedBookIds.includes(book.bookId));
          setWishList(wishList);
          // console.log(listedBook)
        }
      });
  }, []);

  return (
    <>
      <div>
        <div className=" flex justify-center "> Books </div>
        <div className="flex justify-center">
          <details className="dropdown">
            <summary className="m-1 btn">Sort By <span><img className=" w-4 h-4" src={dropdownicon} alt="" /></span></summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={()=>handleBookFilter("rating")}>
                <a>Rating</a>
              </li>
              <li onClick={()=>{handleBookFilter("totalPages")}}>
                <a>Number of Pages</a>
              </li>
              <li onClick={()=> handleBookFilter("yearOfPublishing")}>
                <a>Published Year</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {books.map((book) => (
            <ReadsBooks key={book.bookId} book={book}>
    
            </ReadsBooks>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="WishList Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {wishList.map((book) => (
            <WishList key={book.bookId} book={book}>
            
            </WishList>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListedBooks;
