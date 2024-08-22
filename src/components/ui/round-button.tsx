import React from "react";

interface RoundButtonProps {
  buttonType: "primary" | "secondary";
  label: string;
  backgroundColor: string;
  textColor?: string; // Changed to string to allow for more colors than just "white"
  onClick?: () => void; // Optional click handler
  className?: string; // Optional className for extra styling
}

const RoundButton: React.FC<RoundButtonProps> = ({
  buttonType,
  label,
  backgroundColor,
  textColor = "black", // Default textColor to "white"
  onClick,
  className = "",
}) => {
  const getButtonClasses = () => {
    let baseClasses = `py-2 px-6 shadow rounded-md font-medium font-poppins text-xs lg:text-lg ${className} `;
    if (buttonType === "primary") {
      return `${baseClasses} bg-${backgroundColor} text-white focus:ring-${backgroundColor}`;
    } else {
      return `${baseClasses} border-${backgroundColor} border-4 text-${textColor} focus:ring-${backgroundColor}`;
    }
  };

  return (
    <button className={getButtonClasses()} onClick={onClick}>
      {label}
    </button>
  );
};

export default RoundButton;
