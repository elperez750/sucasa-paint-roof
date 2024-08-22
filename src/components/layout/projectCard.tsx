import React from "react";
import Image from "next/image";
import { sortByType } from "../../data/projects"

type ProjectCardProps = {
  imageSrc: string;
  headingText: string;
  projectType: sortByType;
  showImageCarousel: React.MouseEventHandler<HTMLDivElement>;
};
export default function ProjectCard({
  imageSrc,
  headingText,
  projectType,
  showImageCarousel
}: ProjectCardProps) {
  return (
    <div className="flex flex-col cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-lg" onClick={showImageCarousel}>
      <div className="w-full h-96 relative">
        <Image
          src={imageSrc}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className=" p-4 text-center bg-white shadow-lg rounded-lg overflow-hidden items-center">
        <h1 className="text-lg font-semibold">{headingText}</h1>
        <h1>{projectType}</h1>
      </div>
    </div>
  );
}
