import React from "react";
import Image from "next/image";

type StepCardProps = {
  imageUrl: string;
  text: string;
  iconUrl: string;
  heading: string;
  paragraph: string;
};

const StepCard = ({
  imageUrl,
  text,
  iconUrl,
  heading,
  paragraph,
}: StepCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <div className="relative w-[20rem] h-[25rem]">
          <Image
            src={imageUrl}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={imageUrl}
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-center items-center h-1/2">
            <div className="flex flex-col justify-center items-center bg-white rounded-full w-40 h-40 transform translate-y-3/4">
              <Image
                src={iconUrl}
                alt="Icon"
                width={40}
                height={40}
                objectFit="contain"
              />
              <p className="text-black text-center font-bold mt-2 font-poppins">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-40 text-center font-bold font-poppins text-xl">
        {heading}
      </h1>
      <p className="p-10 text-center font-poppins text-base">
        {paragraph}
      </p>
    </div>
  );
};

export default StepCard;
