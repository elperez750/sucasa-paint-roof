import React from "react";
import Image from "next/image";
import { sortByType } from "@/app/portfolio/page";

type ProjectCardProps = {
  imageSrc: string;
  headingText: string;
  paragraphText: string;
  projectType: sortByType;
};
export default function ProjectCard({
  imageSrc,
  headingText,
  paragraphText,
  projectType,
}: ProjectCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
      <div className="w-full h-0 pb-[100%] relative">
        <Image
          src={imageSrc}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 text-center">
        <h1 className="text-lg font-semibold">{headingText}</h1>
        <h3>{paragraphText}</h3>
        <h1>{projectType}</h1>
      </div>
    </div>
  );
}
