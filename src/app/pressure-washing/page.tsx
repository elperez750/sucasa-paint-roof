import React from "react";
import ImageHeader from "@/components/layout/image-header";
import Navbar from "@/components/layout/navbar";
import CallToAction from "@/components/layout/call-to-action";
import StarterServicesSection from "@/components/layout/services/starter-services-section";
import ServiceValues from "@/components/layout/services/service-values";
import CompanySlider from "@/components/layout/services/company-slider";
import ServicesOffered from "@/components/layout/services/services-offered";
import ImageGrid from "@/components/layout/services/image-grid";
import { FAQ } from "@/components/layout/services/faq-item";
import FAQList from "@/components/layout/services/faq-list";
import Footer from "@/components/layout/footer";
import pressuresiding from "../../../public/images/washing/pressuresiding.jpeg";
import pressuregun from "../../../public/images/washing/pressuregun.jpg";
import pressuredriveway from "../../../public/images/washing/pressuredriveway.jpg";
import windowwashing from "../../../public/images/washing/windowwashing.jpg";
import pressureheader from "../../../public/images/washing/pressureheader.jpg";
import fencewashing from "../../../public/images/washing/fencewashing.jpg";
import concretecleaning from "../../../public/images/washing/concretecleaning.png";
import deckcleaning from "../../../public/images/washing/deckcleaning.jpg";
import commercialwashing from "../../../public/images/washing/commercialwashing.png";
import roofcleaning from  "../../../public/images/washing/roofcleaning.jpg";
import ServiceBlock from "@/components/layout/services/service-block";

const images = [
 {imageUrl: fencewashing.src, imageHeading: "Fence Washing",},
 {imageUrl: windowwashing.src, imageHeading: "Window Washing",},
 {imageUrl: concretecleaning.src, imageHeading: "Concrete Cleaning"},
 {imageUrl: deckcleaning.src, imageHeading: "Deck Cleaning"},
 {imageUrl: commercialwashing.src, imageHeading: "Commercial Washing"},
 {imageUrl: roofcleaning.src, imageHeading: "Roof Cleaning"},  
];

const faqItems: FAQ[] = [
  {
    question: "How long does it typically take to pressure wash a house?",
    answer:
      "The time required for pressure washing a house varies depending on factors such as the size of the house, the level of dirt and grime, and the equipment used. Generally, pressure washing a standard-sized house can take anywhere from a few hours to a full day.",
  },
  {
    question: "Do I need to pressure wash my house regularly?",
    answer:
      "Yes, regular pressure washing is essential to prevent the buildup of dirt, mold, mildew, and other contaminants on your house's exterior surfaces. We recommend pressure washing your house at least once a year, ideally in the spring or fall, to maintain its cleanliness and appearance.",
  },
  {
    question: "What type of surfaces can be pressure washed?",
    answer:
      "Pressure washing is suitable for a wide range of surfaces, including siding, brick, concrete, wood, and even some types of roofing materials. However, it's essential to use the appropriate pressure settings and cleaning solutions to avoid damaging delicate surfaces.",
  },
  {
    question: "Can pressure washing damage my house?",
    answer:
      "While pressure washing can be an effective cleaning method, it can also cause damage if not done correctly. Using too much pressure or holding the nozzle too close to the surface can result in etching, chipping, or stripping away paint, stain, or protective coatings. It's crucial to hire a professional pressure washing service with experience in safely cleaning various surfaces.",
  },
  {
    question: "How often should I pressure wash my driveway and walkways?",
    answer:
      "The frequency of pressure washing your driveway and walkways depends on factors such as climate, foot traffic, and exposure to elements like dirt, oil, and debris. We recommend pressure washing your driveway and walkways at least once a year or as needed to maintain their cleanliness and safety.",
  },
  {
    question: "Can pressure washing remove stains from my deck or patio?",
    answer: 
      "Yes, pressure washing can effectively remove stains, dirt, algae, mold, and mildew from decks, patios, and other outdoor surfaces. However, it's essential to use the appropriate pressure setting and cleaning solution to avoid damaging the wood or other materials.",
  },
  {
    question: "Is it safe to pressure wash my roof?",
    answer:
      "Pressure washing a roof can be risky and should only be done by professionals with experience in roof cleaning. Using too much pressure or improper techniques can damage roofing materials, leading to leaks, shingle loss, and other issues. We recommend hiring a professional roof cleaning service to ensure the safety and integrity of your roof.",
  },
  {
    question:
      "What are the benefits of professional pressure washing over DIY?",
    answer:
      "Professional pressure washing services offer several advantages over DIY methods, including access to professional-grade equipment, expertise in safely and effectively cleaning various surfaces, and the ability to customize cleaning solutions and techniques to meet your specific needs. Additionally, hiring a professional can save you time, effort, and potential damage to your property.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <ImageHeader
        imageUrl={pressureheader.src}
        heading="Pressure Washing Services"
        subheading="Explore a world where cleanliness meets perfection."
      />
      <CallToAction />
      <StarterServicesSection
        imageSrc={pressuresiding.src}
        header="Elevate Your Home's Cleanliness"
        paragraph = "Remove dirt, mold, and grime from your home's exterior surfaces with our professional pressure washing services. Our experienced team uses state-of-the-art equipment and eco-friendly cleaning solutions to deliver exceptional results that restore the beauty and freshness of your home."
        buttonLabel="Get Started"
      />
      <ServiceValues />
      <CompanySlider />
      <ServiceBlock
        image={pressuregun.src}
        headerText="Unwavering Excellence and Craftsmanship"
        additionalText="What We Do"
      >
        At Sucasa Paint and Roof Care, we pride ourselves on delivering
        unwavering excellence and craftsmanship in every pressure washing
        project. With meticulous attention to detail and quality materials, we
        ensure that your home's exterior not only looks beautiful but also
        provides a clean and inviting environment for your family and guests.
        Whether it's removing stubborn stains from your driveway or revitalizing
        your deck, you can trust our team to deliver superior results and
        exceptional service from start to finish.
      </ServiceBlock>

      <ServiceBlock
        image={pressuredriveway.src}
        headerText="Enhance Your Home's Protection"
        order="right"
      >
        Protect your home from the elements and enhance its curb appeal with our
        expert pressure washing services. From driveway cleaning to roof
        washing, our skilled team handles every aspect of your home's exterior
        with precision and care. With our commitment to quality craftsmanship
        and customer satisfaction, you can trust us to deliver lasting results
        that enhance the cleanliness and value of your home.
      </ServiceBlock>

      <ServicesOffered />
      <ImageGrid images={images} />
      <FAQList object={faqItems} header="Common Pressure Washing Questions" />
      <Footer />
    </>
  );
}
