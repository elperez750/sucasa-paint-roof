import React from "react"
import Image from "next/image"
import { FaPaintBrush, FaTrophy, FaHandshake, FaShieldAlt, FaLeaf, FaDollarSign } from "react-icons/fa"
import Button from "../ui/button"
import RoundButton from "../ui/round-button"
import { IconType } from "react-icons"

interface FeatureIconProps {
  Icon: IconType
  text: string
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ Icon, text }) => (
  <div className="flex flex-col items-center mb-8 px-4">
    <Icon className="text-blue w-12 h-12 mb-2" />
    <p className="text-center text-sm font-poppins">{text}</p>
  </div>
)

interface CardProps {
  title: string
  description: string
  imageSrc: string
  buttonLabel: string
  buttonLink: string
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, buttonLabel, buttonLink }) => (
  <div className="relative w-full max-w-md mx-auto mb-10 xl:mb-0 xl:mx-4 shadow transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray-100">
    <div className="absolute inset-0 bg-blue rounded-lg shadow-lg" />
    <div className="relative left-2 top-3 bg-white border rounded-lg shadow-lg overflow-hidden">
      <div className="md:h-48 relative">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
      </div>
      <div className="p-6">
        <h2 className="font-poppins text-xl md:text-2xl font-bold text-center mb-2">{title}</h2>
        <span className="block h-1 bg-red w-full mb-4"></span>
        <p className="text-gray text-sm md:text-base font-poppins mb-6">{description}</p>
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
)

const AboutSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-red font-poppins text-2xl md:text-3xl mb-4">
          When it comes to painting
        </h2>
        <h3 className="text-blue font-poppins font-bold text-2xl md:text-3xl">
          Our work is nothing short of stunning
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        <FeatureIcon Icon={FaPaintBrush} text="Quality" />
        <FeatureIcon Icon={FaTrophy} text="Experience" />
        <FeatureIcon Icon={FaDollarSign} text="Competitive Pricing" />
        <FeatureIcon Icon={FaHandshake} text="Customer Satisfaction Guaranteed" />
        <FeatureIcon Icon={FaShieldAlt} text="Licensed and Insured" />
        <FeatureIcon Icon={FaLeaf} text="Eco-Friendly" />
      </div>

      <div className="text-center mb-16">
        <Button
          backgroundColor="black"
          buttonType="primary"
          textColor="white"
          label="Schedule an estimate"
          link="/contact"
        />
      </div>

      <div className="flex flex-col xl:flex-row justify-center items-stretch space-y-10 xl:space-y-0 xl:space-x-8">
        <Card
          title="Our Mission"
          description="Sucasa Paint and Roof, a leading bonded and insured painting and roofing contractor, proudly serves the Seattle area. Owned and operated by Jesus Perez, we are committed to excellence in every project. Jesus' hands-on approach and meticulous attention to detail ensure that our work not only meets but exceeds the highest standards of quality, professionalism, and craftsmanship."
          imageSrc="/images/home/jesus.jpg"
          buttonLabel="Learn More"
          buttonLink="/about"
        />
        <Card
          title="Our Promise"
          description="With Sucasa Paint and Roof, we guarantee top-quality painting and roofing services tailored to meet your needs. Your satisfaction is our priority, with a commitment to professionalism, timely completion, and open communication. We promise not just to meet your expectations but to exceed them, ensuring your project is completed to the highest standard with peace of mind included."
          imageSrc="/images/home/paintbrush.jpg"
          buttonLabel="Get Started"
          buttonLink="/contact"
        />
      </div>
    </section>
  )
}

export default AboutSection