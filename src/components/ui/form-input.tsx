import React from "react"

interface FormInputProps {
  header: string
  inputSize?: "regular" | "large"
  textColor?: string
  backgroundColor?: string
  placeholder: string
  name: string
  borderColor: string
  colSpan?: number
  rowSpan?: number
  className?: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: string
  required?: boolean
}

export default function FormInput({
  header,
  inputSize = "regular",
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
  type = "text",
  required = false,
}: FormInputProps) {
  const gridSpanClass = `col-span-${colSpan} row-span-${rowSpan}`

  const inputStyles = {
    backgroundColor,
    color: textColor,
    borderColor,
  }

  const baseClasses = `w-full p-4 border-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 ${className}`

  const InputComponent = inputSize === "large" ? "textarea" : "input"

  return (
    <div className={`${gridSpanClass} font-poppins`}>
      <label htmlFor={name} className="block text-lg font-bold text-white mb-2">
        {header}
      </label>
      <InputComponent
        id={name}
        name={name}
        onChange={onChange}
        type={inputSize === "regular" ? type : undefined}
        className={baseClasses}
        placeholder={placeholder}
        style={inputStyles}
        value={value}
        required={required}
        rows={inputSize === "large" ? 4 : undefined}
      />
    </div>
  )
}