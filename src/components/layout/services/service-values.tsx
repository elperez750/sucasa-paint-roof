import React from "react"
import { FaLightbulb, FaAward, FaUsers, FaHandshake, FaChartLine, FaBalanceScale } from "react-icons/fa"
import { IconType } from "react-icons"

interface ValueCardProps {
  Icon: IconType
  title: string
  description: string
  bgColor: string
}

const ValueCard: React.FC<ValueCardProps> = ({ Icon, title, description, bgColor }) => (
  <div className={`flex flex-col items-center justify-center ${bgColor} p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105`}>
    <Icon className="w-12 h-12 text-blue mb-4" />
    <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-poppins">{title}</h3>
    <p className="text-sm md:text-base text-center mt-4 font-poppins italic">{description}</p>
  </div>
)

export default function ServiceValues() {
  const values = [
    {
      Icon: FaLightbulb,
      title: "Innovation",
      description: "Innovating at every turn, we aim to lead with creative solutions that set new industry standards.",
      bgColor: "bg-light_gray",
    },
    {
      Icon: FaAward,
      title: "Quality",
      description: "Our focus on quality ensures excellence in every detail of our projects, surpassing expectations.",
      bgColor: "bg-white",
    },
    {
      Icon: FaUsers,
      title: "Team Work",
      description: "Through collaboration, our team unites to overcome challenges and achieve collective success.",
      bgColor: "bg-light_gray",
    },
    {
      Icon: FaHandshake,
      title: "Commitment",
      description: "Our commitment drives us to exceed in delivering on our promises with integrity and dedication.",
      bgColor: "bg-white",
    },
    {
      Icon: FaChartLine,
      title: "Leadership",
      description: "Our leaders inspire progress, guiding our team with vision and fostering an environment of excellence.",
      bgColor: "bg-light_gray",
    },
    {
      Icon: FaBalanceScale,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical conduct in all our business practices.",
      bgColor: "bg-white",
    },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-poppins text-xl md:text-2xl text-gray-600 mb-2">Our Values</h2>
          <h3 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            The values that drive our work
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  )
}