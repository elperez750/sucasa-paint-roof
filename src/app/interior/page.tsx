import React from "react";
import ImageHeader from "@/components/layout/image-header";
import Navbar from "@/components/layout/navbar";
import Interior from "../../../public/images/interior/interior.jpg";
import CallToAction from "@/components/layout/call-to-action";
import StarterServicesSection from "@/components/layout/services/starter-services-section";
import ServiceValues from "@/components/layout/services/service-values";
import ServiceDescription from "@/components/layout/services/service-description";
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
      <ServiceDescription />
    </>
  );
}
