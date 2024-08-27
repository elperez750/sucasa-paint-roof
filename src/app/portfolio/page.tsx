"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/navbar";
import ImageHeader from "@/components/layout/image-header";
import projectheader from "../../../public/images/projectheader.jpeg";
import Footer from "@/components/layout/footer";
import ProjectCard from "@/components/layout/projectCard";
import { motion, AnimatePresence } from "framer-motion";
import { ImageSlider } from "@/components/ui/imageSlider";
import { projects, sortByType } from "@/data/projects";
import ProjectFilterButtons from "@/components/layout/projectFilterButtons";
import { StaticImageData } from "next/image";

export default function Page() {
  const [sortBy, setSortBy] = useState<sortByType>("All");
  const [images, setCurrentImages] = useState<
    { src: string; blurDataURL: string }[]
  >([]);
  const [showSlider, setShowSlider] = useState(false);

  const openSlider = (projectImages: { src: string; blurDataURL: string }[]) => {
    setCurrentImages(projectImages);
    setShowSlider(true);
  };

  const closeSlider = () => {
    setCurrentImages([]);
    setShowSlider(false);
  };



  const sortedProjects = projects.filter(
    (project) => project.projectType === sortBy || sortBy === "All"
  );

  return (
    <div>
      <Navbar />
      <ImageHeader
        imageUrl={projectheader.src}
        imageBlur={projectheader.blurDataURL}
        heading="Projects"
        subheading="See what makes us a premiere painting company in Western Washington!"
        color="white"
      />

      <div className="container mx-auto p-5">
        <h1 className="font-poppins text-7xl text-center text-red my-10">
          Our Projects
        </h1>
        <h4 className="font-poppins text-lg text-center text-blue my-5">
          Explore our portfolio of projects that have earned us the trust and
          loyalty of countless clients...
        </h4>
      </div>

      <ProjectFilterButtons currentFilter={sortBy} onFilterChange={setSortBy} />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 m-10 font-poppins">
        <AnimatePresence>
          {sortedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                showImageCarousel={() =>
                  openSlider(
                    project.projectImages.map((image) => ({
                      src: image.src,
                      blurDataURL: image.blurDataURL || "",
                    }))
                  )
                }
                imageSrc={project.imageSrc[0]}
                blurSrc={project.blurDataURL[0]}
                headingText={project.headingText}
                projectType={project.projectType}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {showSlider && (
        <ImageSlider
          imageUrls={images.map((image) => image.src)}
          imageBlurUrls={images.map((image) => image.blurDataURL)}
          onClose={closeSlider}
        />
      )}

      <Footer />
    </div>
  );
}
