"use client"

import React from "react"
import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "primary" | "secondary"
  label: string
  backgroundColor: string
  textColor?: string
  link?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      buttonType,
      label,
      backgroundColor,
      textColor = "white",
      className = "",
      link,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8
      shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50
      font-poppins font-semibold text-sm md:text-base lg:text-lg
      rounded-md md:rounded-lg
      transition-all duration-300 ease-in-out
      ${className}
    `

    const buttonClasses =
      buttonType === "primary"
        ? `${baseClasses} bg-${backgroundColor} text-${textColor} hover:bg-opacity-80 hover:scale-105 active:bg-opacity-90 active:scale-100`
        : `${baseClasses} border-2 border-${backgroundColor} text-${backgroundColor} hover:bg-${backgroundColor} hover:text-${textColor} hover:scale-105 active:bg-opacity-90 active:scale-100`

    const buttonElement = (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{label}</span>
      </button>
    )

    if (link) {
      return (
        <Link href={link} passHref legacyBehavior>
          {buttonElement}
        </Link>
      )
    }

    return buttonElement
  }
)

Button.displayName = "Button"

export default Button