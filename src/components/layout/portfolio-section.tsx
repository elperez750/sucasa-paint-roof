import React from "react";
import Button from "../ui/button";
import TextHeader from "../ui/text-header";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TextHeader headerText="Projects" />
      <div className="w-full flex flex-col lg:flex lg:flex-row">
        <div className="flex flex-col text-center items-center justify-center p-5">
          <h1 className="font-poppins text-md md:text-2xl lg:text-3xl text-red mb-5">
            Transforming Spaces, Creating Homes
          </h1>
          <p className="text-xs md:text-base font-poppins text-center">
            Every home has a story, and our mission is to add chapters filled
            with design, functionality, and personal touches. This project
            involved a complete overhaul of a family residence, blending modern
            aesthetics with the client’s lifestyle needs to create a space
            that’s not just a house, but a true home.
          </p>

          <div className="inline-block mt-5">
            {" "}
            {/* This will make the button only as wide as its content */}
            <Button
              backgroundColor="red"
              buttonType="primary"
              textColor="white"
              label="View All Projects"
            />
          </div>
        </div>

        <div className="flex justify-center lg:container">
          <div className="grid grid-rows-7 grid-cols-4 gap-4 h-[40rem] w-[50rem] p-5 ">
           
              <div className="relative row-span-4 col-span-2 w-full overflow-hidden rounded-md shadow transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray">
                <Image
                  src="/images/home/cabinet.jpg"
                  alt="Large"
                  layout="fill"
                  objectFit="cover"
                />
                
              </div>
              <div className="relative row-span-3 col-span-2 w-full overflow-hidden rounded-md transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray">
                <Image
                  src="/images/home/cabinet.jpg"
                  alt="Large"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative row-span-4 col-span-2 w-full overflow-hidden rounded-md transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray">
                <Image
                  src="/images/home/cabinet.jpg"
                  alt="Large"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative row-span-3 col-span-2 w-full overflow-hidden rounded-md transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray">
                <Image
                  src="/images/home/cabinet.jpg"
                  alt="Large"
                  layout="fill"
                  objectFit="cover"
                />
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
