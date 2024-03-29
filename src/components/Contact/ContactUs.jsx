
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <>
        <div className='bg-[#F0F0F0] h-screen flex items-center justify-center'>
            <div className=' text-center'> 
            <h1 className=' text-center'> First Online Book Store For You</h1>
            <p className=' p-4'>  </p>


            <Link to="https://github.com/kyowChaing" target='blank'> <button className=' bg-[#0145D4] text-[#fff] p-2 rounded-xl'> GitHub </button></Link>
            
            </div>
            

        </div>
        </>
    );
}

export default ContactUs;
