"use client";
import React from 'react'
import { TiThMenu } from "react-icons/ti";
import  { useState } from 'react';
import { FaTimes } from "react-icons/fa";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div  className='container pt-12'>
      <div className='flex justify-between items-center'>
       <div className='text-xl font-medium'>Arij Shah.. </div >
       <ul 
       className='gap-10 lg:gap-16 hidden md:flex'>
        <li className='menuLink'><a href='#hero'>Home</a></li>
        <li className='menuLink'><a href='#courses'>Courses</a></li>
        <li className='menuLink'><a href='#about'>About</a></li>
        <li className='menuLink'><a href='#contact'>Contact</a></li>
    
    
       </ul>

       <div>
          <button onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <TiThMenu />}
          </button>
          {/* Menu content goes here */}
      </div>
      </div>
    </div>
  )
}

export default Navbar
