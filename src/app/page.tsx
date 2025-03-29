import "../app/globals.css";
import Navbar from "../components/layout/navbar";
import ImageHeader from "../components/layout/image-header";
import AboutSection from "@/components/layout/about-section";
import OurGoal from "@/components/layout/our-goal";
import LocationSteps from "@/components/layout/location-and-steps";
import PortfolioSection from "@/components/layout/portfolio-section";
import MiniEstimateForm from "@/components/layout/mini-estimate-form";
import CallToAction from "@/components/layout/call-to-action";
import Footer from "@/components/layout/footer";
import headerImage from "../../public/images/projects/2298.png"
export default function Home() {
  return (
    
    <>
      <Navbar />
      {/* Image with optional blur */}
      <ImageHeader
        imageUrl={headerImage.src}
        heading="Transform Your Seattle Home"
        subheading="Professional interior and exterior painting services bringing vibrant, lasting color to homes throughout the Emerald City."
        buttonLabel="Get a Free Quote"
        buttonLink="/contact"
        overlayOpacity="light"
        height="large"
        textAlignment="center"
      />
      <AboutSection />
      <CallToAction />

      <OurGoal />
      <LocationSteps />
      <PortfolioSection />
      <MiniEstimateForm />
      <CallToAction />
      <Footer />
    </>
  );
}
