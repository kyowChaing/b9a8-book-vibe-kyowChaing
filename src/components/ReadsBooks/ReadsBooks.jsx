import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ReadsBooks = ({ book }) => {
  const {
    author,
    bookId,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;
  // const readsBooks = useLoaderData();
  return (
    <>
      <div className=" flex gap-10 mb-6 rounded-xl ">
        <div className=" bg-[#F3F3F3] w-60 h-64 flex justify-center items-center">
          <img className=" w-40 h-48" src={image} alt="" />
        </div>
        <div>
          <div>
            <h3 className=" font-bold text-3xl">{bookName}</h3>
            <p className=" font-medium py-3 text-[#424242]">By : {author}</p>

            <div className=" lg:flex justify-between gap-7 ">
              <div className="flex">
                <span className=" font-bold mr-2"> Tag</span>
                <div className=" flex gap-2">
                  <span className=" bg-[#F4FCF3] rounded-3xl text-[#25B835] p-1 font-medium">
                    # {tags[0]}
                  </span>
                  <span className="font-medium bg-[#F4FCF3] rounded-3xl text-[#25B835] p-1">
                    #{tags[1]}
                  </span>
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <CiLocationOn />

                <p className=" text-[#424242] font-normal">
                  Year of Publishing : {yearOfPublishing}
                </p>
              </div>
            </div>

            <div className=" flex gap-4 items-center py-3 ">
              <div className="flex items-center gap-3">
                <FaUserFriends />
                <p className=" text-[#717171]">Publisher : {publisher}</p>
              </div>
              <div className="flex items-center gap-3">
                <RiPagesLine />
                <p className=" text-[#717171]">Page {totalPages}</p>
              </div>
            </div>
            <hr className=" py-1" />

            <div className=" flex gap-2 items-center mt-2">
              <div className=" bg-[#DAEBFF] rounded-xl py-1 px-4">
                <p className=" text-[#328EFF]">
                  Category : {category} <span></span>
                </p>
              </div>

              <div className=" bg-[#FFF3E1] rounded-xl py-1 px-4">
                <p className=" text-[#FFAC33]">Rating : {rating}</p>
              </div>
              <div>
                <Link to={`/bookDetails/${bookId-1}`}>
                  <button className=" bg-[#25B835] rounded-xl text-[#fff] p-1 px-4">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadsBooks;
