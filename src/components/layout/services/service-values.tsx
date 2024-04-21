import React from "react";
import quality from "../../../../public/images/quality.svg";
import innovation from "../../../../public/images/innovation.svg";
import teamwork from "../../../../public/images/team.svg";
import commitment from "../../../../public/images/commitment.svg"
import leadership from "../../../../public/images/leadership.svg";
import Svg from "@/components/ui/svg";

export default function ServiceValues() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 sm:p-20 lg:p-36">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-poppins text-xl">Our Values</h1>
          <h2 className="font-poppins text-3xl text-center">
            The values that drive our work
          </h2>
        </div>
        {/* Each Value Section */}
        <div className="flex flex-col items-center justify-center bg-light_gray p-4">
          <Svg svgComponent={innovation} text="Innovation" width={12} height={12} textSize="text-3xl"/>
          <p className="text-base text-center mt-10 font-poppins italic">Innovating at every turn, we aim to lead with creative solutions that set new industry standards.</p>
        </div>
        {/* Repeat for other values */}
        {/* Quality */}
        <div className="flex flex-col items-center justify-center bg-white p-4">
          <Svg svgComponent={quality} text="Quality" width={12} height={12} textSize="text-3xl" />
          <p className="text-base text-center mt-10 font-poppins italic">Our focus on quality ensures excellence in every detail of our projects, surpassing expectations.</p>
        </div>
        {/* Teamwork */}
        <div className="flex flex-col items-center justify-center bg-light_gray p-4">
          <Svg svgComponent={teamwork} text="Team Work" width={12} height={12} textSize="text-3xl" />
          <p className="text-base text-center mt-10 font-poppins italic">
          Through collaboration, our team unites to overcome challenges and achieve collective success.
          </p>
        </div>
        {/* Commitment */}
        <div className="flex flex-col items-center justify-center bg-white p-4">
          <Svg svgComponent={commitment} text="Commitment" width={12} height={12} textSize="text-3xl" />
          <p className="text-base text-center mt-10 font-poppins italic">
          Our commitment drives us to exceed in delivering on our promises with integrity and dedication.
          </p>
        </div>
        {/* Leadership */}
        <div className="flex flex-col items-center justify-center bg-light_gray p-4">
          <Svg svgComponent={leadership} text="Leadership" width={12} height={12} textSize="text-3xl" />
          <p className="text-base text-center mt-10 font-poppins italic"> 
          Our leaders inspire progress, guiding our team with vision and fostering an environment of excellence
          </p>
        </div>
      </div>
    </>
  );
}






