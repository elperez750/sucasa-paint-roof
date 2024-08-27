import {
  ProjectOneImages,
  ProjectTwoImages,
  ProjectThreeImages,
  ProjectFourImages,
  ProjectFiveImages,
  ProjectSixImages,
  ProjectSevenImages,
  ProjectEightImages,
  ProjectNineImages,
  ProjectTenImages
} from "./projectImages";
import { StaticImageData } from "next/image";

export type sortByType = "All" | "Interior" | "Exterior";

export type Project = {
  imageSrc: string[];
  blurDataURL: string[];
  headingText: string;
  projectType: sortByType;
  projectImages: StaticImageData[];
};

export const projects: Project[] = [
  {
    imageSrc: ProjectOneImages.map((project) => project.src),
    blurDataURL: ProjectOneImages.map((project) => project.blurDataURL).filter((url) => url !== undefined),
    headingText: "Apartment Complex Project in Seattle",
    projectType: "Exterior",
    projectImages: ProjectOneImages,
  },
  {
    imageSrc: ProjectTwoImages.map((project) => project.src),
    blurDataURL: ProjectTwoImages.map((project) => project.blurDataURL).filter((url) => url !== undefined),
    headingText: "Home Interior in Bellevue",
    projectType: "Interior",
    projectImages: ProjectTwoImages,
  },
  {
    imageSrc: ProjectThreeImages.map((project) => project.src),
    blurDataURL: ProjectThreeImages.map((project) => project.blurDataURL).filter((url) => url !== undefined),
    headingText: "Residential Exterior Makeover Mill Creek",
    projectType: "Exterior",
    projectImages: ProjectThreeImages,
  },
  {
    imageSrc: ProjectFourImages.map((project) => project.src),
    blurDataURL: ProjectFourImages.map((project) => project.blurDataURL).filter((url) => url !== undefined),
    headingText: "Modern Interior Redmond",
    projectType: "Interior",
    projectImages: ProjectFourImages,
  },
  {
    imageSrc: ProjectFiveImages.map((project) => project.src),
    blurDataURL: ProjectFiveImages.map((project) => project.blurDataURL).filter((url) => url !== undefined),
    headingText: "Exterior Home Revamp Monroe",
    projectType: "Exterior",
    projectImages: ProjectFiveImages,
  },
  {
    imageSrc: ProjectSixImages.map((project) => project.src),
    blurDataURL: ProjectSixImages.map((project) => project.blurDataURL).filter((url) => url !== undefined),
    headingText: "Exterior Redmond",
    projectType: "Exterior",
    projectImages: ProjectSixImages,
  },
  {
    imageSrc: ProjectSevenImages.map((project) => project.src),
    blurDataURL: ProjectSevenImages.map((project) => project.blurDataURL).filter((url) => url !== undefined),
    headingText: "Exterior Monroe",
    projectType: "Exterior",
    projectImages: ProjectSevenImages,
  },
  {
    imageSrc: ProjectEightImages.map((project) => project.src),
    blurDataURL: ProjectEightImages.map((project) => project.blurDataURL).filter((url) => url !== undefined),
    headingText: "Exterior Home Renovation Bothell",
    projectType: "Exterior",
    projectImages: ProjectEightImages,
  },
  {
    imageSrc: ProjectNineImages.map((project) => project.src),
    blurDataURL: ProjectNineImages.map((project) => project.blurDataURL).filter((url) => url !== undefined),
    headingText: "Exterior Monroe",
    projectType: "Exterior",
    projectImages: ProjectNineImages,
  },
  {
    imageSrc: ProjectTenImages.map((project) => project.src),
    blurDataURL: ProjectTenImages.map((project) => project.blurDataURL).filter((url) => url !== undefined),
    headingText: "Exterior Bellevue",
    projectType: "Exterior",
    projectImages: ProjectTenImages,
  },
];
