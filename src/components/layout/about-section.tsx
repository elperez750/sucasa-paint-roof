import React from "react";
import AboutIcon from "../ui/svg";
import Brush from "../../../public/images/paintbrush.svg";
import Trophy from "../../../public/images/trophy.svg";
import Price from "../../../public/images/price.svg";
import Hand from "../../../public/images/handshake.svg";
import Eco from "../../../public/images/eco.svg";
import Shield from "../../../public/images/shield.svg";
import Button from "../ui/button";
import Image from "next/image";
import TextHeader from "../ui/text-header";
import RoundButton from "../ui/round-button";
import Svg from "../ui/svg";

export default function AboutSection() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-red font-poppins text-3xl mt-10 mb-10">
          When it comes to painting
        </h1>
        <h1 className="text-blue font-poppins font-bold text-3xl">
          Our work is nothing short of stunning
        </h1>
      </div>

      <div className="grid grid-rows-3 grid-flow-col md:grid-rows-2 md:grid-flow-col lg:flex lg:justify-between lg:items-center mt-16 lg:mr-10 lg:ml-10">
        <Svg svgComponent={Brush} text="Quality" width={12} height={12}/>
        <Svg svgComponent={Trophy} text="Experience" width={12} height={12}/>
        <Svg svgComponent={Price} text="Competitive Pricing" width={12} height={12}/>
        <Svg
          svgComponent={Hand}
          text="Customer Satisfaction Guaranteed"
          width={12} height={12}
        />
        <Svg svgComponent={Shield} text="Licensed and Insured" width={12} height={12}/>
        <Svg svgComponent={Eco} text="Eco-Friendly" width={12} height={12}/>
      </div>
      <div className="text-center mt-20">
        <Button
          backgroundColor="black"
          buttonType="primary"
          textColor="white"
          label="Schedule an estimate."
        />
      </div>

      {/* Container for both of the cards */}
      <div className="flex flex-col justify-center items-center mt-20 xl:flex-row">
        {/* Container for the first pair of cards */}
        <div className="relative w-[20rem] h-[16rem] md:w-[30rem] md:h-[24rem] lg:w-[40rem] lg:h-[32rem] xl:mr-20">
          {/* Background Card */}
          <div className="absolute inset-0 bg-blue rounded-lg shadow-lg" />
          {/* Foreground Card */}
          <div className="absolute left-4 top-6 w-[20rem] h-[16rem] md:w-[30rem] md:h-[24rem] lg:w-[40rem] lg:h-[32rem] bg-white border rounded-lg shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="hidden md:block md:w-full md:h-1/2 md:relative">
                <Image
                  src="/images/home/jesus.jpg"
                  alt="Sucasa Paint Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                {" "}
                {/* flex-1 allows this div to fill the rest of the card space */}
                <div>
                  <div className="text-sm font-semibold mb-2">
                    <h1 className="font-poppins text-3xl font-bold text-center">
                      Our Mission
                    </h1>
                    <span className="block h-1 bg-red w-full mt-2"></span>
                  </div>

                  <p className="text-gray text-xs lg:text-base font-poppins">
                    Sucasa Paint and Roof, a leading bonded and insured painting
                    and roofing contractor, proudly serves the Seattle area.
                    Owned and operated by Jesus Perez, we are committed to
                    excellence in every project. Jesus hands-on approach and
                    meticulous attention to detail ensure that our work not only
                    meets but exceeds the highest standards of quality,
                    professionalism, and craftsmanship
                  </p>
                </div>
                <div className="flex mt-4 justify-center items-center">
                  <RoundButton
                    buttonType="secondary"
                    backgroundColor="black"
                    label="Learn More"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 relative w-[20rem] h-[16rem] md:w-[30rem] md:h-[24rem] lg:w-[40rem] lg:h-[32rem] xl:mt-0">
          {/* Background Card */}
          <div className="absolute inset-0 bg-blue rounded-lg shadow-lg" />
          {/* Foreground Card */}
          <div className="absolute left-4 top-6 w-[20rem] h-[16rem] md:w-[30rem] md:h-[24rem] lg:w-[40rem] lg:h-[32rem] bg-white border rounded-lg shadow-lg">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="hidden md:block md:w-full md:h-1/2 md:relative">
                <Image
                  src="/images/home/paintbrush.jpg"
                  alt="paintbrush"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                {" "}
                {/* flex-1 allows this div to fill the rest of the card space */}
                <div>
                  <div className="text-sm font-semibold mb-2 lg:text-xl">
                    <h1 className="font-poppins text-3xl font-bold text-center">
                      Our Promise
                    </h1>
                    <span className="block h-1 bg-red w-full mt-2"></span>
                  </div>
                  <p className="text-gray font-poppins text-xs lg:text-base">
                    With Sucasa Paint and Roof, we guarantee top-quality
                    painting and roofing services tailored to meet your needs.
                    Your satisfaction is our priority, with a commitment to
                    professionalism, timely completion, and open communication.
                    We promise not just to meet your expectations but to exceed
                    them, ensuring your project is completed to the highest
                    standard with peace of mind included.
                  </p>
                </div>
                <div className="flex mt-4 justify-center items-center">
                  <RoundButton
                    buttonType="secondary"
                    backgroundColor="black"
                    label="Get Started"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
