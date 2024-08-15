"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface ButtonProps {
    buttonType: "primary" | "secondary";
    label: string;
    backgroundColor: string;
    textColor?: string;
    onClick?: () => void; // Optional click handler
    className?: string; // Optional className for extra styling
    colSpan?: number; // Optional
    rowSpan?: number; // Optional
    link: string;

}



const Button = ({ buttonType, label, backgroundColor, textColor, onClick, className = "", link}: ButtonProps) => {
    const error = new Error("Debugging link reception");
    console.log("Received link:", link);
    console.error(error.stack); // This will print where the function was called from, though it can be verbose
    const pathname = usePathname();

    // Classes defined with fixed values for better Tailwind CSS compatibility
    const baseClasses = `py-2 px-6 shadow focus:outline-none focus:ring-2 focus:ring-opacity-50 font-poppins font-semibold text-sm md:text-base mt-5 ${className}`;
    const buttonClasses = buttonType === 'primary'
        ? `${baseClasses} bg-${backgroundColor} text-${textColor} focus:ring-${backgroundColor} hover:bg-white hover:border-${backgroundColor} hover:border-2 hover:text-${backgroundColor}`
        : `${baseClasses} border-2 border-${backgroundColor} text-${textColor} hover:bg-${backgroundColor} hover:text-white`;

    return (
        <Link href={link} passHref>
            <button className={buttonClasses} onClick={onClick}>
                {label}
            </button>
        </Link>
    );
};

export default Button;
