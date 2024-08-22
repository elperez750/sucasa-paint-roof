import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type ImageSliderProps = {
  imageUrls: string[];
  onClose: () => void;
};

export function ImageSlider({ imageUrls, onClose }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 ">
      <div className="relative w-full h-full flex items-center justify-center ">
        {/* Background Blurred Image */}
        <div className="absolute inset-0">
          <Image
            src={imageUrls[imageIndex]}
            alt="Image Background"
            fill
            style={{ objectFit: "cover" }}
            className="blur-2xl opacity-50"
          />
        </div>

        {/* Main Image */}
        <div className="relative z-10">
          <Image
            src={imageUrls[imageIndex]}
            alt="Image"
            width={900}
            height={900}
            className="object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-5 z-20 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75"
        >
          <ArrowLeft size={36} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-5 z-20 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75"
        >
          <ArrowRight size={36} />
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75"
        >
          <X size={36} />
        </button>
      </div>
    </div>
  );
}
