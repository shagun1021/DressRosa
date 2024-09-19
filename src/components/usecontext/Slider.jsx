import React, {  useEffect, useState } from 'react'
import  p1  from "../usecontext/p1.jpg";
import  p2  from "../usecontext/p5.jpg";
import  p3  from "../usecontext/p3.jpg";
import  p4  from "../usecontext/p4.jpg";
import  p5  from "../usecontext/newcollection.jpg";
import  p0  from "../usecontext/p0.jpg";
import  p6  from "../usecontext/p6.jpg";
import  p7  from "../usecontext/p7.jpg";
import  p8  from "../usecontext/p8.jpg";
import  p9  from "../usecontext/p9.jpg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  

const Slider = () => {

  const [slide,setSlide]=useState(0)


const prevImg=()=>{
  (slide>0?setSlide(slide-1):setSlide(9))
  console.log(slide);
}

const nextImg=()=>{
  
  (slide<9?setSlide(slide+1):setSlide(0))
  
  console.log(slide);
}

useEffect(()=>{

 const inter= setInterval(() => {
    nextImg();
  }, 2000);

    return ()=> clearInterval(inter)
},[slide]
)


  const image=[p4,p9,p7,p0,p8,p1,p5,p6,p2,p3];
  return (
    <>
       <div className='relative w-full h-3/4'>
        <img src={image[slide]} className='w-full h-full object-cover' alt="Background" />
       
       
        <div className='absolute flex text-white text-2xl gap-8 bottom-3 w-full justify-center '>
       



       <button  className='border-2 p-2 text-lg hover:bg-rose-400 rounded-3xl bg-rose-300 text-black ' onClick={prevImg}>
        prev
       </button>
       

       <button className='border-2 p-2  hover:bg-rose-400 text-lg rounded-3xl bg-rose-300 text-black 'onClick={nextImg}>
        next
       </button>


        </div>
      </div>


    </>
  )
}

export default Slider;
