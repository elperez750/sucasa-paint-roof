import React from "react"
import Marquee from "react-fast-marquee"
import Image from "next/image"

import bathroom from "../../../../public/images/home/bathroom.jpeg"
import trimaco from "../../../../public/images/trimaco.jpeg"
import frogtape from "../../../../public/images/frogtape.png"
import purdy from "../../../../public/images/purdy.jpg"
import benjamin from "../../../../public/images/benjamin.jpeg"
import threem from "../../../../public/images/threem.jpg"
import sherwin from "../../../../public/images/sherwin.jpeg"

interface BrandImage {
  src: string
  alt: string
}

const brandImages: BrandImage[] = [
  { src: benjamin.src, alt: "Benjamin Moore" },
  { src: purdy.src, alt: "Purdy" },
  { src: threem.src, alt: "3M" },
  { src: trimaco.src, alt: "Trimaco" },
  { src: sherwin.src, alt: "Sherwin-Williams" },
  { src: frogtape.src, alt: "FrogTape" },
]

export default function CompanySlider() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16 text-center">
          Brands that we trust
        </h2>
        <Marquee className="overflow-hidden" pauseOnHover={true} speed={50}>
          <div className="flex items-center space-x-16 md:space-x-24 lg:space-x-36">
            {brandImages.concat(brandImages).map((image, index) => (
              <div key={index} className="flex items-center justify-center h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={100}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}