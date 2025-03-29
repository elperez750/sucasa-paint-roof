"use client"

import { useState, useEffect } from "react"
import Phone from "../../../public/images/phone.svg"
import Hamburger from "../../../public/images/hamburger.svg"
import Exit from "../../../public/images/exit.svg"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top info bar */}
      <div className="w-full h-12 md:h-16 bg-blue flex items-center justify-start shadow-sm">
        <div className="flex items-center justify-start space-x-4 md:space-x-6 ml-4 md:ml-10">
          <div className="w-6 h-6 md:w-8 md:h-8 fill-white">
            <Phone />
          </div>
          <span className="text-white text-base md:text-lg italic font-poppins tracking-wide">425-246-5330</span>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`w-full bg-white flex items-center justify-between px-4 md:px-16 transition-all duration-300 ${
          isScrolled ? "h-20 shadow-md" : "h-28 md:h-36"
        }`}
      >
        <div className="flex items-center h-full py-2">
          <Image
            src="/images/sucasapaint.png"
            alt="Sucasa Paint Logo"
            width={isScrolled ? 140 : 180}
            height={isScrolled ? 70 : 90}
            className="transition-all duration-300 object-contain"
          />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none transition-transform duration-200 hover:scale-105"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <Exit className="fill-blue h-8 w-8" /> : <Hamburger className="fill-blue h-8 w-8" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-end lg:text-xl space-x-6 lg:space-x-10 font-poppins">
          {[
            { href: "/", label: "Home" },
            { href: "/interior", label: "Interior" },
            { href: "/exterior", label: "Exterior" },
            { href: "/roofing", label: "Roofing" },
            { href: "/pressure-washing", label: "Washing" },
            { href: "/about", label: "About" },
            { href: "/portfolio", label: "Projects" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="relative group">
              <span
                className={`${
                  pathname === link.href ? "text-red font-medium" : "text-black"
                } cursor-pointer hover:text-red transition-colors duration-200`}
              >
                {link.label}
              </span>
              <span
                className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-red transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)} className="focus:outline-none" aria-label="Close menu">
            <Exit className="fill-blue h-8 w-8" />
          </button>
        </div>

        <nav className="flex flex-col font-poppins px-6 py-4 space-y-6">
          {[
            { href: "/", label: "Home" },
            { href: "/interior", label: "Interior" },
            { href: "/exterior", label: "Exterior" },
            { href: "/roofing", label: "Roofing" },
            { href: "/pressure-washing", label: "Washing" },
            { href: "/about", label: "About" },
            { href: "/portfolio", label: "Projects" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 px-4 rounded-md ${
                pathname === link.href ? "bg-blue/10 text-red font-medium" : "text-black hover:bg-gray-100"
              } transition-colors duration-200`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

