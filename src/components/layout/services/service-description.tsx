import React from "react";
import bathroom from "../../../../public/images/home/bathroom.jpeg";
import ServiceBlock from "./service-block";

export default function ServiceDescription() {
    return (
        <div className="flex flex-col bg-blue w-full">
         <ServiceBlock image={bathroom} headerText="Our Commitment to Quality and Precision" additionalText="What we do">
         Your home is more than just walls and a roof; it's a canvas where your life's most cherished moments are painted. It's where individuality meets comfort, where each corner can tell a story of who you are and what you love. At Sucasa Paint and Roof Care, we deeply understand this connection. We see beyond the bricks and mortar to the dreams and aspirations that your home embodies. Our commitment goes beyond mere renovations; we aim to translate your unique vision into reality, ensuring every brushstroke and every tile laid down is a testament to your individuality. Let us help you manifest your style, your way, with integrity, artistry, and unparalleled dedication to excellence that your personal space deserves.
        </ServiceBlock>
        <div className="mt-20"></div>
        <ServiceBlock image={bathroom} headerText="Our Commitment to Quality and Precision" additionalText="What we do" order="right" >
         Your home is more than just walls and a roof; it's a canvas where your life's most cherished moments are painted. It's where individuality meets comfort, where each corner can tell a story of who you are and what you love. At Sucasa Paint and Roof Care, we deeply understand this connection. We see beyond the bricks and mortar to the dreams and aspirations that your home embodies. Our commitment goes beyond mere renovations; we aim to translate your unique vision into reality, ensuring every brushstroke and every tile laid down is a testament to your individuality. Let us help you manifest your style, your way, with integrity, artistry, and unparalleled dedication to excellence that your personal space deserves.
        </ServiceBlock>
        </div>
    );
}
