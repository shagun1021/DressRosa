import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";
import teamImage from "../usecontext/fashion1.png";
import missionImage from "../usecontext/dress1.jpg";
import testimonialsImage from "../usecontext/p0.jpg";

import logo from "../usecontext/woman.png";


const About = () => {
  
const [mode,setMode]=useState(false);



const changeMode=()=>{
setMode(!mode)
}

useEffect(()=>{
  document.body.className = mode ? 'bg-black text-white' : 'bg-white text-black';
},[mode]) 
  return (
    <>
      <nav className="flex justify-end font-mono shadow-w h-28 pt-3 white-shadow">
        <img src={logo} className="w-20 absolute left-0 ml-8" alt="" />
        <ul className="flex justify-end mt-10 gap-28 mr-20">
          <li className="cursor-pointer tracking-widest underline-pink underline-offset-4">
             HOME <FontAwesomeIcon className='pink' icon="fa-solid fa-house" />
          </li>
          <li className="cursor-pointer underline-offset-4 underline-pink">
             CART <FontAwesomeIcon className='pink' icon="fa-solid fa-cart-shopping" />
          </li>
          <li className="cursor-pointer underline-offset-4 underline-pink">
            ABOUT <FontAwesomeIcon className='pink pl-2' icon={['fas', 'info-circle']} />
          </li>
          <li>
            <button className="pink" onClick={changeMode}>{mode ?
              <FontAwesomeIcon className="text-3xl" icon="fa-regular fa-lightbulb" /> :
              <FontAwesomeIcon className="text-3xl" icon="fa-solid fa-lightbulb" />}
            </button>
          </li>
        </ul>
      </nav>

      <div className="about-page-container h-full">
        <section className="about-section mt-16 w-4/5 ml-48">
          <div className="flex flex-col gap-3 h-96 pt-14 w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
            <div className="about-content">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <img src={missionImage} alt="Our Mission" className="mb-4 w-44" />
              <p className="text-2xl mb-4">
                At Barbie's Fashion, our mission is to bring you the latest trends in fashion and beauty. We believe that everyone deserves to look and feel their best, and we're here to make that happen.
              </p>
            </div>
          </div>
        </section>

        <section className="team-section mt-16 w-4/5 ml-48">
          <div className="flex flex-col gap-3 h-96 pt-14 w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
            <img src={teamImage} alt="Our Team" className="mb-4 w-44" />
            <p className="text-2xl mb-4">
              Our team is made up of passionate and dedicated individuals who are committed to bringing you the best in fashion and beauty. From our designers to our customer service representatives, we're here to serve you.
            </p>
          </div>
        </section>

        <section className="testimonials-section mt-16 w-4/5 ml-48">
          <div className="flex flex-col gap-3 h-96 pt-14 w-1/2">
            <h2 className="text-3xl font-semibold mb-4">What Our Customers Say</h2>
            <img src={testimonialsImage} alt="Testimonials" className="mb-4 w-44" />
            <div className="testimonials">
              <blockquote className="text-2xl mb-4">
                "Barbie's Fashion has completely transformed my wardrobe. I feel more confident and stylish than ever!" - Jane Doe
              </blockquote>
              <blockquote className="text-2xl mb-4">
                "The customer service at Barbie's Fashion is exceptional. They go above and beyond to ensure you're satisfied." - John Smith
              </blockquote>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-gray-800 fixed bottom-0 w-full text-white py-4 mt-16">
        <div className="flex justify-between items-center px-8">
          <p><span className="text-pink-700">&copy;</span>2024 Barbie's Fashion. MADE WITH 💗</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-500"><FontAwesomeIcon icon="fa-brands fa-facebook-f" />acebook</a>
            <a href="#" className="hover:text-pink-500"><FontAwesomeIcon icon="fa-brands fa-twitter" /> Twitter</a>
            <a href="#" className="hover:text-pink-500"><FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
