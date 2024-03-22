
import React, { useState } from 'react';
import Phone from '../../../public/images/phone.svg';
import Hamburger from "../../../public/images/hamburger.svg";
import Exit from "../../../public/images/exit.svg";
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <>
        { /* sub navigation bar */}

      <div className="w-screen h-16 bg-blue flex items-center justify-start">
        <div className="flex items-center justify-start space-x-10 ml-10">
          <div className="w-8 h-8 fill-white">
            <Phone />
          </div>
          <span className='text-white text-lg italic font-poppins'>425-346-6003</span>
        </div>
      </div>
  

      { /* main navigation bar */}
      <div className="w-screen h-36 bg-white flex items-center justify-between px-16 ">
        <div className="flex items-center">
          <Image src="/images/sucasapaint.png" alt="Sucasa Paint Logo" width={158} height={105} />
        </div>

         {/* Menu toggle button for mobile */}
       <button className="md:hidden " onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            // Close icon (X)
            <Exit className="fill-blue h-10 w-10" />
          ) : (
            // Menu icon (Burger bars)
            <Hamburger className="fill-blue h-10 w-10" />
          )}
        </button>
  
  
        <div className="hidden md:flex items-center space-x-10 text-black text-xl font-poppins">
          <a href="#" className="text-red ">Home</a>
          <a href="#" className="">Services</a>
          <a href="#" className="">About</a>
          <a href="#" className="">Portfolio</a>
          <a href="#" className="">Contact</a>
        </div>
      </div>


      
  

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-md absolute w-full z-20">
          <div className="px-4 pt-4 pb-4 space-y-4">
            <a href="#" className="block text-black text-lg">Home</a>
            <a href="#" className="block text-black text-lg">Services</a>
            <a href="#" className="block text-black text-lg">About</a>
            <a href="#" className="block text-black text-lg">Portfolio</a>
            <a href="#" className="block text-black text-lg">Contact</a>
          </div>
        </div>
      )}
  
  
  
      </>
    );
  }

