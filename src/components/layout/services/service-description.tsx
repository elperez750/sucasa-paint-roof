import React from "react";
import bathroom from "../../../../public/images/home/bathroom.jpeg";
import ServiceBlock from "./service-block";

export default function ServiceDescription() {
    return (
        <div className="flex flex-col bg-blue w-full">
         <ServiceBlock image={bathroom.src} headerText="Our Commitment to Quality and Precision" additionalText="What we do">
         Your home is more than just walls and a roof; its a canvas where your lifes most cherished moments are painted. Its where individuality meets comfort, where each corner can tell a story of who you are and what you love. At Sucasa Paint and Roof Care, we deeply understand this connection. We see beyond the bricks and mortar to the dreams and aspirations that your home embodies. Our commitment goes beyond mere renovations; we aim to translate your unique vision into reality, ensuring every brushstroke and every tile laid down is a testament to your individuality. Let us help you manifest your style, your way, with integrity, artistry, and unparalleled dedication to excellence that your personal space deserves.
        </ServiceBlock>
        <div className=""></div>
        <ServiceBlock image={bathroom.src} headerText="Tailored Solutions for Every Space" order="right" >
        At Sucasa Paint and Roof Care, we understand that each space is as unique as the individuals who inhabit it. This belief drives our dedication to providing tailored solutions that cater to the specific needs and aspirations of every client. Whether its a cozy cottage requiring a warm, inviting palette or a modern office space seeking a sleek, professional look, our team combines expertise with creativity to transform any area. We delve into the essence of each project, considering its distinct characteristics and the vision of those who live or work within it. Our approach ensures that every solution isnt just a service, but a personalized experience, designed to elevate and enrich every space we touch.
        </ServiceBlock>
        </div>
    );
}
