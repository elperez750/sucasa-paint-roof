import React from "react";

interface FormInputProps {
  header: string;
  inputSize?: "regular" | "large";
  textColor?: string;
  backgroundColor?: string;
  placeholder: string;
  name: string;
  borderColor: string;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default function FormInput({
  header,
  inputSize,
  backgroundColor = "white",
  name,
  textColor = "black",
  placeholder,
  borderColor,
  value,
  colSpan = 1,
  rowSpan = 1,
  className = "",
  onChange,
}: FormInputProps) {
  const gridSpanClass = `col-span-${colSpan} row-span-${rowSpan}`;

  const styles = {
    backgroundColor: backgroundColor, // Ensuring the passed color is valid
    color: textColor,
    borderColor: borderColor, // Assuming borderColor is a valid CSS color
    className:  className,
  };

  const baseClasses = `w-full p-4 border-2 rounded-sm ${className}`;

  return (
    <div className={`${gridSpanClass} font-poppins justify-center`}>
      <h1 className="text-lg font-bold text-white mb-2">{header}</h1>
      {inputSize === "regular" ? (
        <input
          name={name}
          onChange={onChange}
          type="text"
          className={`${baseClasses}`}
          placeholder={placeholder}
          style={styles}
          value={value}
        />
      ) : (
        
          <textarea
          
            className={`${baseClasses} h-56`} 
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            rows={2}
            cols={2}
            style={styles}
            value={value}
          ></textarea>
      
        
      )}
    </div>
  );
}
