import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <>
        <div className='bg-[#F0F0F0] h-screen flex items-center justify-center'>
            <div className=' text-center'> 
            <h1 className=' text-center'> Oops!</h1>
            <p className=' p-4'>404 - PAGE NOT FOUND</p>

            <Link to="/"> <button className=' bg-[#0145D4] text-[#fff] p-2 rounded-xl'> GO TO HOMEPAGE </button></Link>
            </div>
            

        </div>
        </>
        
    );
}

export default ErrorElement;
