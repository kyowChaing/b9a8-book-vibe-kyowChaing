import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';



const Root = () => {
    return (
        <>
            <div className=' max-w-[92%] m-auto'>
            <Navbar> </Navbar>
           <Outlet></Outlet>
            </div>
            
        </>
    );
}

export default Root;
