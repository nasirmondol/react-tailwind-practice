import React from 'react';

const Benefit = (props) => {
    // const {benefit} = props.benefit;
    return (
            <div>
                <h3 className='text-xl text-left'> </h3>
                <p className='text-xl flex items-center'> <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {props.benefit}</p>
            </div>
    );
};

export default Benefit;