import React, { useEffect, useState } from 'react'
import "./style.css";
import logo from "../usecontext/woman.png";
const Nav = () => {
  
const [mode,setMode]=useState(false);

const changeMode=()=>{
  
  setMode(!mode)
  }
  
  useEffect(()=>{
    document.body.className = mode ? 'bg-black text-white' : 'bg-white text-black';
  },[mode])
  return (
    <div>
      
     
    </div>
  )
}

export default Nav
