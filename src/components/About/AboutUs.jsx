import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <>
        <div className='bg-[#F0F0F0] h-screen flex items-center justify-center'>
            <div className=' text-center'> 
            <h1 className=' text-center'> First Online Book Store For You</h1>
            <p className=' p-4'>Get Your New Book Collection</p>


            <Link to="/"> <button className=' bg-[#0145D4] text-[#fff] p-2 rounded-xl'> Books </button></Link>
            {/* <Link></Link> */}
            </div>
            

        </div>
        </>
    );
}

export default AboutUs;
