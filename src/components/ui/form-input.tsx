import React from "react";

interface FormInputProps {
  header: string;
  inputSize?: "regular" | "large";
  textColor?: string;
  backgroundColor?: string;
  placeholder: string;
  borderColor: string;
  colSpan?: number;
  rowSpan?: number;
}
export default function FormInput({
  header,
  inputSize,
  backgroundColor = "white",
  textColor = "black",
  placeholder,
  borderColor,
  colSpan = 1,
  rowSpan = 1,
}: FormInputProps) {
  const gridSpanClass = `col-span-${colSpan} row-span-${rowSpan}`;

  const baseClasses = `w-full p-4 border-2 rounded-sm focus:ring-${backgroundColor} text-${textColor} bg-${backgroundColor} border-${borderColor}`;

  return (
    <div className={`${gridSpanClass} flex flex-col font-poppins justify-center`}>
      <h1 className="text-lg font-bold text-white mb-2">{header}</h1>
      {inputSize === "regular" ? (
        <input
          type="text"
          className={`${baseClasses}`}
          placeholder={placeholder}
        />
      ) : (
        
          <textarea
            className={`${baseClasses} h-56`} // h-48 is an arbitrary height, adjust as needed
            placeholder={placeholder}
          />
      
        
      )}
    </div>
  );
}
