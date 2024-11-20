import React from "react"

interface TextHeaderProps {
  headerText: string
  additionalText?: string
  headerTextColor?: string
  additionalTextColor?: string
  className?: string
  underlineColor?: string
  underlineWidth?: string
  underlineAlignment?: "left" | "center" | "right"
}

export default function TextHeader({
  headerText,
  additionalText,
  headerTextColor = "text-black",
  additionalTextColor = "text-black",
  className = "",
  underlineColor = "bg-red-600",
  underlineWidth = "w-16",
  underlineAlignment = "left",
}: TextHeaderProps) {
  const underlineAlignmentClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[underlineAlignment]

  return (
    <header className={`flex flex-col ${className}`}>
      {additionalText && (
        <h3 className={`font-poppins text-lg sm:text-xl md:text-2xl font-semibold ${additionalTextColor} mb-2`}>
          {additionalText}
        </h3>
      )}
      <h2 className={`font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${headerTextColor}`}>
        {headerText}
      </h2>
      <div className={`flex ${underlineAlignmentClass} mt-4`}>
        <span className={`h-1 ${underlineColor} ${underlineWidth}`}></span>
      </div>
    </header>
  )
}