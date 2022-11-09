import React from 'react';
import img1 from '../../../assets/images/about_us/parts.jpg'
import img2 from '../../../assets/images/about_us/person.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
   <div className='w-1/2 relative'>
   <img src={img2} className="w-4/5 h-full rounded-lg shadow-2xl" alt=''/>
   <img src={img1} className="absolute max-w-sm right-9 top-1/2 rounded-lg shadow-2xl" alt=''/>
   </div>
    <div className='w-1/2'>
        <p className='text-xl font-bold text-orange-500 py-3'>About Us</p>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field.</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br />
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn bg-orange-500 text-orange-50 border-orange-500">Get more info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;