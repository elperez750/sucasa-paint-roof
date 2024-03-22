import React from "react";

type IconProps = {
    svgComponent: React.ElementType;
    text?: string;
    width: number;
    height: number;
};

export default function Svg({ svgComponent: SvgComponent, text, width, height}: IconProps) {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <SvgComponent className={`fill-red w-${width} h-${height}`}/>
                <h1 className="font-poppins justify-center text-center">{text}</h1>
            </div>
        </>
    ); 
}
