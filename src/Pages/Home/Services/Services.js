import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const[services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
            <p className='text-xl font-bold text-orange-500 py-2 '>Service</p>
            <h1 className='text-5xl font-bold  py-2'>Our Service Area</h1>
            <div className='py-3'>
            <p className=' '>The majority have suffered alteration in some form, by injected humour, Or randomised
            </p>
            <p className=''> Words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Services;