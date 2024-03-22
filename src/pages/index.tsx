import "../app/globals.css";
import Navbar from "../components/layout/navbar";
import ImageHeader from "../components/layout/image-header";
import AboutSection from "@/components/layout/about-section";
import OurGoal from "@/components/layout/our-goal";
import LocationSteps from "@/components/layout/location-and-steps";
export default function Home() {
  return (
    <>
      <Navbar />
      <ImageHeader heading="Guarantee Greatness" subheading="Let our painting experts add color to your world!" imageUrl={"/images/home/house.jpg"} buttonLabel="Schedule an estimate"/> 
      <AboutSection />
      <OurGoal />
      <LocationSteps />
    </>
  );
}
