import React from "react";
import Image from "next/image";
import Button from "../ui/button";



interface ImageHeaderProps {
  imageUrl: string;
  heading: string;
  subheading: string;
  buttonLabel?: string;
};




export default function ImageHeader({ imageUrl, heading, subheading, buttonLabel }: ImageHeaderProps) {
  return (
    <div className="relative w-full h-[70vh] flex justify-center items-center">
      <Image
        src={imageUrl}
        alt={heading}
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40"></div>

      <div className="z-10 text-center">
        <h1 className="font-poppins font-extrabold text-white text-3xl lg:text-8xl text-shadow-lg">
          {heading}
        </h1>
        <h3 className="font-poppins text-light_gray my-20 text-sm md:text-2xl font-medium ">
          {subheading}
        </h3>
        {buttonLabel &&  <Button backgroundColor="red" buttonType="primary" textColor="white" label={buttonLabel} link='/contact' />}
                 

        
      </div>
    </div>
  );
}
