import React from "react"
import Head from "next/head"
import Image from "next/image"
import ImageHeader from "@/components/layout/image-header"
import Navbar from "@/components/layout/navbar"
import CallToAction from "@/components/layout/call-to-action"
import CompanySlider from "@/components/layout/services/company-slider"
import Footer from "@/components/layout/footer"
import CallToActionCard from "@/components/layout/call-to-action-card"
import Testimonial from "@/components/layout/testimonial"
import ServiceArea from "@/components/layout/service-area"
import ServiceBlock from "@/components/layout/services/service-block"

import aboutheader from "../../../public/images/about/aboutheader.jpg"
import Jesus from "../../../public/images/projects/IMG_4972.png"
import Bellevue from "../../../public/images/about/bellevue.png"
import Seattle from "../../../public/images/about/seattle.jpeg"
import Tacoma from "../../../public/images/about/tacoma.jpeg"
import Renton from "../../../public/images/about/renton.jpeg"
import Bothell from "../../../public/images/about/bothell.jpg"
import Redmond from "../../../public/images/about/redmond.jpg"
import Sammamish from "../../../public/images/about/sammamish.jpg"
import Monroe from "../../../public/images/about/monroe.jpg"
import Everett from "../../../public/images/about/everett.jpeg"
import Edmonds from "../../../public/images/about/edmonds.jpeg"
import Issaquah from "../../../public/images/about/issaquah.jpg"
import Woodinville from "../../../public/images/about/woodinville.jpg"

const serviceAreas = [
  { imageUrl: Bellevue.src, cityName: "Bellevue" },
  { imageUrl: Seattle.src, cityName: "Seattle" },
  { imageUrl: Tacoma.src, cityName: "Tacoma" },
  { imageUrl: Renton.src, cityName: "Renton" },
  { imageUrl: Bothell.src, cityName: "Bothell" },
  { imageUrl: Redmond.src, cityName: "Redmond" },
  { imageUrl: Sammamish.src, cityName: "Sammamish" },
  { imageUrl: Monroe.src, cityName: "Monroe" },
  { imageUrl: Everett.src, cityName: "Everett" },
  { imageUrl: Edmonds.src, cityName: "Edmonds" },
  { imageUrl: Issaquah.src, cityName: "Issaquah" },
  { imageUrl: Woodinville.src, cityName: "Woodinville" },
]

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Sucasa Paint and Roof Care | Western Washington's Premier Painting Company</title>
        <meta name="description" content="Learn about Sucasa Paint and Roof Care, Western Washington's premier painting company. Discover our history, services, and commitment to quality." />
      </Head>
      <Navbar />
      <main className="bg-gray-50 font-poppins">
        <ImageHeader
          imageUrl={aboutheader.src}
          heading="About Us"
          imageBlur={aboutheader.blurDataURL}
          subheading="Discover the Sucasa Paint and Roof difference"
          color="white"
        />

        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col xl:flex-row gap-10">
            <div className="w-full xl:w-1/4">
              <CallToActionCard />
              <Testimonial
                paragraph="I hired Sucasa Paint and Roof for an exterior painting job, and they exceeded all expectations! Their professionalism, attention to detail, and cleanliness transformed my home dramatically. It looks brand new, and the compliments haven't stopped. Highly recommend for their outstanding service and results!"
                name="Elliott"
              />
            </div>

            <div className="w-full xl:w-3/4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-red-600">
                The Premiere Painting Company in Western Washington
              </h1>

              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={Jesus}
                      alt="Jesus Perez, founder of Sucasa Paint and Roof"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-lg shadow-md object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <p className="text-lg mb-6">
                    Sucasa Paint and Roof was established in 2015 by Jesus Perez, a seasoned expert with over two decades of experience in the painting and roofing industry. Our company, rooted in the heart of our community, is dedicated to providing top-tier services in both residential and commercial sectors.
                  </p>
                  <p className="text-lg">
                    We understand that each homeowner has unique needs and financial constraints. To accommodate this, we provide a range of flexible options designed to align with your specific requirements and budget. Whether you're looking to refresh a single room or repaint your entire home, we can tailor a solution that suits your needs without compromising on quality.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
                  Free Consultation and Transparent Pricing
                </h2>
                <p className="text-lg mb-8">
                  To further ease your decision, we offer a no-obligation, free consultation to discuss your painting project in detail. During this consultation, we provide clear, upfront pricing with no hidden fees. Our goal is to give you all the information you need to make an informed choice about your home improvement project.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
                  Convenient Scheduling
                </h2>
                <p className="text-lg mb-8">
                  We also offer flexible scheduling options to minimize disruption to your daily life. Our team works efficiently and effectively, ensuring that all work is completed within the agreed timeline, allowing you to enjoy your newly transformed space as soon as possible.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
                  Quality Work Guaranteed
                </h2>
                <p className="text-lg">
                  With Sucasa Paint and Roof, you're not just getting a painting service; you're making an investment in your home. We stand behind our work with a satisfaction guarantee, ensuring that the finished product meets your expectations and our high standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CompanySlider />
        <CallToAction />

        <section className="container mx-auto px-4 py-12 md:py-20">
          <ServiceBlock 
            image={Bellevue.src} 
            headerText="Our Vision for the Future" 
          >
            At Sucasa Paint and Roof, our vision is centered on expanding our footprint and enhancing our capabilities in both the painting and roofing industries. As we move forward, we aim to adopt cutting-edge technologies and methodologies that not only improve the efficiency and quality of our services but also reduce our environmental impact.
          </ServiceBlock>
        </section>

        <section className="bg-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-blue-600 mb-6">
              Areas We Serve
            </h2>
            <p className="text-center text-xl md:text-2xl mb-12">
              Sucasa Paint and Roof proudly serves the following areas in Western Washington.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {serviceAreas.map((area, index) => (
                <ServiceArea key={index} imageUrl={area.imageUrl} cityName={area.cityName} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}