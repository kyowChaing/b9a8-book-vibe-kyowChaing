import { useLoaderData } from "react-router-dom";


const ReadsBooks = ({book}) => {
    const {author,bookId,bookName,category,image,publisher, rating, review,tags,totalPages,yearOfPublishing }=book;
    // const readsBooks = useLoaderData();
    return (
        <>
        <div className=" flex gap-10 mb-6 rounded-xl ">
            <div className=" bg-[#F3F3F3]">
                <img className=" w-32 h-36" src={image} alt="" />
            </div>
            <div>
                <div>
                    <h3>{bookName}</h3>
                    <p>By : {author}</p>
                    <p>Tag <span> {tags}</span> <span> Year of Publishing : {yearOfPublishing}</span></p>
                    <p> <span> Publisher : {publisher}</span>  <span> Page {totalPages}</span></p>
                    <p>Category : {category} <span></span></p>
                </div>
            </div>
        </div>
        </>
    );
}

export default ReadsBooks;
