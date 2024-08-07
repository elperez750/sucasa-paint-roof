import React from "react";

interface TextHeaderProps {
  headerText: string;
  additionalText?: string;
  headerTextColor?: string;
  additionalTextColor?: string;
}
export default function TextHeader({ headerText, additionalTextColor="black", headerTextColor="black", additionalText}: TextHeaderProps) {
  return (
    <>
      <div className="flex flex-col">
        <h3 className={`font-poppins text-lg md:text-3xl font-bold text-${additionalTextColor}`}>{additionalText}</h3>
        <h1 className={`font-poppins text-2xl md:text-5xl font-bold text-${headerTextColor}`}>
          {headerText}
        </h1>
        <span className="flex h-1 bg-red w-10 justify-start items-center mt-2"></span>
      </div>
    </>
  );
}
