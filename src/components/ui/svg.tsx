import React from "react";

interface IconProps {
    svgComponent: React.ElementType;
    text?: string;
    width: number;
    height: number;
    textSize?: string;
};

export default function Svg({ svgComponent: SvgComponent, text, width, height, textSize}: IconProps) {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <SvgComponent className={`fill-red w-${width} h-${height}`}/>
                <h1 className={`font-poppins justify-center text-center ${textSize}`}>{text}</h1>
            </div>
        </>
    ); 
}
