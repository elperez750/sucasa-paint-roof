import React from "react"
import Image from "next/image"
import Button from "../ui/button"
import Svg from "../ui/svg"
import Facebook from "../../../public/images/facebook.svg"
import Instagram from "../../../public/images/instagram.svg"
import Youtube from "../../../public/images/youtube.svg"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white font-poppins">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <Image
              src="/images/sucasapaint.png"
              alt="Sucasa Paint and Roofcare Logo"
              width={158}
              height={105}
            />
          </div>

          <div>
            <h2 className="text-xl md:text-2xl mb-4 text-red font-semibold">
              Information
            </h2>
            <address className="not-italic text-sm md:text-base space-y-2">
              <p>36731 State Route 2, Sultan, WA 98294</p>
              <p><a href="tel:425-246-5330" className="hover:text-red">425-246-5330</a></p>
              <p><a href="mailto:perez@sucasapaintroofcare.com" className="hover:text-red">perez@sucasapaintroofcare.com</a></p>
            </address>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl mb-4 text-red font-semibold">
              Services
            </h2>
            <nav className="space-y-2 text-sm md:text-base">
              <Link href="/interior" className="block hover:text-red">Interior</Link>
              <Link href="/exterior" className="block hover:text-red">Exterior</Link>
              <Link href="/roofing" className="block hover:text-red">Roofs and Gutters</Link>
              <Link href="/pressure-washing" className="block hover:text-red">Pressure Washing</Link>
            </nav>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl mb-4 text-red font-semibold">
              Navigation
            </h2>
            <nav className="space-y-2 text-sm md:text-base">
              <Link href="/" className="block hover:text-red">Home</Link>
              <Link href="/about" className="block hover:text-red">About Us</Link>
              <Link href="/portfolio" className="block hover:text-red">Projects</Link>
              <Link href="/contact" className="block hover:text-red">Contact Us</Link>
            </nav>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex justify-start lg:justify-between space-x-4 mb-6">
              <Svg svgComponent={Facebook} width={24} height={24} />
              <Svg svgComponent={Instagram} width={24} height={24} />
              <Svg svgComponent={Youtube} width={24} height={24} />
            </div>
            <Button
              buttonType="primary"
              label="Get Started"
              backgroundColor="red"
              textColor="white"
              link="/contact"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-blue py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm md:text-base">
            © {new Date().getFullYear()} Sucasa Paint and Roofcare
          </p>
        </div>
      </div>
    </footer>
  )
}