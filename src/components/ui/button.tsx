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
      shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50
      font-poppins font-semibold text-sm md:text-base lg:text-lg
      rounded-md md:rounded-lg
      relative overflow-hidden
      transition-all duration-300 ease-in-out
      ${className}
    `

    const buttonClasses =
      buttonType === "primary"
        ? `${baseClasses} bg-${backgroundColor} text-${textColor} hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px]`
        : `${baseClasses} border-2 border-${backgroundColor} text-${backgroundColor} hover:translate-y-[-2px] hover:shadow-lg hover:border-opacity-70 active:translate-y-[0px]`

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