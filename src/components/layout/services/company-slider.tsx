import React from "react";
import Marquee from "react-fast-marquee";

import bathroom from "../../../../public/images/home/bathroom.jpeg";
import trimaco from "../../../../public/images/trimaco.jpeg";
import frogtape from "../../../../public/images/frogtape.png";
import purdy from "../../../../public/images/purdy.jpg";
import benjamin from "../../../../public/images/benjamin.jpeg";
import threem from "../../../../public/images/threem.jpg";
import sherwin from "../../../../public/images/sherwin.jpeg";

const images = [benjamin, purdy, threem, trimaco, sherwin, frogtape];

export default function CompanySlider() {
  return (
    <div className="flex flex-col justify-center items-center h-auto">
      <h1 className="font-poppins text-5xl font-bold mb-20">
        Brands that we trust
      </h1>
      <Marquee className="space-x-36 mb-20" pauseOnHover={true}>
        <div className="flex space-x-36 h-16">
          {images.concat(images).map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc.src}
              alt={`marquee-item-${index}`}
              className="space-x-36"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
