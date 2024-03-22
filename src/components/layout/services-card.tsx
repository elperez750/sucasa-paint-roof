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
    <div className="flex flex-col w-[20rem] h-[16rem] md:w-[30rem] md:h-[24rem] lg:w-[30rem] lg:h-[40rem] xl:ml-2 bg-white border rounded-lg overflow-hidden">
      <div className="flex-1 md:block md:w-full md:h-1/2 md:relative">
        <Image src={imageUrl} alt={header} layout="fill" objectFit="cover" />
      </div>
      <div className="flex-shrink-0 p-6 flex flex-col justify-between">
        {" "}
        {/* flex-1 allows this div to fill the rest of the card space */}
        <div>
          <div className="text-sm font-semibold mb-2">
            <h1 className="font-poppins text-2xl font-bold text-center">
              {header}
            </h1>
          </div>

          <p className="text-gray text-xs lg:text-base font-poppins">
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
