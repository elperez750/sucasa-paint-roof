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
import ServiceBlock from "@/components/layout/services/service-block";

import roofing from "../../../public/images/roofing/roof.jpg";
import roofheader from "../../../public/images/roofing/roofheader.jpeg";
import roofgutter from "../../../public/images/roofing/roofgutter.jpg";
import roofrepair from "../../../public/images/roofing/roofrepair.jpeg";
import skylight from "../../../public/images/roofing/skylight.jpg";
import roofventilation from "../../../public/images/roofing/roofventilation.jpg";
import gutter from "../../../public/images/roofing/gutter.jpg";
import chimney from "../../../public/images/roofing/chimney.jpg";
import roofrepaircard from "../../../public/images/roofing/roofrepaircard.jpeg";
import guttercleaning from "../../../public/images/roofing/guttercleaning.jpg";

const images = [
  {
    imageUrl: roofrepaircard.src,
    imageHeading: "Roof Repair",
  },
  {
    imageUrl: skylight.src,
    imageHeading: "Skylight Installation and Repair",
  },
  {
    imageUrl: roofventilation.src,
    imageHeading: "Roofing and Attic Ventilation",
  },
  {
    imageUrl: gutter.src,
    imageHeading: "Gutter Installation",
  },
  {
    imageUrl: chimney.src,
    imageHeading: "Chimney Flashing",
  },
  {
    imageUrl: guttercleaning.src,
    imageHeading: "Gutter Cleaning",
  },
];

const faqItems: FAQ[] = [
  {
    question: "How long does it typically take to install a new roof?",
    answer:
      "The time required for roof installation varies depending on factors such as the size of the roof, the materials used, and weather conditions. Generally, installing a new roof can take anywhere from a few days to a couple of weeks.",
  },
  {
    question: "Do I need to clean my gutters regularly?",
    answer:
      "Yes, regular gutter maintenance is essential to prevent clogs and water damage to your home. We recommend cleaning your gutters at least twice a year, ideally in the spring and fall, to remove leaves, debris, and other obstructions.",
  },
  {
    question: "What type of roofing material is best suited for my climate?",
    answer:
      "The best roofing material for your climate depends on factors such as local weather patterns, temperature fluctuations, and exposure to elements like rain, snow, and sunlight. We can help you choose the most suitable roofing material for your specific location and environmental conditions.",
  },
  {
    question: "Can you install new gutters without replacing the entire roof?",
    answer:
      "Yes, it's possible to install new gutters without replacing the entire roof. Our team can assess your existing gutter system and provide recommendations for repairs, replacements, or upgrades based on your needs and budget.",
  },
  {
    question: "How do I know if my roof needs repairs or replacement?",
    answer:
      "Signs that your roof may need repairs or replacement include missing or damaged shingles, leaks, water stains on ceilings or walls, and visible signs of wear and tear. We offer professional roof inspections to assess the condition of your roof and recommend the appropriate course of action.",
  },
  {
    question: "Is it necessary to have gutter guards installed?",
    answer:
      "Gutter guards can be beneficial for preventing debris buildup and clogs in your gutters, reducing the need for frequent cleaning and maintenance. However, their effectiveness may vary depending on factors such as the type of debris in your area and the design of your gutter system.",
  },
  {
    question: "How can I prevent ice dams from forming on my roof?",
    answer:
      "To prevent ice dams, ensure proper attic insulation and ventilation to maintain consistent temperatures on your roof. Additionally, keep your gutters clean and free of debris to allow for proper drainage, and consider installing heating cables or roof de-icing systems in problem areas.",
  },
  {
    question:
      "What are the benefits of seamless gutters over traditional sectional gutters?",
    answer:
      "Seamless gutters offer several advantages over traditional sectional gutters, including reduced risk of leaks and clogs, improved aesthetics, and easier maintenance. With no seams or joints along the gutter length, seamless gutters provide better water flow and durability for long-term performance.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <ImageHeader
        imageUrl={roofheader.src}
        heading="Roofing Services"
        subheading="Explore a world where comfort meets impeccable taste."
      />
      <CallToAction />
      <StarterServicesSection
        imageSrc={roofing.src}
        header="Roofing Services"
        paragraph="
Elevate your home's protection and aesthetic appeal with our comprehensive roofing services. From installation to repair and maintenance, we ensure top-notch craftsmanship and quality materials to safeguard your investment and enhance curb appeal. Trust our expertise to deliver exceptional results that exceed your expectations."
        buttonLabel="Get Started"
      />
      <ServiceValues />
      <CompanySlider />
      <ServiceBlock
        image={roofrepair.src}
        headerText="Unwavering Excellence and Craftsmanship"
        additionalText="What we do"
      >
        At Sucasa Paint and Roof Care, we pride ourselves on delivering unwavering excellence and craftsmanship in every roofing project. With meticulous attention to detail and quality materials, we ensure that your roof not only looks beautiful but also provides reliable protection for years to come. Whether its a minor repair or a complete roof replacement, you can trust our team to deliver superior results and exceptional service from start to finish.
      </ServiceBlock>

      <ServiceBlock
        image={roofgutter.src}
        headerText="Enhance Your Home's Protection with Expert Exterior Solutions"
        order="right"
      >
        Protect your home from the elements and enhance its curb appeal with our expert exterior solutions. From gutter installation to chimney flashing and skylight repair, our skilled team handles every aspect of your exterior with precision and care. With our commitment to quality craftsmanship and customer satisfaction, you can trust us to deliver lasting results that enhance the beauty and value of your home.
      </ServiceBlock>

      <ServicesOffered />
      <ImageGrid images={images} />
      <FAQList object={faqItems} header="Common Roof Repair and Gutter Questions" />
      <Footer />
    </>
  );
}
