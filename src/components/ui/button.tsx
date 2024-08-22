"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ButtonProps {
  buttonType: "primary" | "secondary";
  label: string;
  backgroundColor: string;
  textColor?: string;
  type?: "submit" | "button" | "reset" | undefined; // Optional for form buttons
  onClick?: () => void; // Optional click handler
  className?: string; // Optional className for extra styling
  colSpan?: number; // Optional
  rowSpan?: number; // Optional
  link?: string;
}

const Button = ({
  buttonType,
  label,
  backgroundColor,
  textColor = "white",
  onClick,
  type="button", // Set a default value for the type prop
  className = "",
  link,
}: ButtonProps) => {
  const pathname = usePathname();

  // Base classes for the button
  const baseClasses = `py-2 px-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 font-poppins font-semibold text-md mt-5 transition-transform duration-300 ease-in-out ${className}`;
  
  // Determine button styling based on buttonType
  const buttonClasses =
    buttonType === "primary"
      ? `${baseClasses} bg-${backgroundColor} text-${textColor} hover:bg-opacity-80 hover:scale-105`
      : `${baseClasses} border-2 border-${backgroundColor} text-${backgroundColor} hover:bg-${backgroundColor} hover:text-white hover:scale-105 `;


      if (link) {
        return (
          <Link href={link} passHref>
            <button className={buttonClasses} onClick={onClick} type={type}>
              {label}
            </button>
          </Link>
        );
      }

  return (
    
   
      <button className={buttonClasses} onClick={onClick} type={type}>
        {label}
      </button>
   
  );
};

export default Button;
