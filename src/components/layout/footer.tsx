import React from "react";
import Image from "next/image";
import Button from "../ui/button";
import Svg from "../ui/svg";
import Facebook from "../../../public/images/facebook.svg";
import Instagram from "../../../public/images/instagram.svg";
import Youtube from "../../../public/images/youtube.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col md:flex-row justify-start md:justify-between md:items-center p-10 font-poppins">
        <div className="flex items-center">
          <Image
            src="/images/sucasapaint.png"
            alt="footer"
            width={158}
            height={105}
          />
        </div>

        <div className="flex flex-col justify-start mt-10 text-base">
          <h1 className="font poppins text-2xl mb-4 text-red font-semibold">
            Information
          </h1>

          <h2>36731 State Route 2, Sultan, WA 98294</h2>
          <h2>425-246-5330 </h2>
          <h2>perez@sucasapaintroofcare.com</h2>
        </div>

        <div className="flex flex-col justify-start mt-10 text-base">
          <h1 className="font poppins text-2xl mb-4 text-red font-semibold">
            Services
          </h1>

          <Link href="interior" className="hover:text-red">Interior</Link>
          <Link href="exterior" className="hover:text-red">Exterior</Link>
          <Link href="roofing" className="hover:text-red">Roofs and Gutters</Link>
          <Link href="pressure-washing" className="hover:text-red">Pressure Washing</Link>
        </div>
        <div className="flex flex-col justify-start mt-10 text-base">
          <h1 className="font poppins text-2xl mb-4 text-red font-semibold">
            Navigation
          </h1>
          <Link href="/" className="hover:text-red">Home</Link>
          <Link href="about" className="hover:text-red">About Us</Link>
          <Link href="portfolio" className="hover:text-red">Projects</Link>
          <Link href="contact" className="hover:text-red">Contact Us</Link>
        </div>
        <div className="mt-10">
          <div className="flex justify-evenly mb-10">
            <Svg svgComponent={Facebook} width={10} height={10} />
            <Svg svgComponent={Instagram} width={10} height={10} />
            <Svg svgComponent={Youtube} width={10} height={10} />
          </div>
          <div className="items-center">
            <Button
              buttonType="primary"
              label="Get Started"
              backgroundColor="red"
              textColor="white"
            />
          </div>
        </div>
      </footer>
      <div className="flex justify-center items-center w-full h-20 bg-blue">
        <h1 className="text-white font-poppins text-md">
          © 2023 Sucasa Paint and Roofcare
        </h1>
      </div>
    </>
  );
}
