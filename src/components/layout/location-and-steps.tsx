import React from "react"
import ImageHeader from "./image-header"
import TextHeader from "../ui/text-header"
import StepCard from "./step-cards"
import Button from "../ui/button"

export default function LocationSteps() {
  return (
    <section className="py-20 bg-gray-50">
      <ImageHeader
        heading="Serving Washington since 2001"
        subheading="Since 2001, Sucasa Paint and Roof Care has proudly served the Seattle community, ensuring every customer feels completely satisfied. We're not just a company; we're your neighbors, dedicated to transforming your homes with our painting and roofing services."
        imageUrl="/images/projects/ghibi.png"
        buttonLabel="View Service Areas"
        color="white"
      />
      <div className="container mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <TextHeader headerText="A seamless experience from start to finish" />
          <h2 className="text-red-600 text-sm md:text-xl font-poppins mt-4">
            We make sure the experience goes smoothly
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StepCard
            imageUrl="/images/home/cabinet.jpg"
            iconUrl="/images/swatch.svg"
            text="Step 1"
            heading="Schedule a free estimate"
            paragraph="Begin your journey to a refreshed space by scheduling a no-obligation, free estimate. Our expert will assess the area, understand your requirements, and provide a detailed quote tailored to your needs."
          />
          <StepCard
            imageUrl="/images/home/bathroom.jpeg"
            iconUrl="/images/hammer.svg"
            text="Step 2"
            heading="Finalize Details"
            paragraph="Once you've approved the estimate, our team gets to work. We'll protect your belongings, prep the surfaces ensuring they're clean and ready, and then apply premium-quality paints using the best techniques. Our aim is not just to paint but to provide an artful transformation."
          />
          <StepCard
            imageUrl="/images/home/gutter.jpeg"
            iconUrl="/images/househeart.svg"
            text="Step 3"
            heading="Get Transformed"
            paragraph="After the paint dries, join us for a final walkthrough. We'll address any of your concerns and ensure that the results meet our mutual expectations. Your satisfaction is our primary goal, and our job isn't done until you're delighted with the transformation."
          />
        </div>
        <div className="flex justify-center mt-12">
          <Button
            buttonType="primary"
            backgroundColor="black"
            textColor="white"
            label="Schedule an estimate"
            link='/contact'
          />
        </div>
      </div>
    </section>
  )
}