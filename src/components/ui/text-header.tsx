import React from "react";

interface TextHeaderProps {
  headerText: string;
}
export default function TextHeader({ headerText }: TextHeaderProps) {
  return (
    <>
      <div className="flex flex-col mb-5 p-10">
        <h1 className="font-poppins text-base md:text-3xl font-bold text-center">
          {headerText}
        </h1>
        <span className="flex h-1 bg-red w-10 justify-start items-center mt-2"></span>
      </div>
    </>
  );
}
