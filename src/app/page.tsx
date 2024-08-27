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
export default function Home() {
  return (
    <>
      <Navbar />
      <ImageHeader
        heading="Exceeding Expectation"
        
        subheading="Let our painting experts add color to your world!"
        imageUrl={"/images/home/house.jpg"}
        buttonLabel="Schedule an estimate"
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
