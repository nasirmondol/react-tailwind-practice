import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const PricingOptions = () => {
    const options = [
        {id: 0, name: 'Free', price: 0, benefits: [
            'Everything is free',
            'unlimited free',
            'localized free',
            'fantastic deals',
            'crazy deals'
        ]},
        {id: 1, name: 'Premium', price: 99.9,  benefits: [
            'Lifetime free',
            'unlimited free',
            'localized free',
            'fantastic deals',
            'crazy deals'
        ]},
        {id: 2, name: 'Dashing', price: 10.99,  benefits: [
            'Lifetime regular',
            'unlimited free',
            'localized free',
            'fantastic deals',
            'crazy deals'
        ]},
    ]
    return (
        <div className='bg-indigo-300 p-5 mt-4'>
            <h2 className='text-6xl mt-3 text-white font-mono'>Best deals of the towns</h2>
            <p className='text-xl p-4 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, obcaecati fugiat commodi officia distinctio non sapiente eos magnam temporibus assumenda.</p>
            <div className='grid md:grid-cols-3 gap-4 text-4xl font-bold '>
            {
                options.map(option => <PricingOption 
                    key={option.id}
                    option={option}
                    ></PricingOption>)
            }
            </div>
        </div>
    );
};

export default PricingOptions;