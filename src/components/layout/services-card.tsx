import React from "react";
import Image from "next/image";
import Svg from "../ui/svg";
import Arrow from "../../../public/images/arrow.svg";

type ServiceCardProps = {
  imageUrl: string;
  header: string;
  paragraph: string;
};

export default function ServicesCard({
  imageUrl,
  header,
  paragraph,
}: ServiceCardProps) {
  return (
  
    <div className="flex flex-col mt-10 mr-10 ml-10 w-[20rem] h-[16rem] md:w-[30rem] md:h-[24rem] xl:w-[30rem] xl:h-[40rem] xl:ml-2 bg-white border rounded-lg overflow-hidden shadow transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray-100 cursor-pointer">
      <div className="hidden flex-1 md:block md:w-full md:h-1/2 md:relative">
        <Image src={imageUrl} alt={header} layout="fill" objectFit="cover" />
      </div>
      <div className="flex-shrink-0 p-6 flex flex-col justify-between">
        {" "}
        {/* flex-1 allows this div to fill the rest of the card space */}
        <div>
          <div className="font-semibold mb-2">
            <h1 className="font-poppins text-md font-bold text-center lg:text-xl xl:text-2xl">
              {header}
            </h1>
          </div>

          <p className="text-gray text-xs lg:text-md font-poppins xl:text-base text-left">
            {paragraph}
          </p>
          <div className="justify-start items-end px-2 py-10 rounded-b-lg">
            <a href="" className="font-poppins flex items-center">
              Learn More{" "}
              <Svg
                svgComponent={Arrow}
                width={8}
                height={8}
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
