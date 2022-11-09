import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title,img,price,_id} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                
                <div className="card-actions">
                <p className='text-orange-500 font-semibold text-start'>Price: ${price}</p>
                    <Link to={`/services/${_id}`}><button className="btn-ghost text-orange-500 font-extrabold p-2 rounded-lg">❯</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;