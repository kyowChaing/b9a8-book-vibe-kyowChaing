import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';


const Root = () => {
    return (
        <>
            <Navbar> </Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </>
    );
}

export default Root;
