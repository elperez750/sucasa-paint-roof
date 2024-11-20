import React from "react"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"

type ServiceCardProps = {
  imageUrl: string
  header: string
  paragraph: string
  link: string
}

export default function ServicesCard({
  imageUrl,
  header,
  paragraph,
  link,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col mt-10 mx-auto w-full max-w-sm md:max-w-md xl:max-w-lg bg-white border rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
      <div className="relative w-full h-48 md:h-64 xl:h-80">
        <Image 
          src={imageUrl} 
          alt={header} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
        <h2 className="absolute bottom-4 left-4 right-4 font-poppins text-xl md:text-2xl xl:text-3xl font-bold text-white text-shadow">
          {header}
        </h2>
      </div>
      <div className="flex-grow p-6 flex flex-col justify-between">
        <p className="text-gray-700 text-sm md:text-base xl:text-lg font-poppins mb-6">
          {paragraph}
        </p>
        <Link href={link} className="font-poppins text-blue-600 hover:text-blue-800 flex items-center transition duration-300 ease-in-out group">
          Learn More
          <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  )
}