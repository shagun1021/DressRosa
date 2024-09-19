import React, { useEffect, useState } from "react";
import "./style.css";
import img1 from "../usecontext/eyeshadow.png";
import img2 from "../usecontext/fashion1.png";
import img3 from "../usecontext/hand-bag.png";
import img4 from "../usecontext/products.png";
// import img5 from "../usecontext/cosmetics.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./style.css";
import logo from "../usecontext/woman.png";
import { NavLink } from "react-router-dom";
const ContextHome = () => {



  const [mode,setMode]=useState(false);

  const changeMode=()=>{
    
    setMode(!mode)
    }
    
    useEffect(()=>{
      document.body.className = mode ? 'bg-black text-white' : 'bg-white text-black';
    },[mode]) 
  return (
    <>
 <nav className="flex justify-end font-mono shadow-w h-28  pt-3 white-shadow">
      <img src={logo} className="w-20  absolute left-0 ml-8" alt="" />
      <ul className="flex justify-end  mt-10 gap-28 mr-20  ">
        <li className="cursor-pointer tracking-widest underline-pink underline-offset-4">
         <NavLink to="/"> HOME </NavLink>
          
           <FontAwesomeIcon className='pink' icon="fa-solid fa-house" /> </li>
        <li className="cursor-pointer underline-offset-4 underline-pink">
        <NavLink to="page1"> CART <FontAwesomeIcon className='pink'  icon="fa-solid fa-cart-shopping" />
 </NavLink>
               
          
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


    
    
    <div className="{` h-full ${mode ? 'bg-black ' : 'bg-white' } `}">
   
    <div className="mt-16  w-4/5 h-1/2 ml-48">
      <table className="w-full  flex  justify-center ">
        <tbody>
        <tr>
          <td className="">
            <img className="mt-31 ml-4 absolute w-44    " src={img1} alt="" />
          </td>

          <td>
            <img className="ml-52 mt-20 absolute w-44 " src={img2} alt="" />
          </td>
        </tr>

        <tr>
          <td>
            <img className=" mt-48 ml-8 absolute w-44" src={img3} alt="" />
          </td>

          <td>
            <img className="mt-72 ml-56 absolute w-44" src={img4} alt="" />
          </td>
        </tr>
        </tbody>
      </table>
  < div className="flex flex-col gap-3 h-96 pt-14 w-1/2">
  < h1 className="typing-text">Hello..!
<span className="shake-hand">👋🏻</span></h1>




      <h2 className="text-4xl ml-24 "><span className="text-pink-500">B</span>arbie's</h2>

    <p className="text-2xl flex  pt-3">Welcome   to our fashion world where we bring you the latest trends in fashion and  beauty .
  
          </p>
    

    




  <button
className="cursor-pointer mt-12   bg-gradient-to-r w-2/4 from-rose-900 to-pink-700 hover:scale-105 duration-700 hover:duration-1000 font-semibold transition-all text-white px-12 py-4 rounded-e relative after:[clip-path:polygon(50%_0%,_100%_0,_100%_34%,_100%_100%,_77%_87%,_88%_62%,_64%_75%,_67%_50%,_48%_32%,_82%_18%)] after:hover:duration-700 after:duration-500 after:absolute after:inset-0 after:z-20 after:bg-pink-600 after:translate-x-0 after:hover:-translate-x-1 after:hover:rotate-[100deg] after:origin-bottom-right after:transition-all after:hover:transition-all after:rounded-e after:hover:skew-y-6 after:content-['BARBIE'S'] after:hover:content-['SMOOKY_DEV'] after:flex after:items-center after:justify-center after:bg-gradient-to-r after:from-rose-700 after:to-pink-600 after:hover:scale-x-50 before:[clip-path:polygon(26%_0,_38%_17%,_25%_32%,_41%_66%,_27%_81%,_50%_100%,_0_100%,_0%_70%,_0%_35%,_0_0)] before:hover:duration-700 before:duration-500 before:absolute before:inset-0 before:z-20 before:bg-pink-600 before:translate-x-0 before:hover:translate-x-0 before:hover:-rotate-[45deg] before:origin-bottom-left before:transition-all before:hover:transition-all before:rounded-e before:hover:skew-y-6 before:content-['BARBIE'S'] before:hover:content-['BARBIE'S'] before:flex before:items-center before:justify-center before:bg-gradient-to-l before:from-rose-700 before:to-pink-600"
>
  <NavLink to='Exploremore'> Explore More</NavLink>
 <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
</button>

  
    
    
    
      
     </div>

      </div>
      
    <footer className="bg-gray-800 fixed bottom-0 w-full text-white py-4 mt-16">
      <div className="flex justify-between items-center px-8">
        <p> <span className="text-pink-700">  &copy;</span>2024 Barbie's Fashion. MADE WITH 💗</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-pink-500"> 
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />acebook
          </a>
          <a href="#" className="hover:text-pink-500">  <FontAwesomeIcon icon="fa-brands fa-twitter" /> Twitter</a>
          <a href="#" className="hover:text-pink-500"> <FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram</a>
        </div>
      </div>
    </footer>
    </div>

 
      </>
  );
};

export default ContextHome;


