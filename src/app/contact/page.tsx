"use client";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ImageHeader from "@/components/layout/image-header";
import contactUsImage from "../../../public/images/projects/IMG_5940.png";
import ContactForm from "@/components/layout/contactForm";
export default function Page() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <ImageHeader
        imageUrl={contactUsImage.src}
        heading="Contact Us"
        subheading="We'd love to hear from you!"
      />
      
      <ContactForm />
      
      <Footer />
    </div>
  );
}
