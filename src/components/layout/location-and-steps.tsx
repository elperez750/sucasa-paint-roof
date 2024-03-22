import React from 'react'
import Image from 'next/image';

import ImageHeader from './image-header';
import CallToAction from './call-to-action';
import TextHeader from '../ui/text-header';
import StepCard from './step-cards';

export default function LocationSteps() {
    return (
        <div className="mt-20 mb-20">
        <ImageHeader heading="Serving Washington since 2001" subheading="Since 2001, Sucasa Paint and Roof Care has proudly served the Seattle community, ensuring every customer feels completely satisfied. We're not just a company; we're your neighbors, dedicated to transforming your homes with our painting and roofing services. It's the smiles and the trust of our clients that motivate us every day. Here's to making more Seattle homes beautiful, one project at a time." imageUrl='/images/home/seattle.jpeg' buttonLabel='View Service Areas'/>
        <CallToAction />
        <div className="flex flex-col justify-center items-center mt-20">
            <TextHeader headerText="A seamless experience from start to finish" />
            <h2 className="text-red text-xl font-poppins">We make sure the experience goes smoothly</h2>
        </div>
        <div className="flex justify-evenly p-10">
            
            <StepCard imageUrl='/images/home/cabinet.jpg' iconUrl="/images/swatch.svg" text="Step 1"/>
            <StepCard imageUrl='/images/home/bathroom.jpeg' iconUrl="/images/hammer.svg" text="Step 2"/>
            <StepCard imageUrl='/images/home/gutter.jpeg' iconUrl="/images/househeart.svg" text="Step 3"/>
                
         
        </div>
        
        
        </div>
        
    )
}

