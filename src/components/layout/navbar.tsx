"use client";


import React, { useState } from "react";
import Phone from "../../../public/images/phone.svg";
import Hamburger from "../../../public/images/hamburger.svg";
import Exit from "../../../public/images/exit.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Use useRouter

  return (
    <>
      <div className="w-full h-16 bg-blue flex items-center justify-start">
        <div className="flex items-center justify-start space-x-10 ml-10">
          <div className="w-8 h-8 fill-white"><Phone /></div>
          <span className="text-white text-lg italic font-poppins">425-346-6003</span>
        </div>
      </div>

      <div className="w-full h-36 bg-white flex items-center justify-between px-16">
        <div className="flex items-start">
          <Image src="/images/sucasapaint.png" alt="Sucasa Paint Logo" width={208} height={105} />
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <Exit className="fill-blue h-10 w-10" /> : <Hamburger className="fill-blue h-10 w-10" />}
        </button>

        <div className="hidden text-md md:flex items-end lg:text-xl space-x-6 lg:space-x-10 text-black font-poppins">
          {/* Directly use router.pathname for conditional styling within a span inside Link */}
          <Link href="/">
            <span className={`${pathname === "/" ? "text-red" : "text-black"} cursor-pointer`}>Home</span>
          </Link>
          <Link href="/interior">
            <span className={`${pathname === "/interior" ? "text-red" : "text-black"} cursor-pointer`}>Interior</span>
          </Link>
          <Link href="/exterior">
            <span className={`${pathname === "/exterior" ? "text-red" : "text-black"} cursor-pointer`}>Exterior</span>
          </Link>
          <Link href="/roofing">
            <span className={`${pathname === "/roofing" ? "text-red" : "text-black"} cursor-pointer`}>Roofing</span>
          </Link>
          <Link href="/pressure-washing">
            <span className={`${pathname === "/pressure-washing" ? "text-red" : "text-black"} cursor-pointer`}>Washing</span>
          </Link>
          <Link href="/about">
            <span className={`${pathname === "/about" ? "text-red" : "text-black"} cursor-pointer`}>About</span>
          </Link>
          <Link href="/portfolio">
            <span className={`${pathname === "/portfolio" ? "text-red" : "text-black"} cursor-pointer`}>Projects</span>
          </Link>
          <Link href="/contact">
            <span className={`${pathname === "/contact" ? "text-red" : "text-black"} cursor-pointer`}>Contact</span>
          </Link>
          
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="flex flex-col font-poppins bg-white shadow-md absolute w-full z-20 md:hidden">
          <Link href="/">
            <span className={`${pathname === "/" ? "text-red" : "text-black"} cursor-pointer`}>Home</span>
          </Link>
          <Link href="/interior">
            <span className={`${pathname === "/interior" ? "text-red" : "text-black"} cursor-pointer`}>Interior</span>
          </Link>
          <Link href="/exterior">
            <span className={`${pathname === "/exterior" ? "text-red" : "text-black"} cursor-pointer`}>Exterior</span>
          </Link>
          <Link href="/roofing">
            <span className={`${pathname === "/roofing" ? "text-red" : "text-black"} cursor-pointer`}>Roofing</span>
          </Link>
          <Link href="/pressure-washing">
            <span className={`${pathname === "/pressure-washing" ? "text-red" : "text-black"} cursor-pointer`}>Washing</span>
          </Link>
          <Link href="/about">
            <span className={`${pathname === "/about" ? "text-red" : "text-black"} cursor-pointer`}>About</span>
          </Link>
          <Link href="/portfolio">
            <span className={`${pathname === "/portfolio" ? "text-red" : "text-black"} cursor-pointer`}>Projects</span>
          </Link>
          <Link href="/contact">
            <span className={`${pathname === "/contact" ? "text-red" : "text-black"} cursor-pointer`}>Contact</span>
          </Link>
        </div>
      )}
    </>
  );
}
