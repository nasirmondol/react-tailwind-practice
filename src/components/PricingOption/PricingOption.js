import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const {name, price, benefits} = props.option;
    return (
        <div className=' bg-red-300 m-5 p-3 gap-3 rounded-lg'>
            <p >{name}</p>
            <p ><small className='text-5xl'>{price}</small><small className='text-xl  text-zinc-100'>/month</small></p>
            {
                benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
            }
           <div className='justify-center'>
           <button className='flex items-center justify-center text-green-300 bg-amber-800 w-full py-2 mt-2 hover:bg-green-50 rounded'>
                <p className='text-xl '>Buy Now</p> <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
           </div>
        </div>
        
    );
};

export default PricingOption;