import React from "react";
import Image from "next/image";
import {
  FaPaintBrush,
  FaTrophy,
  FaHandshake,
  FaShieldAlt,
  FaLeaf,
  FaDollarSign,
} from "react-icons/fa";
import Button from "../ui/button";
import RoundButton from "../ui/round-button";
import { IconType } from "react-icons";

interface FeatureIconProps {
  Icon: IconType;
  text: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ Icon, text }) => (
  <div className="flex flex-col items-center text-center transition-transform hover:scale-105 font-poppins">
    <Icon className="text-blue w-10 h-10 md:w-12 md:h-12 mb-3" />
    <p className="text-sm md:text-base font-medium text-gray-700">{text}</p>
  </div>
);

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonLabel: string;
  buttonLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  buttonLabel,
  buttonLink,
}) => (
  <div className="relative w-full max-w-md mx-auto xl:mx-4 transform transition duration-300 hover:scale-[1.02] font-poppins">
    <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl bg-white">
      <div className="relative h-60 md:h-64 lg:h-72">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      </div>
      <div className="p-6 relative z-20">
        <h2 className="text-xl md:text-2xl font-bold text-center text-blue mb-2">
          {title}
        </h2>
        <span className="block h-1 w-16 bg-red mx-auto mb-4 rounded" />
        <p className="text-gray-700 text-sm md:text-base mb-6 text-center">
          {description}
        </p>
        <div className="flex justify-center">
          <RoundButton
            buttonType="secondary"
            backgroundColor="black"
            label={buttonLabel}
            link={buttonLink}
          />
        </div>
      </div>
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-20 font-poppins">
      {/* Intro Heading */}
      <div className="text-center mb-16">
        <h2 className="text-red text-xl md:text-2xl font-medium mb-3">
          When it comes to painting
        </h2>
        <h3 className="text-blue font-extrabold text-3xl md:text-4xl">
          Our work is nothing short of stunning
        </h3>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          With over a decade of experience, we bring color, protection, and peace of mind to every home we touch.
        </p>
      </div>

      {/* Feature Icons */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
        <FeatureIcon Icon={FaPaintBrush} text="Quality" />
        <FeatureIcon Icon={FaTrophy} text="Experience" />
        <FeatureIcon Icon={FaDollarSign} text="Competitive Pricing" />
        <FeatureIcon Icon={FaHandshake} text="Satisfaction Guaranteed" />
        <FeatureIcon Icon={FaShieldAlt} text="Licensed & Insured" />
        <FeatureIcon Icon={FaLeaf} text="Eco-Friendly" />
      </div>

      {/* Why Choose Us Strip */}
      <div className="bg-blue-50 py-12 px-6 rounded-xl shadow-inner mb-20 text-center">
        <h4 className="text-2xl font-bold text-blue mb-4">Why Choose Sucasa?</h4>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
          We don't just paint houses — we transform homes. From first brushstroke to final cleanup, our team ensures every detail is flawless. With transparent pricing and a trusted local presence, you're in good hands.
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center mb-20">
        <Button
          backgroundColor="black"
          buttonType="primary"
          textColor="white"
          label="Schedule an Estimate"
          link="/contact"
        />
      </div>

      {/* Cards */}
      <div className="flex flex-col xl:flex-row justify-center items-stretch gap-10 xl:gap-12 mb-20">
        <Card
          title="Our Mission"
          description="Sucasa Paint and Roof, a trusted contractor in Seattle, is dedicated to excellence. Led by Jesus Perez, we deliver superior craftsmanship with hands-on attention to detail that exceeds expectations."
          imageSrc="/images/home/jesus.jpg"
          buttonLabel="Learn More"
          buttonLink="/about"
        />
        <Card
          title="Our Promise"
          description="We guarantee top-quality painting and roofing tailored to your needs. With professionalism, timeliness, and transparency, your satisfaction and peace of mind come first."
          imageSrc="/images/home/paintbrush.jpg"
          buttonLabel="Get Started"
          buttonLink="/contact"
        />
      </div>

      {/* Quote/Testimonial */}
      <div className="bg-gray-100 px-6 py-10 rounded-lg shadow text-center">
        <blockquote className="text-lg md:text-xl italic text-gray-800 max-w-3xl mx-auto">
          “Sucasa Paint transformed our house beyond what we imagined. They were timely, professional, and left everything spotless. Highly recommend!”
        </blockquote>
        <p className="mt-4 font-semibold text-blue">– A Happy Homeowner in Sultan, WA</p>
      </div>
    </section>
  );
};

export default AboutSection;
