"use client";
import React, { useState } from "react";
import Phone from "../../../public/images/phone.svg";
import Hamburger from "../../../public/images/hamburger.svg";
import Exit from "../../../public/images/exit.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* sub navigation bar */}

      <div className="w-full h-16 bg-blue flex items-center justify-start">
        <div className="flex items-center justify-start space-x-10 ml-10">
          <div className="w-8 h-8 fill-white">
            <Phone />
          </div>
          <span className="text-white text-lg italic font-poppins">
            425-346-6003
          </span>
        </div>
      </div>

      {/* main navigation bar */}
      <div className="w-full h-36 bg-white flex items-center justify-between px-16 ">
        <div className="flex items-start">
          <Image
            src="/images/sucasapaint.png"
            alt="Sucasa Paint Logo"
            width={208}
            height={105}
          />
        </div>

        {/* Menu toggle button for mobile */}
        <button
          className="md:hidden "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            // Close icon (X)
            <Exit className="fill-blue h-10 w-10" />
          ) : (
            // Menu icon (Burger bars)
            <Hamburger className="fill-blue h-10 w-10" />
          )}
        </button>

        <div className="hidden text-md md:flex items-end lg:text-xl space-x-6 lg:space-x-10 text-black font-poppins">
          <Link href="/" className="text-red">
            Home
          </Link>
          <Link href="interior" className="">
            Interior
          </Link>
          <Link href="exterior" className="">
            Exterior
          </Link>
          <Link href="pressure-washing" className="">
            Washing
          </Link>
          <Link href="roofing" className="">
            Roofing
          </Link>
          <Link href="about" className="">
            About
          </Link>
          <Link href="portfolio" className="">
            Portfolio
          </Link>
          <Link href="contact" className="">
            Contact
          </Link>
        </div>
      </div>
      

      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-md absolute w-full z-20 md:hidden">
          <div className="px-4 pt-4 pb-4 space-y-4">
            <Link href="" className="block text-black text-lg">
              Home
            </Link>
            <Link href="" className="block text-black text-lg">
              Interior
            </Link>
            <Link href="" className="block text-black text-lg">
              Exterior
            </Link>
            <Link href="" className="block text-black text-lg">
              Pressure Washing
            </Link>
            <Link href="" className="block text-black text-lg">
              About
            </Link>
            <Link href="" className="block text-black text-lg">
              Portfolio
            </Link>
            <Link href="" className="block text-black text-lg">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
