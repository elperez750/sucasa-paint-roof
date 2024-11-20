import React from "react"
import Image from "next/image"
import Link from "next/link"

interface ServiceImageProps {
  imageUrl: string
  imageHeading: string
  imageDescription?: string
  link?: string
}

const ServiceImage: React.FC<ServiceImageProps> = ({
  imageUrl,
  imageHeading,
  imageDescription,
  link,
}) => {
  return (
    <div className="group relative w-full h-[500px] overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl">
      <Image 
        src={imageUrl} 
        alt={imageHeading} 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="font-poppins text-2xl font-bold text-white mb-2">{imageHeading}</h2>
          {imageDescription && (
            <p className="font-poppins text-sm text-white mb-4">{imageDescription}</p>
          )}
          {link && (
            <span className="inline-block bg-white text-blue-600 px-4 py-2 rounded font-poppins text-sm font-semibold transition-colors duration-300 hover:bg-blue-600 hover:text-white">
              Learn More
            </span>
          )}
        </div>
      </div>
      {link ? (
        <Link href={link} className="absolute inset-0 z-10 cursor-pointer" aria-label={`Learn more about ${imageHeading}`} />
      ) : (
        <div className="absolute inset-0 z-10" aria-hidden="true" />
      )}
    </div>
  )
}

export default ServiceImage