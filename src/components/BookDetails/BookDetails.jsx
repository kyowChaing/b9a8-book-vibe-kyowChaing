import { NavLink, useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  const {
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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p>By : {author}</p>
            <hr />
            <p>{category}</p>
            <hr />
            <p className="py-6">{review}</p>
            <p>Tag {tags}</p>
            <p>
              {" "}
              Number of Pages: <span> {totalPages}</span>
            </p>
            <p>
              Publisher: <span> {publisher}</span>
            </p>
            <p>
              Year of Publishing: <span>{yearOfPublishing}</span>
            </p>
            <p>
              Rating : <span>{rating} </span>
            </p>
            <button className="btn btn-primary">Get Started</button>
            <button className="menu"> ol </button>

            {/*  */}
            {/* <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/"> Home </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/listedBooks"> Listed Book </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/pagesToRead"> Pages to Read </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/about"> About Us </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/contact"> Contact Us </NavLink>{" "}
              </li>
            </ul> */}
            {/*  */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
