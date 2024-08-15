import React from "react";
import ImageHeader from "@/components/layout/image-header";
import Navbar from "@/components/layout/navbar";
import aboutheader from "../../../public/images/about/aboutheader.jpg";
import CallToAction from "@/components/layout/call-to-action";
import CompanySlider from "@/components/layout/services/company-slider";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import CallToActionCard from "@/components/layout/call-to-action-card";
import Testimonial from "@/components/layout/testimonial";
import ServiceArea from "@/components/layout/service-area";
import Bellevue from "../../../public/images/about/bellevue.png";
import Seattle from "../../../public/images/about/seattle.jpeg";
import Tacoma from "../../../public/images/about/tacoma.jpeg";
import Renton from "../../../public/images/about/renton.jpeg";
import Bothell from "../../../public/images/about/bothell.jpg";
import Redmond from "../../../public/images/about/redmond.jpg";
import Sammamish from "../../../public/images/about/sammamish.jpg";
import Monroe from "../../../public/images/about/monroe.jpg";
import Everett from "../../../public/images/about/everett.jpeg";
import Edmonds from "../../../public/images/about/edmonds.jpeg";
import Issaquah from "../../../public/images/about/issaquah.jpg";
import Woodinville from "../../../public/images/about/woodinville.jpg";
import ServiceBlock from "@/components/layout/services/service-block";

export default function Page() {
  return (
    <>
      <Navbar />
      <ImageHeader
        imageUrl={aboutheader.src}
        heading="About"
        subheading="Learn about what Sucasa Paint and Roof can do for you."
      />

      <div className="flex flex-col justify-center items-center xl:flex-row">
        <div className="w-full xl:w-1/4 p-10 text-center xl:text-left">
          <CallToActionCard />
          <Testimonial
            paragraph="I hired Sucasa Paint and Roof for an exterior painting job, and they exceeded all expectations! Their professionalism, attention to detail, and cleanliness transformed my home dramatically. It looks brand new, and the compliments haven't stopped. Highly recommend for their outstanding service and results!"
            name="Elliott"
          />
        </div>

        <div className="container font-poppins p-10">
          <h1 className="text-5xl font-bold text-center mb-10 text-red">
            The Premiere Painting Company in Western Washington
          </h1>

          <div className="flex flex-col justify-center items-center xl:flex-row">
            <div className="relative w-full h-96 xl:mr-10">
              <Image
                src={aboutheader}
                alt="Decorative image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md object-cover"
              />
            </div>

            <div className="mt-6 xl:mt-0">
              <p className="text-lg">
                Sucasa Paint and Roof was established in 2015 by Jesus Perez, a seasoned expert with over two decades of experience in the painting and roofing industry. Our company, rooted in the heart of our community, is dedicated to providing top-tier services in both residential and commercial sectors.
              </p>
              <p className="mt-6 text-lg">
                We understand that each homeowner has unique needs and financial constraints. To accommodate this, we provide a range of flexible options designed to align with your specific requirements and budget. Whether you're looking to refresh a single room or repaint your entire home, we can tailor a solution that suits your needs without compromising on quality.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl mt-10 font-poppins text-red font-bold">
              Free Consultation and Transparent Pricing
            </h2>
            <p className="text-lg mt-4">
              To further ease your decision, we offer a no-obligation, free consultation to discuss your painting project in detail. During this consultation, we provide clear, upfront pricing with no hidden fees. Our goal is to give you all the information you need to make an informed choice about your home improvement project.
            </p>
            <h2 className="text-3xl mt-10 font-poppins text-red font-bold">
              Convenient Scheduling
            </h2>
            <p className="text-lg mt-4">
              We also offer flexible scheduling options to minimize disruption to your daily life. Our team works efficiently and effectively, ensuring that all work is completed within the agreed timeline, allowing you to enjoy your newly transformed space as soon as possible.
            </p>
            <h2 className="text-3xl mt-10 font-poppins text-red font-bold">
              Quality Work Guaranteed
            </h2>
            <p className="text-lg mt-4 mb-10">
              With Sucasa Paint and Roof, you're not just getting a painting service; you're making an investment in your home. We stand behind our work with a satisfaction guarantee, ensuring that the finished product meets your expectations and our high standards.
            </p>
          </div>
        </div>
      </div>

      <CompanySlider />
      <CallToAction />
      <ServiceBlock 
        image={Bellevue.src} 
        headerText="Our Vision for the Future" 
      >
        At Sucasa Paint and Roof, our vision is centered on expanding our footprint and enhancing our capabilities in both the painting and roofing industries. As we move forward, we aim to adopt cutting-edge technologies and methodologies that not only improve the efficiency and quality of our services but also reduce our environmental impact.
      </ServiceBlock>

      <div className="flex flex-col mt-20">
        <h1 className="text-6xl text-center font-poppins text-blue font-bold mb-6">
          Areas We Serve
        </h1>
        <p className="text-center font-poppins text-2xl mb-10">
          Sucasa Paint and Roof proudly serves the following areas in Western Washington.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ServiceArea imageUrl={Bellevue.src} cityName="Bellevue" />
        <ServiceArea imageUrl={Seattle.src} cityName="Seattle" />
        <ServiceArea imageUrl={Tacoma.src} cityName="Tacoma" />
        <ServiceArea imageUrl={Renton.src} cityName="Renton" />
        <ServiceArea imageUrl={Bothell.src} cityName="Bothell" />
        <ServiceArea imageUrl={Redmond.src} cityName="Redmond" />
        <ServiceArea imageUrl={Sammamish.src} cityName="Sammamish" />
        <ServiceArea imageUrl={Monroe.src} cityName="Monroe" />
        <ServiceArea imageUrl={Everett.src} cityName="Everett" />
        <ServiceArea imageUrl={Edmonds.src} cityName="Edmonds" />
        <ServiceArea imageUrl={Issaquah.src} cityName="Issaquah" />
        <ServiceArea imageUrl={Woodinville.src} cityName="Woodinville" />
      </div>

      <Footer />
    </>
  );
}
