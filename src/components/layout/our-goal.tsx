import React from "react";
import TextHeader from "../ui/text-header";
import ServicesCard from "./services-card";
import Link from "next/link";

export default function OurGoal() {
  return (
    <>
      <div className="flex flex-col justify-between items-center mt-20 p-20 text-center">
        <TextHeader headerText="Our Goal" />
        <p className="font-poppins text-lg mt-4">
          Our goal is to provide a platform for developers to showcase their
          skills and connect with potential employers. We want to make it easy
          for developers to find the right job for them and for employers to
          find the right developer for their team.
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-evenly ">
        <Link href="/interior">
        <ServicesCard
          imageUrl="/images/home/interior.jpg"
          header="Interior Painting"
          paragraph="Elevate Your Home with Sucasa Paint and Roof! Our expert interior painting services promise to transform your space with vibrant colors and flawless finishes. Let us bring your vision to life with elegance and precision. Refresh, renew, and beautify your home with us!"
        
        />
        </Link>

        <Link href="/exterior">
        <ServicesCard
          imageUrl="/images/home/exterior.jpg"
          header="Exterior Painting"
          paragraph="Revitalize Your Home's Exterior with Sucasa Paint and Roof! Trust us to enhance your curb appeal with our professional exterior painting services. Experience unmatched quality and durability, ensuring your home shines in the Seattle area. Transform your exterior into a masterpiece with us!"
        />
        </Link>

        <Link href="/roofing">
        <ServicesCard
          imageUrl="/images/home/roof_repair.jpeg"
          header="Roofing and Washing"
          paragraph="Protect and Perfect Your Home with Sucasa Paint and Roof! Our expert roof repair and pressure washing services ensure your home is both beautiful and durable. Experience top-notch maintenance that safeguards your home against the elements."
        />
        </Link>
      </div>

      )
    </>
  );
}
