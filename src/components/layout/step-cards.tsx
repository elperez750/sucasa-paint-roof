import React from "react";
import Image from "next/image";

type StepCardProps = {
  imageUrl: string;
  text: string;
  iconUrl: string;
};

const StepCard = ({ imageUrl, text, iconUrl }: StepCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <div className="relative w-[20rem] h-[25rem]">
          <Image
            src={imageUrl}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
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
      <h1 className="mt-40 text-center bold font-poppins text-xl">
        Schedule a free estimate
      </h1>
      <p>
        Begin your journey to a refreshed space by scheduling a no-obligation,
        free estimate. Our expert will assess the area, understand your
        requirements, and provide a detailed quote tailored to your needs.
      </p>
    </div>
  );
};

export default StepCard;
