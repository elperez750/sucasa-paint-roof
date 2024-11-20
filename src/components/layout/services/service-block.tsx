import React from "react"
import Button from "@/components/ui/button"
import TextHeader from "@/components/ui/text-header"
import Image from "next/image"

interface ServiceBlockProps {
  image: string
  headerText: string
  additionalText?: string
  children: React.ReactNode
  order?: "left" | "right"
  ctaText?: string
  ctaLink?: string
}

export default function ServiceBlock({
  image,
  headerText,
  additionalText,
  children,
  order = "left",
  ctaText,
  ctaLink,
}: ServiceBlockProps) {
  return (
    <section className="bg-blue w-full py-16 md:py-24">
      <div className={`container mx-auto flex flex-col ${order === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 px-4`}>
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-start">
          <TextHeader
            headerText={headerText}
            headerTextColor="text-white"
            additionalTextColor="text-red"
            additionalText={additionalText}
            className="mb-6"
          />
          <div className="text-white font-poppins text-base md:text-lg space-y-4">
            {children}
          </div>
          {ctaText && ctaLink && (
            <Button
              buttonType="secondary"
              backgroundColor="white"
              textColor="blue"
              label={ctaText}
              link={ctaLink}
              className="mt-8"
            />
          )}
        </div>

        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="relative w-full aspect-square max-w-2xl">
            <Image 
              src={image} 
              alt={`${headerText} service image`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}