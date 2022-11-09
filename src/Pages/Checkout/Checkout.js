import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    console.log(service);
    const{img,title,description} = service;
    return (
        <div className='my-3'>
            <h1 className='text-5xl font-bold text-center'>{title}</h1>
            <div className='grid grid-cols-2 gap-3 my-5 '>
            <img src={img} alt="" />
            <div>
            <p className='text-xl font-bold text-orange-500 py-3'>Details</p>
            <p className='text-xl font-light shadow-lg rounded-lg items-center p-5 py-5'>{description}</p>
            </div>
            </div>
        </div>
    );
};

export default Checkout;