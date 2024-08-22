"use client";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ImageHeader from "@/components/layout/image-header";
import placeholder from "../../../public/images/placeholder.jpg";
import ContactForm from "@/components/layout/contactForm";
export default function Page() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <ImageHeader
        imageUrl={placeholder.src}
        heading="Contact Us"
        subheading="We'd love to hear from you!"
      />
      
      <ContactForm />
      
      <Footer />
    </div>
  );
}
