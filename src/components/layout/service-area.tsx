import React from "react"
import Image from "next/image"

interface ServiceAreaProps {
  imageUrl: string
  cityName: string
}

export default function ServiceArea({ imageUrl, cityName }: ServiceAreaProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
        <Image 
          src={imageUrl} 
          alt={`Image of ${cityName}`} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <h2 className="font-poppins text-2xl sm:text-3xl mt-4 text-blue-600 font-semibold">{cityName}</h2>
    </div>
  )
}