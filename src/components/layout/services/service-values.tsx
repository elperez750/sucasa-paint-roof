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
    <div className="grid grid-cols-3 grid-rows-2 gap-4 p-36">
      <div className="flex flex-col items-center justify-center size-96">
        <h1 className="font-poppins text-xl">Our Values</h1>
        <h2 className="font-poppins text-3xl text-center">
          The values that drive our work
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center bg-light_gray size-full">
        <Svg svgComponent={innovation} text="Innovation" width={12} height={12} textSize="text-3xl"/>
        <p className="text-base text-center mt-10 font-poppins italic">Our dedication to excellence is evident in every brush stroke. With meticulous preparation, skilled application, and a thorough cleanup, we ensure a flawless finish. Our team uses the latest techniques and top-tier materials to deliver a durable and beautiful result that stands the test of time. We don’t just paint your spaces; we perfect them.</p>


      </div>
      <div className="flex flex-col items-center justify-center bg-white size-full">
            <Svg svgComponent={quality} text="Quality" width={12} height={12} textSize="text-3xl" />
            <p className="text-base text-center mt-10 font-poppins italic">Our dedication to excellence is evident in every brush stroke. With meticulous preparation, skilled application, and a thorough cleanup, we ensure a flawless finish. Our team uses the latest techniques and top-tier materials to deliver a durable and beautiful result that stands the test of time. We don’t just paint your spaces; we perfect them.</p>

      </div>
      <div className="flex flex-col items-center justify-center bg-light_gray size-full">
  <Svg svgComponent={teamwork} text="Team Work" width={12} height={12} textSize="text-3xl" />
  <p className="text-base text-center mt-10 font-poppins italic">
    Team Work at Sucasa Paint and Roof is about harmonizing the skills of seasoned professionals to create a symphony of efficiency and excellence. We believe in the power of collaboration to bring out the best in every project.
  </p>
</div>
<div className="flex flex-col items-center justify-center bg-white size-full">
  <Svg svgComponent={commitment} text="Commitment" width={12} height={12} textSize="text-3xl" />
  <p className="text-base text-center mt-10 font-poppins italic">
    Our Commitment at Sucasa Paint and Roof is a promise of unwavering dedication to delivering superior quality and service. We pledge to uphold the highest standards with every stroke and every shingle.
  </p>
</div>
<div className="flex flex-col items-center justify-center bg-light_gray size-full">
  <Svg svgComponent={leadership} text="Leadership" width={12} height={12} textSize="text-3xl" />
  <p className="text-base text-center mt-10 font-poppins italic">
    Leadership at Sucasa Paint and Roof is steering the helm with innovation, vision, and integrity. We lead the industry by setting benchmarks in quality, customer satisfaction, and sustainable practices.
  </p>
</div>

    </div>




</>
  );
}
