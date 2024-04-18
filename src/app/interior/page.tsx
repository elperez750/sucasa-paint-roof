import React from "react";
import ImageHeader from "@/components/layout/image-header";
import Navbar from "@/components/layout/navbar";
import Interior from "../../../public/images/interior/interior.jpg";
import CallToAction from "@/components/layout/call-to-action";
import StarterServicesSection from "@/components/layout/services/starter-services-section";
import ServiceValues from "@/components/layout/services/service-values";
import ServiceDescription from "@/components/layout/services/service-description";
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

const images = [{
  imageUrl: bathroom.src,
  imageHeading: "Bathroom Painting"
},
{
  imageUrl: cabinet.src,
  imageHeading: "Cabinet Painting"
},
{
  imageUrl: door.src,
  imageHeading: "Door Painting"
},
{
  imageUrl: kitchen.src,
  imageHeading: "Kitchen Painting"
},
{
  imageUrl: room.src,
  imageHeading: "Room Painting"
},
{
  imageUrl: trim.src,
  imageHeading: "Trim Painting"
},
{
  imageUrl: window.src,
  imageHeading: "Window Painting"
},
{
  imageUrl: staircase.src,
  imageHeading: "Staircase Painting"
},
]

const faqItems: FAQ[] = [
  { 
    question: "How long does interior painting usually take?", 
    answer: "The duration depends on the size of the room, the type of paint, and the number of coats. Typically, a single room can take anywhere from a day to three days." 
  },
  { 
    question: "Do I need to move all my furniture before you start painting?", 
    answer: "We recommend moving smaller items and valuables yourself. For larger pieces, we can help cover and move them to the center of the room and protect them with drop cloths." 
  },
  { 
    question: "What type of paint do you recommend for the kitchen?", 
    answer: "For kitchens, we recommend using a semi-gloss or high-gloss finish because it's more durable and easier to clean compared to matte finishes." 
  },
  { 
    question: "Can you paint over wallpaper?", 
    answer: "Yes, we can, but it's not always recommended. It's best to remove the wallpaper for a smoother finish. If removal isn't an option, we'll make sure to properly prep the surface before painting." 
  },
  { 
    question: "How do I choose the right paint color?", 
    answer: "Consider the room's lighting, size, and your home decor. We offer color consultations to help you choose the perfect color to match your style and space." 
  },
  { 
    question: "Is it safe to stay in my home while the interior is being painted?", 
    answer: "Yes, it's safe. However, for those sensitive to paint fumes, it might be more comfortable to stay elsewhere until the paint has fully dried. We use low-VOC paints to minimize fumes and ensure your comfort." 
  },
  { 
    question: "How do I prepare for the painting day?", 
    answer: "Ensure all walls are free of decorations, and furniture is moved or covered. We'll handle the rest, including protecting flooring and any non-paintable surfaces." 
  },
  { 
    question: "What's the difference between matte, eggshell, and gloss finishes?", 
    answer: "Matte finishes offer a non-reflective look ideal for hiding imperfections. Eggshell has a slight sheen and is more durable than matte. Gloss finishes are highly reflective, making them easy to clean but more prone to showing imperfections." 
  },
]


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
        header="Sucasa Interior Services"
        paragraph="
Experience the transformative power of a fresh coat of paint, a simple yet profoundly impactful way to rejuvenate and revitalize any space. This process is not just about changing a color; it's about renewing the very essence of your surroundings, imbuing them with a new spirit and vibrancy that can alter perceptions, influence moods, and enhance the overall ambiance. A fresh coat of paint can breathe life into a dull room, making it feel more spacious, brighter, and more inviting. It's an expression of creativity and personal style, allowing you to customize your environment to reflect your tastes and preferences. Whether opting for a bold, dramatic hue to make a statement or a soft, subtle shade to create a tranquil retreat, the choice of color can completely transform the look and feel of a space."
        buttonLabel="Get Started"
      />
      <ServiceValues />
      <CompanySlider />
      <ServiceDescription />
   
      <ServicesOffered />
      <ImageGrid images={images} />
      <FAQList object={faqItems} header="Common Interior Painting Questions"/>
      <Footer />
    </>
  );
}
