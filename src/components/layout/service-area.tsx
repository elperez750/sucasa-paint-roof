import React from "react";
import Image from "next/image";

interface serviceAreaProps {
    imageUrl: string;
    cityName: string;
}


export default function ServiceArea({imageUrl, cityName}: serviceAreaProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative w-96 h-96 shadow transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
            <Image src={imageUrl} alt="service-area" layout="fill" className="rounded-md"/>
            </div>
            <h1 className="font-poppins text-3xl mt-6 text-blue font-semibold">{cityName}</h1>
        </div>
    );
}