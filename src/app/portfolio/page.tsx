import React from 'react'
import Navbar from '@/components/layout/navbar'
import ImageHeader from '@/components/layout/image-header';
import projectheader from "../../../public/images/projectheader.jpeg";
import placeholder from "../../../public/images/placeholder.jpg"
import Image from "next/image";
import Footer from '@/components/layout/footer';


export default function Page() {
  return (
    <div>
      <Navbar />
      <ImageHeader
        imageUrl={projectheader.src}
        heading="Projects"
        subheading="See what makes us a premiere painting company in Western Washington!"
      />

      <div className="container mx-auto p-5">
        <h1 className="font-poppins text-5xl text-center text-red my-5">
          Our Projects
        </h1>

        {/* Interior Projects */}
        <div className="mb-10">
          <h2 className="font-poppins text-2xl text-red my-3">
            Interior Projects
          </h2>
          <div className="flex justify-center flex-wrap">
            <Image src={placeholder.src} alt="Interior Project 1" width={300} height={300} className="m-2" />
            <Image src={placeholder.src} alt="Interior Project 2" width={300} height={300} className="m-2" />
            <Image src={placeholder.src} alt="Interior Project 3" width={300} height={300} className="m-2" />
          </div>
        </div>

        {/* Exterior Projects */}
        <div className="mb-10">
          <h2 className="font-poppins text-2xl text-red my-3">
            Exterior Projects
          </h2>
          <div className="flex justify-center flex-wrap">
            <Image src={placeholder.src} alt="Exterior Project 1" width={300} height={300} className="m-2" />
            <Image src={placeholder.src} alt="Exterior Project 2" width={300} height={300} className="m-2" />
            <Image src={placeholder.src} alt="Exterior Project 3" width={300} height={300} className="m-2" />
          </div>
        </div>

        {/* Roofing Projects */}
        <div className="mb-10">
          <h2 className="font-poppins text-2xl text-red my-3">
            Roofing Projects
          </h2>
          <div className="flex justify-center flex-wrap">
            <Image src={placeholder.src} alt="Roofing Project 1" width={300} height={300} className="m-2" />
          </div>
        </div>

        {/* Pressure Washing Projects */}
        <div className="mb-10">
          <h2 className="font-poppins text-2xl text-red my-3">
            Pressure Washing Projects
          </h2>
          <div className="flex justify-center flex-wrap">
            <Image src={placeholder.src} alt="Pressure Washing Project 1" width={300} height={300} className="m-2" />
          </div>
        </div>

      </div>


      <Footer />
    </div>


  )
}
