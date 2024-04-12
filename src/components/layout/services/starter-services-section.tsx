import React from 'react';
import Button from '@/components/ui/button';


interface StarterServicesSectionProps {
    header: string;
    paragraph: string;
    buttonLabel: string;
}

export default function StarterServicesSection({header, paragraph, buttonLabel}: StarterServicesSectionProps) {
    return (
        <div className="flex flex-col justify-center items-center mt-20 mb-20 font-poppint">
            <h1 className='text-3xl text-black font-poppins'>{header}</h1>
            <p className="font-poppins text-center mt-4 p-10">{paragraph}</p>
            <Button backgroundColor="red" buttonType="primary" textColor="white" label={buttonLabel} />
        </div>
    );
}

