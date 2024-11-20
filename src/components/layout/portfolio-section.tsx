import React from "react"
import Button from "../ui/button"
import TextHeader from "../ui/text-header"
import Image from "next/image"

export default function PortfolioSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <TextHeader headerText="Projects" className="text-center mb-12" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start justify-center">
          <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl text-red-600 mb-5">
            Transforming Spaces, Creating Homes
          </h2>
          <p className="text-sm md:text-base font-poppins mb-8 max-w-2xl">
            Every home has a story, and our mission is to add chapters filled
            with design, functionality, and personal touches. This project
            involved a complete overhaul of a family residence, blending modern
            aesthetics with the client's lifestyle needs to create a space
            that's not just a house, but a true home.
          </p>
          <Button
            backgroundColor="red"
            buttonType="primary"
            textColor="white"
            label="View All Projects"
            link="/portfolio"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 h-[40rem] w-full max-w-3xl mx-auto">
          {["/images/home/cabinet.jpg", "/images/home/bathroom.jpeg", "/images/home/gutter.jpeg", "/images/home/exterior.jpg"].map((src, index) => (
            <div 
              key={src}
              className={`relative w-full overflow-hidden rounded-lg shadow transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 ${
                index % 2 === 0 ? "row-span-4" : "row-span-3"
              }`}
            >
              <Image
                src={src}
                alt={`Project image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}