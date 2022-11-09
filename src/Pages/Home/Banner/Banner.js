import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='my-6 py-3'>
            <div className=" carousel w-full rounded-3xl">
  <div id="slide1" className="carousel-item relative w-full ">
    <div className='img-gradient'>
    <img src={img1} className="w-full h-auto " alt='first'/>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
      <h1 className='text-6xl font-bold text-white'>
        Affordable <br />
        Price for Car <br />
        Servicing <br />
      </h1>
     
      
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
        <p className='text-xl text-white'>
        There are many variations of passages of  available, but the majority have suffered alteration in some form
        </p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 ">
    <button className="btn bg-orange-500 text-orange-50 mr-5">Discover More</button>
      <button className="btn btn-outline text-orange-500">Latest Project</button>
    </div>

    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
      <a href="#slide6" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-outline text-white ">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img2} className="w-full h-auto " alt='first'/>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
      <a href="#slide1" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-outline text-white">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img3} className="w-full h-auto " alt='first'/>
    </div>
    
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
      <a href="#slide2" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide4" className="btn btn-circle btn-outline text-white">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img4} className="w-full h-auto " alt='first'/>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
      <a href="#slide3" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide5" className="btn btn-circle btn-outline text-white">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img5} className="w-full h-auto " alt='first'/>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
      <a href="#slide4" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide6" className="btn btn-circle btn-outline text-white">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img6} className="w-full h-auto " alt='first'/>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10">
      <a href="#slide5" className="btn btn-circle btn-outline mx-2 text-white">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-outline text-white">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;