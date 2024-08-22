// src/data/projects.ts
import { ProjectOneImages, ProjectTwoImages, ProjectThreeImages } from "./projectImages";

export type sortByType = "All" | "Interior" | "Exterior";

export type Project = {
  imageSrc: string;
  headingText: string;
  projectType: sortByType;
  projectImages: string[];
};

export const projects: Project[] = [
  {
    imageSrc: ProjectOneImages[0],
    headingText: "Apartment Complex Project in Seattle",
    projectType: "Exterior",
    projectImages: ProjectOneImages,
  },
  {
    imageSrc: ProjectTwoImages[0],
    headingText: "Interior Painting Project in Bellevue",
    projectType: "Interior",
    projectImages: ProjectTwoImages,
  },
  {
    imageSrc: ProjectThreeImages[0],
    headingText: "Exterior House Paint Project in Redmond",
    projectType: "Exterior",
    projectImages: ProjectThreeImages,
  },
];
