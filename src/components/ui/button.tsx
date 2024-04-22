import React from 'react';

interface ButtonProps {
    buttonType: "primary" | "secondary";
    label: string;
    backgroundColor: string;
    textColor?: string;
    onClick?: () => void; // Optional click handler
    className?: string; // Optional className for extra styling
    colSpan?: number; // Optional
    rowSpan?: number; // Optional

}

const Button: React.FC<ButtonProps> = ({ buttonType, label,backgroundColor, textColor, onClick, className = "" }) => {
    const getButtonClasses = () => {
        
        const baseClasses = ` py-2 px-6 shadow focus:outline-none focus:ring-2 focus:ring-opacity-50 transition ease-in-out duration-150 font-poppins font-semibold text-sm md:text-base mt-5 ${className}`;
        if (buttonType === "primary") {
            // For primary, we apply a background color
            return `${baseClasses} bg-${backgroundColor} text-${textColor} focus:ring-${backgroundColor}`;
        } else {
            // For secondary, we apply a border color
            return `${baseClasses} border-${backgroundColor} border-4 text-${textColor} focus:ring-${backgroundColor}`;
        }
    };

    return (
        <button 
            className={getButtonClasses()}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
