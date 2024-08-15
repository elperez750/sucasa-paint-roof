import React from 'react'
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ImageHeader from '@/components/layout/image-header';
import placeholder from "../../../public/images/placeholder.jpg";


export default function Page() {
  return (
    <div>
      <Navbar />
      <ImageHeader
        imageUrl={placeholder.src}
        heading="Contact Us"
        subheading="We'd love to hear from you!"

        />
      <Footer />

    </div>
  )
}
