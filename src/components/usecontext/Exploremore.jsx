import React from 'react'
// import model1 from "../usecontext/model1.jpeg"
import Slider from "../usecontext/Slider";

  import  { useEffect, useState } from "react";
  import "./style.css";
  
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  
  import "./style.css";
  import logo from "../usecontext/woman.png";
import  dress1  from "../usecontext/dress1.jpg";
import  dress2  from "../usecontext/dress2.jpg";
import  dress3  from "../usecontext/dress3.jpg";
import  dress4  from "../usecontext/dress4.jpg";
import  dress5  from "../usecontext/dress7.jpg";
import  dress6  from "../usecontext/dress6.jpg";
import  newcollection  from "../usecontext/newcolle.png";

  
  
  
const Exploremore = () => {
  
    const [mode,setMode]=useState(false);
  
    const changeMode=()=>{
      
      setMode(!mode)
      }
      
      useEffect(()=>{
        document.body.className = mode ? 'bg-black text-white' : 'bg-white text-black';
      },[mode]) 


  return (
  <div className='w-screen h-screen'>


{/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}


<nav className="flex justify-end font-mono shadow-w h-28  pt-3 white-shadow">
      <img src={logo} className="w-20  absolute left-0 ml-8" alt="" />
      <ul className="flex justify-end  mt-10 gap-28 mr-20  ">
        <li className="cursor-pointer tracking-widest underline-pink underline-offset-4">
          HOME <FontAwesomeIcon className='pink' icon="fa-solid fa-house" /> </li>
        <li className="cursor-pointer underline-offset-4 underline-pink">
        CART          <FontAwesomeIcon className='pink'  icon="fa-solid fa-cart-shopping" />

          
        </li>
        <li className="cursor-pointer underline-offset-4 underline-pink">
          
          ABOUT
          <FontAwesomeIcon className='pink pl-2'  icon={['fas', 'info-circle']} />

          <i className="fa-duotone fa-cart-shopping"></i>
        </li>
        <li>
          
       <button className="pink" onClick={changeMode} > {mode?
       
       <FontAwesomeIcon className="text-3xl" icon="fa-regular fa-lightbulb" />
       :
       <FontAwesomeIcon className="text-3xl" icon="fa-solid fa-lightbulb" />
       
       }
</button>
        </li>
      </ul>
    </nav>


{/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}




  
<Slider/>

       
    <h1 className='text-center w-full my-10 text-4xl'>Our Store 
    {/* <img src={store} className="w-10 top-65 absolute"alt="" />  */}
    </h1> 

     <div className='w-screen h-full flex justify-center   '>

    <div className='  rounded-2xl flex h-3/2 w-3/4 p-7  flex-wrap justify-around shadow-2xl gap-8 '>



      
      <div className="w-1/4 h-2/5 bg-cover overflow-hidden"> 
      
      <div className="w-full cursor-pointer h-full bg-cover  bg-center  transition-transform duration-300 transform scale-110 hover:scale-100  " style={{backgroundImage:`url(${dress1})`}}> 
      
      </div>
      </div>

      <div className="w-1/4 h-2/5 bg-cover overflow-hidden"> 
      
      <div className="w-full cursor-pointer h-full bg-cover  bg-center  transition-transform duration-300 transform scale-110 hover:scale-100  " style={{backgroundImage:`url(${dress2})`}}> 
      
      </div>
      </div>

      <div className="w-1/4 h-2/5 bg-cover overflow-hidden"> 
      
      <div className="w-full cursor-pointer h-full bg-cover  bg-center  transition-transform duration-300 transform scale-110 hover:scale-100  " style={{backgroundImage:`url(${dress3})`}}> 
      
      </div>
      </div>

      <div className="w-1/4 h-2/5 bg-cover overflow-hidden"> 
      
      <div className="w-full cursor-pointer h-full bg-cover  bg-center  transition-transform duration-300 transform scale-110 hover:scale-100  " style={{backgroundImage:`url(${dress4})`}}> 
      
      </div>
      </div>

      <div className="w-1/4 h-2/5 bg-cover overflow-hidden"> 
      
      <div className="w-full cursor-pointer h-full bg-cover  bg-center  transition-transform duration-300 transform scale-110 hover:scale-100  " style={{backgroundImage:`url(${dress5})`}}> 
      
      </div>
      </div>

      <div className="w-1/4 h-2/5 bg-cover overflow-hidden"> 
      
      <div className="w-full cursor-pointer h-full bg-cover  bg-center  transition-transform duration-300 transform scale-110 hover:scale-100  " style={{backgroundImage:`url(${dress6})`}}> 
      
      </div>
      </div>



</div></div>

      


< div className='h-2/3 mt-12  overflow-hidden relative  w-screen  '>
  {/* <img src={newcollection} alt="" className='object-cover w-full h-full'/> */}
  <div className='w-full h-full absolute scale-110 hover:scale-105 bg-center bg-cover transition-transform  duration-2000'  style={{backgroundImage:`url(${newcollection})`}} >

  <h1 className='relative cursor-pointer     tracking-wider font-sans text-stroke  text-transparent font-extrabold text-center   text-8xl top-1/3'> <span className='mix-blend-overlay '>New
</span>  collection</h1>


<div className="flex  h-full  buttom-0 justify-center relative bottom-0">
  <button
  class="overflow-hidden relative   mt-10 top-1/2 w-32 p-2 h-12 bg-sky-700 text-white border-none rounded-md text-xl font-bold cursor-pointer  z-10 group"
>
  View
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-rose-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left" style={{backgroundColor:'#77628c'}}
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >view 🩵 </span>
</button>



</div>
  </div>

  {/* ::::::::::::button::::::::::::::::;; */}

</div>



<div className='h-1/3 text-center flex flex-col justify-center gap-3 py-1/2 font-mono text-white text-2xl' style={{backgroundColor:'#d7acd4'}}>

  <h1 className='text-3xl '>Mindful Creations </h1>
  <div className='w-full flex justify-center'>
  <p className='w-2/4   '>
  Each product is crafted with care,offering affordability,effectiveness,and a commitment to your well-being and our planet."


</p>
  </div>
  
</div>




  {/* ::::::::::::::::::::::::::::::::::::::::::::::::: */}












{/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}


<footer className="bg-gray-800  bottom-0 w-full text-white py-4 ">

      <div className="flex justify-around  items-center px-8">
  
        
  <div className='flex  flex-col gap-5'>
       <h1 className='text-lg font-bold '>About</h1>
       <ul className='text-lg flex flex-col gap-2'>
        <li className='cursor-pointer hover:underline '>Our Mission</li>
        <li className='cursor-pointer hover:underline '>Journal</li>
        <li className='cursor-pointer hover:underline '>In The Press</li>
        <li className='cursor-pointer hover:underline '>Rewards</li>
       
       </ul>

  </div>
        
  <div className='flex  flex-col gap-5'>
       <h1 className='text-lg font-bold '>Discover</h1>
       <ul className='text-lg  flex flex-col gap-2'>
        <li className='cursor-pointer hover:underline '>Shop All</li>
        <li className='cursor-pointer hover:underline '>Service Offerings</li>
        <li className='cursor-pointer hover:underline '>Find In Stores</li>
        <li className='cursor-pointer hover:underline '>Rewards</li>
       </ul>

  </div>

  <div className='flex  flex-col gap-5'>
       <h1 className='text-lg font-bold '>Help</h1>
       <ul className='text-lg  flex flex-col gap-2'>
        <li className='cursor-pointer hover:underline '>Return</li>
        <li className='cursor-pointer hover:underline '>Contact</li>
        <li className='cursor-pointer hover:underline '>Shipping</li>
        <li className='cursor-pointer hover:underline '>Privacy & polices </li>
       </ul>

  </div>
        


        <div className=' flex  flex-col gap-3 text-center  px-28'>
          <h1 className='text-start font-bold text-2xl '>Join Hello <span className='text-pink-500'> B</span>arbie's</h1>
          <p className='text-start text-lg'>Stay connected with our weekly updates on self-care tips, product <br/> news, and exclusive offers just for you.</p>
         <div className='flex mt-4'>
         <input type="text" className='rounded-l-xl px-3 text-black' />
          <button className=' p-1 px-3  hover:scale-105 transition-transform duration-2000 rounded-r-xl' style={{backgroundColor:'#77628c'}}>Suscribe</button>


         </div>

         <h2 className='text-start  text-lg font-bold'>let's Connect</h2>

         <div className="flex gap-4">
          <a href="#" className="hover:text-pink-500"> 
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />acebook
          </a>
          <a href="#" className="hover:text-pink-500">  <FontAwesomeIcon icon="fa-brands fa-twitter" /> Twitter</a>
          <a href="#" className="hover:text-pink-500"> <FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram</a>
        </div>

                  </div>

        {/* <ul className='list-none gap-5 flex'>
        <li >jeans</li>
          <li>top</li>
          <li>lengha</li>
          <li>ss</li>
          <li>ddd</li>
        </ul>
           */}
        
      </div>
        <p className='text-center mt-5'><span className="text-pink-500">  &copy;</span> 2024 Barbie's Fashion. MADE WITH 💗</p>
    </footer>
   



  </div>

  )
}

export default Exploremore
