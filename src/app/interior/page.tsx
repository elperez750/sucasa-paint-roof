import React from "react";
import ImageHeader from "@/components/layout/image-header";
import Navbar from "@/components/layout/navbar";
import Interior from "../../../public/images/interior/interior.jpg";
import CallToAction from "@/components/layout/call-to-action";
import StarterServicesSection from "@/components/layout/services/starter-services-section";
import ServiceValues from "@/components/layout/services/service-values";
import CompanySlider from "@/components/layout/services/company-slider";
import ServicesOffered from "@/components/layout/services/services-offered";
import bathroom from "../../../public/images/interior/bathroom.jpg";
import cabinet from "../../../public/images/interior/cabinet.jpg";
import door from "../../../public/images/interior/door.jpeg";
import kitchen from "../../../public/images/interior/kitchen.jpeg";
import room from "../../../public/images/interior/room.jpeg";
import trim from "../../../public/images/interior/trim.jpeg";
import window from "../../../public/images/interior/window.jpeg";
import staircase from "../../../public/images/interior/staircase.jpeg";
import ImageGrid from "@/components/layout/services/image-grid";
import { FAQ } from "@/components/layout/services/faq-item";
import FAQList from "@/components/layout/services/faq-list";
import Footer from "@/components/layout/footer";
import ServiceBlock from "@/components/layout/services/service-block";

const images = [
  {
    imageUrl: bathroom.src,
    imageHeading: "Bathroom Painting",
  },
  {
    imageUrl: cabinet.src,
    imageHeading: "Cabinet Painting",
  },
  {
    imageUrl: door.src,
    imageHeading: "Door Painting",
  },
  {
    imageUrl: kitchen.src,
    imageHeading: "Kitchen Painting",
  },
  {
    imageUrl: room.src,
    imageHeading: "Room Painting",
  },
  {
    imageUrl: trim.src,
    imageHeading: "Trim Painting",
  },
 
];

const faqItems: FAQ[] = [
  {
    question: "How long does interior painting usually take?",
    answer:
      "The duration depends on the size of the room, the type of paint, and the number of coats. Typically, a single room can take anywhere from a day to three days.",
  },
  {
    question: "Do I need to move all my furniture before you start painting?",
    answer:
      "We recommend moving smaller items and valuables yourself. For larger pieces, we can help cover and move them to the center of the room and protect them with drop cloths.",
  },
  {
    question: "What type of paint do you recommend for the kitchen?",
    answer:
      "For kitchens, we recommend using a semi-gloss or high-gloss finish because it's more durable and easier to clean compared to matte finishes.",
  },
  {
    question: "Can you paint over wallpaper?",
    answer:
      "Yes, we can, but it's not always recommended. It's best to remove the wallpaper for a smoother finish. If removal isn't an option, we'll make sure to properly prep the surface before painting.",
  },
  {
    question: "How do I choose the right paint color?",
    answer:
      "Consider the room's lighting, size, and your home decor. We offer color consultations to help you choose the perfect color to match your style and space.",
  },
  {
    question:
      "Is it safe to stay in my home while the interior is being painted?",
    answer:
      "Yes, it's safe. However, for those sensitive to paint fumes, it might be more comfortable to stay elsewhere until the paint has fully dried. We use low-VOC paints to minimize fumes and ensure your comfort.",
  },
  {
    question: "How do I prepare for the painting day?",
    answer:
      "Ensure all walls are free of decorations, and furniture is moved or covered. We'll handle the rest, including protecting flooring and any non-paintable surfaces.",
  },
  {
    question:
      "What's the difference between matte, eggshell, and gloss finishes?",
    answer:
      "Matte finishes offer a non-reflective look ideal for hiding imperfections. Eggshell has a slight sheen and is more durable than matte. Gloss finishes are highly reflective, making them easy to clean but more prone to showing imperfections.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <ImageHeader
        imageUrl={Interior.src}
        heading="Interior"
        subheading="Explore a world where comfort meets impecable taste."
      />
      <CallToAction />
      <StarterServicesSection
        imageSrc={kitchen.src}
        header="Interior Services"
        paragraph="
Experience the transformative power of a fresh coat of paint, a simple yet profoundly impactful way to rejuvenate and revitalize any space. This process is not just about changing a color; it's about renewing the very essence of your surroundings, imbuing them with a new spirit and vibrancy that can alter perceptions, influence moods, and enhance the overall ambiance. "
        buttonLabel="Get Started"
      />
      <ServiceValues />
      <CompanySlider />
      <ServiceBlock
        image={window.src}
        headerText="What we do"
        additionalText="Our Commitment to Quality and Precision"
      >
        At Sucasa Paint and Roof Care, we understand that each space is as
        unique as the individuals who inhabit it. This belief drives our
        dedication to providing tailored solutions that cater to the specific
        needs and aspirations of every client. Whether its a cozy cottage
        requiring a warm, inviting palette or a modern office space seeking a
        sleek, professional look, our team combines expertise with creativity to
        transform any area. We delve into the essence of each project,
        considering its distinct characteristics and the vision of those who
        live or work within it. Our approach ensures that every solution isnt
        just a service, but a personalized experience, designed to elevate and
        enrich every space we touch.
      </ServiceBlock>

      <ServiceBlock
        image={staircase.src}
        headerText="Tailored Solutions for Every Space"
        order="right"
      >
        We believe that every interior space is unique, deserving of its own
        identity and character. That's why we offer tailored solutions for every
        room, ensuring that each space reflects your individual style and
        personality. Whether it's a cozy bedroom, a vibrant kitchen, or an
        elegant living room, our team of experts works closely with you to
        understand your vision and bring it to life. From color selection to
        meticulous execution, we strive to create spaces that not only meet but
        exceed your expectations. With our personalized approach, we transform
        every corner of your home into a sanctuary of comfort and style, where
        every detail is carefully considered and crafted to perfection
      </ServiceBlock>
      <ServicesOffered />
      <ImageGrid images={images} />
      <FAQList object={faqItems} header="Common Interior Painting Questions" />
      <Footer />
    </>
  );
}
