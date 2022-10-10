import React, { useState } from 'react';
import Link from '../../Link/Link';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'Shop', link: '/shop'},
        {id: 3, name: 'Coupons', link: '/coupons'},
        {id: 4, name: 'Contact', link: '/contact'},
        {id: 5, name: 'Deals', link: '/deal'},
    ]
    return (
        <nav className='bg-indigo-200'>
            <div onClick={() => setOpen(!open)}>
                {open ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> : <svg className="w-6 h-6 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>}
            </div>
            <ul className={`md:flex justify-center bg-indigo-200 w-full duration-500 ease-in absolute ${open ? 'top-6' : 'top-[-120px]'}`}>
            {
                routes.map(route => <Link 
                    key={route.id}
                    route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;