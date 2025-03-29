import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ImageHeaderProps {
  imageUrl: string;
  heading: string;
  subheading: string;
  buttonLabel?: string;
  buttonLink?: string;
  color?: string;
  imageBlur?: string;
  overlayOpacity?: "light" | "medium" | "dark";
  textAlignment?: "left" | "center" | "right";
  height?: "small" | "medium" | "large" | "full";
}

export default function ImageHeader({
  imageUrl,
  heading,
  subheading,
  buttonLabel,
  buttonLink = "/contact",
  color = "white",
  imageBlur,
  overlayOpacity = "medium",
  textAlignment = "left",
  height = "medium",
}: ImageHeaderProps) {
  const overlayClasses = {
    light: "bg-black/20",
    medium: "bg-black/40",
    dark: "bg-black/60",
  };

  const heightClasses = {
    small: "h-[50vh]",
    medium: "h-[70vh]",
    large: "h-[85vh]",
    full: "h-screen",
  };

  return (
    <section className={`w-full ${heightClasses[height]} font-poppins`}>
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-full">
          <Image
            src={imageUrl}
            alt="Header image"
            fill
            priority
            className={`object-cover object-center ${imageBlur ? "blur-sm" : ""}`}
          />
          <div className={`absolute inset-0 ${overlayClasses[overlayOpacity]}`} />
        </div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 bg-black text-white">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              {heading}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              {subheading}
            </p>
            {buttonLabel && (
              <Link
                href={buttonLink}
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-md transition-all duration-300 ease-in-out border-2 border-red-500 shadow-lg hover:shadow-xl group"
              >
                <span className="text-lg">{buttonLabel}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
