import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-4xl'>To save your money please give me.</h1>
            <h2 className='text-3xl'>I will save your money.</h2>
        </div>
    );
};

export default Header;