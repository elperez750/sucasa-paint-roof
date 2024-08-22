"use client";
import React, { useState } from "react";
import Navbar from "@/components/layout/navbar";
import ImageHeader from "@/components/layout/image-header";
import projectheader from "../../../public/images/projectheader.jpeg";
import Footer from "@/components/layout/footer";
import firstImage from "../../../public/images/projects/IMG_5942.png";
import ProjectCard from "@/components/layout/projectCard";

export type sortByType = "All" | "Interior" | "Exterior";
type Project = {
  imageSrc: string;
  headingText: string;
  paragraphText: string;
  projectType: sortByType;
};

const projects: Project[] = [
  {
    imageSrc: firstImage.src,
    headingText: "Project 1",
    paragraphText: "Description 1",
    projectType: "Interior",
  },
  {
    imageSrc: firstImage.src,
    headingText: "Project 2",
    paragraphText: "Description 2",
    projectType: "Exterior",
  },
  {
    imageSrc: firstImage.src,
    headingText: "Project 3",
    paragraphText: "Description 3",
    projectType: "Interior",
  },
];
export default function Page() {
  const [sortBy, setSortBy] = useState<sortByType>("All");
  const sortedProjects = projects.filter(
    (project) => project.projectType === sortBy || sortBy === "All"
  );
  return (
    <div>
      <Navbar />
      <ImageHeader
        imageUrl={projectheader.src}
        heading="Projects"
        subheading="See what makes us a premiere painting company in Western Washington!"
      />

      <div className="container mx-auto p-5">
        <h1 className="font-poppins text-5xl text-center text-red my-5">
          Our Projects
        </h1>
        <h3 className="font-poppins text-xl text-center text-red my-5">
          Take a look at the projects that gained us a lot of clients. We
          guarantee you will be satisfied after we are done with your home!!!
        </h3>
      </div>

      <div className="flex gap-4 justify-center font-poppins text-xl">
        <div
          className="cursor-pointer hover:text-red"
          onClick={() => setSortBy("All")}
        >
          All
        </div>
        <div
          className="cursor-pointer hover:text-red"
          onClick={() => setSortBy("Interior")}
        >
          Interior
        </div>
        <div
          className="cursor-pointer hover:text-red"
          onClick={() => setSortBy("Exterior")}
        >
          Exterior
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 m-10 font-poppins">
        {sortedProjects.map((project) => (
          <ProjectCard
            imageSrc={project.imageSrc}
            headingText={project.headingText}
            paragraphText={project.paragraphText}
            projectType={project.projectType}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
