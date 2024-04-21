import React from 'react';
import Button from '@/components/ui/button';
import Image from 'next/image';
import bathroom from "../../../../public/images/home/bathroom.jpeg";

interface StarterServicesSectionProps {
    header: string;
    paragraph: string;
    buttonLabel: string;
}

export default function StarterServicesSection({ header, paragraph, buttonLabel }: StarterServicesSectionProps) {
    return (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="md:w-1/2 w-full md:mb-0 mb-10">
                <Image src={bathroom} width={500} height={500} alt="bathroom" className="object-cover object-center rounded-lg shadow-lg"/>
            </div>
          
            {/* Text Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-center items-start md:pl-10">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray font-poppins">{header}</h1>
                <p className="mb-8 leading-relaxed font-poppins">{paragraph}</p>
                <div className="flex justify-center md:justify-start">
                    <Button backgroundColor="red" buttonType="primary" textColor="white" label={buttonLabel} />
                </div>
            </div>
        </div>
    );
}
