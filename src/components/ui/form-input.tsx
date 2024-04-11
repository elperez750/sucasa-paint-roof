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

  const styles = {
    backgroundColor: backgroundColor, // Ensuring the passed color is valid
    color: textColor,
    borderColor: borderColor, // Assuming borderColor is a valid CSS color
  };

  const baseClasses = `w-full p-4 border-2 rounded-sm `;

  return (
    <div className={`${gridSpanClass} font-poppins justify-center`}>
      <h1 className="text-lg font-bold text-white mb-2">{header}</h1>
      {inputSize === "regular" ? (
        <input
          type="text"
          className={`${baseClasses}`}
          placeholder={placeholder}
          style={styles}
        />
      ) : (
        
          <textarea
            className={`${baseClasses} h-56`} // h-48 is an arbitrary height, adjust as needed
            placeholder={placeholder}
            rows={2}
            cols={2}
          ></textarea>
      
        
      )}
    </div>
  );
}
