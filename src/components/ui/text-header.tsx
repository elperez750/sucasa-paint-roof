import React from "react";

interface TextHeaderProps {
  headerText: string;
  textColor?: string
}
export default function TextHeader({ headerText, textColor="black" }: TextHeaderProps) {
  return (
    <>
      <div className="flex flex-col p-6">
        <h1 className={`font-poppins text-2xl md:text-5xl font-bold text-center text-${textColor}`}>
          {headerText}
        </h1>
        <span className="flex h-1 bg-red w-10 justify-start items-center mt-2"></span>
      </div>
    </>
  );
}
