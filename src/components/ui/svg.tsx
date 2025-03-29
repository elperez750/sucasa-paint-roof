import React from "react";

interface IconProps {
  svgComponent: React.ElementType;
  text?: string;
  width: number;
  height: number;
  textSize?: string;
}

export default function Svg({
  svgComponent: SvgComponent,
  text,
  width,
  height,
  textSize,
}: IconProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <SvgComponent style={{ width, height }} className="fill-red" />
      {text && <h1 className={`font-poppins ${textSize}`}>{text}</h1>}
    </div>
  );
}
