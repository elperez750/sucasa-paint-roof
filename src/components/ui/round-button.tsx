import React from "react";
import Link from "next/link";

interface RoundButtonProps {
  buttonType: "primary" | "secondary";
  label: string;
  backgroundColor: string;
  textColor?: string; // Changed to string to allow for more colors than just "white"
  onClick?: () => void; // Optional click handler
  className?: string; // Optional className for extra styling
  link?: string;
  type?: string; // Optional
}

const RoundButton: React.FC<RoundButtonProps> = ({
  buttonType,
  label,
  backgroundColor,
  textColor = "black", // Default textColor to "white"
  onClick,
  className = "",
  link,
  type
}) => {
  const getButtonClasses = () => {
    let baseClasses = `py-2 px-6 shadow rounded-md font-medium font-poppins text-xs lg:text-lg ${className} `;
    if (buttonType === "primary") {
      return `${baseClasses} bg-${backgroundColor} text-white focus:ring-${backgroundColor}`;
    } else {
      return `${baseClasses} border-${backgroundColor} border-4 text-${textColor} focus:ring-${backgroundColor}`;
    }
  };

  if (link) {
    return (
      <Link href={link} passHref>
        <button className={getButtonClasses()} onClick={onClick} >
          {label}
        </button>
      </Link>
    );
  }


  return (
    <button className={getButtonClasses()} onClick={onClick}>
      {label}
    </button>
  );
};

export default RoundButton;
