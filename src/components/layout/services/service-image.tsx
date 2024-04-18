import React from 'react';
import Image from "next/image";

interface ServiceImageProps {
  imageUrl: string;
  imageHeading: string;
}

const ServiceImage: React.FC<ServiceImageProps> = ({ imageUrl, imageHeading }) => {
  return (
    <div className="flex flex-col items-center w-full h-[500px] group">
        <div className="relative w-full h-full shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <Image src={imageUrl} alt={imageHeading} layout='fill' objectFit='cover' />
        </div>
      <h1 className="font-poppins text-2xl italicmt-4">{imageHeading}</h1>
    </div>
  );
};

export default ServiceImage;
