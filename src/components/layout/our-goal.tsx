import React from "react"
import TextHeader from "../ui/text-header"
import ServicesCard from "./services-card"
import Link from "next/link"

export default function OurGoal() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <TextHeader headerText="Our Goal" />
        <p className="font-poppins text-lg mt-6 text-gray-700 leading-relaxed">
          Our goal is to provide a platform for developers to showcase their
          skills and connect with potential employers. We want to make it easy
          for developers to find the right job for them and for employers to
          find the right developer for their team.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/interior" className="block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
          <ServicesCard
            imageUrl="/images/home/interior.jpg"
            header="Interior Painting"
            paragraph="Elevate Your Home with Sucasa Paint and Roof! Our expert interior painting services promise to transform your space with vibrant colors and flawless finishes. Let us bring your vision to life with elegance and precision. Refresh, renew, and beautify your home with us!"
            link="/interior"
          />
        </Link>

        <Link href="/exterior" className="block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
          <ServicesCard
            imageUrl="/images/home/exterior.jpg"
            header="Exterior Painting"
            paragraph="Revitalize Your Home's Exterior with Sucasa Paint and Roof! Trust us to enhance your curb appeal with our professional exterior painting services. Experience unmatched quality and durability, ensuring your home shines in the Seattle area. Transform your exterior into a masterpiece with us!"
            link="/exterior"
          />
        </Link>

        <Link href="/roofing" className="block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
          <ServicesCard
            imageUrl="/images/home/roof_repair.jpeg"
            header="Roofing and Washing"
            paragraph="Protect and Perfect Your Home with Sucasa Paint and Roof! Our expert roof repair and pressure washing services ensure your home is both beautiful and durable. Experience top-notch maintenance that safeguards your home against the elements."
            link="/roofing"
          />
        </Link>
      </div>
    </section>
  )
}