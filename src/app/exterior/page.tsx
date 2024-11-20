import React from "react"
import Head from "next/head"
import ImageHeader from "@/components/layout/image-header"
import Navbar from "@/components/layout/navbar"
import CallToAction from "@/components/layout/call-to-action"
import StarterServicesSection from "@/components/layout/services/starter-services-section"
import ServiceValues from "@/components/layout/services/service-values"
import CompanySlider from "@/components/layout/services/company-slider"
import ServicesOffered from "@/components/layout/services/services-offered"
import ImageGrid from "@/components/layout/services/image-grid"
import { FAQ } from "@/components/layout/services/faq-item"
import FAQList from "@/components/layout/services/faq-list"
import Footer from "@/components/layout/footer"
import ServiceBlock from "@/components/layout/services/service-block"

import bluehouse from "../../../public/images/exterior/bluehouse.jpg"
import exteriorpage from "../../../public/images/exterior/exterior-page.jpeg"
import sidehouse from "../../../public/images/exterior/sidehouse.jpg"
import commercial from "../../../public/images/exterior/commercial.jpeg"
import brick from "../../../public/images/exterior/brick.jpg"
import exteriordoor from "../../../public/images/exterior/exteriordoor.jpeg"
import caulking from "../../../public/images/exterior/caulking.jpeg"
import trim from "../../../public/images/exterior/trim.jpg"
import deck from "../../../public/images/exterior/deck.jpg"
import colorconsultation from "../../../public/images/exterior/colorconsultation.jpg"

const exteriorServices = [
  { imageUrl: brick.src, imageHeading: "Brick Painting" },
  { imageUrl: exteriordoor.src, imageHeading: "Exterior Door Painting" },
  { imageUrl: caulking.src, imageHeading: "Caulking and Weatherproofing" },
  { imageUrl: trim.src, imageHeading: "Trim and Accent Painting" },
  { imageUrl: deck.src, imageHeading: "Deck and Fence Painting" },
  { imageUrl: colorconsultation.src, imageHeading: "Color Consultation" },
]

const exteriorFAQs: FAQ[] = [
  {
    question: "How long does exterior painting usually take?",
    answer: "The duration depends on the size of the area, the type of paint, and weather conditions. Typically, painting the exterior of a house can take anywhere from several days to a couple of weeks.",
  },
  {
    question: "Do I need to cover my plants before you start painting?",
    answer: "Yes, it's a good idea to cover any plants or shrubs near the area being painted to protect them from paint splatter or damage.",
  },
  {
    question: "What type of paint do you recommend for exterior surfaces?",
    answer: "For exteriors, we recommend using a high-quality exterior paint specifically formulated to withstand weather elements such as rain, sun exposure, and temperature changes.",
  },
  {
    question: "Can you paint over existing exterior paint?",
    answer: "Yes, we can, but proper surface preparation is essential to ensure the new paint adheres well and provides long-lasting results.",
  },
  {
    question: "How do I choose the right paint color for my house exterior?",
    answer: "Consider factors such as your home's architectural style, surrounding landscape, and neighborhood aesthetic. We offer color consultations to help you select the perfect color for your home's exterior.",
  },
  {
    question: "Is it safe to be around while the exterior is being painted?",
    answer: "Yes, it's generally safe. However, we recommend staying indoors or away from the immediate painting area to avoid accidental contact with wet paint and to minimize exposure to paint fumes.",
  },
  {
    question: "How do I prepare my home for exterior painting?",
    answer: "Ensure that the surfaces to be painted are clean, dry, and free of any debris. We'll handle the rest, including protecting surrounding surfaces and landscaping.",
  },
  {
    question: "What's the difference between flat, satin, and semi-gloss exterior paint finishes?",
    answer: "Flat finishes provide a smooth, matte appearance ideal for concealing surface imperfections. Satin finishes offer a subtle sheen and are easy to clean. Semi-gloss finishes provide a durable, glossy look suitable for high-traffic areas.",
  },
]

export default function ExteriorPage() {
  return (
    <>
      <Head>
        <title>Exterior Painting Services | Sucasa Paint and Roof Care</title>
        <meta name="description" content="Transform your home's exterior with our expert painting services. Enhance curb appeal and protect your property with high-quality paints and professional application." />
      </Head>
      <Navbar />
      <main>
        <ImageHeader
          imageUrl={exteriorpage.src}
          heading="Exterior Painting"
          subheading="Transform your home's first impression with our expert exterior painting services."
          color="white"
          imageBlur={exteriorpage.blurDataURL}
        />
        <CallToAction />
        <StarterServicesSection
          imageSrc={bluehouse.src}
          header="Exterior Services"
          paragraph="Experience the transformative power of a fresh coat of paint—a simple yet profoundly impactful way to rejuvenate and revitalize your home's exterior. This process is not just about changing a color; it's about renewing the very essence of your property, imbuing it with a new spirit and vibrancy that can alter perceptions, influence curb appeal, and enhance the overall ambiance of your neighborhood."
          buttonLabel="Get Started"
        />
        <ServiceValues />
        <CompanySlider />
        <ServiceBlock
          image={sidehouse.src}
          headerText="Unwavering Excellence and Craftsmanship"
          additionalText="What We Do"
        >
          We recognize that each exterior space holds its own charm and unique requirements. Our approach to exterior painting is centered on providing tailored solutions that enhance the curb appeal and protect the integrity of your property. Whether it's a cozy cottage nestled in the countryside or a modern urban dwelling, our team of skilled professionals works diligently to understand your specific needs and preferences. From selecting the right paint colors to addressing surface preparation and weatherproofing, we ensure that every aspect of your exterior painting project is meticulously planned and executed. With our commitment to quality craftsmanship and attention to detail, we transform your outdoor spaces into inviting havens that reflect your personal style and stand the test of time.
        </ServiceBlock>
        <ServiceBlock
          image={commercial.src}
          headerText="Elevate Your Curb Appeal with Expert Exterior Painting"
          order="right"
        >
          Transform the facade of your home and elevate its curb appeal with our expert exterior painting services. At Sucasa Paint and Roof Care, we understand the importance of making a lasting impression from the moment someone lays eyes on your property. Our team of skilled professionals is dedicated to delivering exceptional results that not only enhance the aesthetic appeal of your home but also provide long-lasting protection against the elements. From meticulous surface preparation to the application of premium-quality paints, we take pride in every brushstroke to ensure a flawless finish. Whether you're looking to refresh the look of your home or boost its market value, trust us to bring your vision to life and make your exterior painting project a success.
        </ServiceBlock>
        <ServicesOffered />
        <ImageGrid 
          images={exteriorServices} 
          title="Our Exterior Painting Services"
          subtitle="Discover our range of expert exterior painting solutions"
        />
        <FAQList faqs={exteriorFAQs} header="Common Exterior Painting Questions" />
      </main>
      <Footer />
    </>
  )
}