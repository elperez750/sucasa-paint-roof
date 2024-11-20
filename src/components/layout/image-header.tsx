import Image from "next/image"
import Link from "next/link"

interface ImageHeaderProps {
  imageUrl: string
  heading: string
  subheading: string
  buttonLabel?: string
  buttonLink?: string
  color?: string
  imageBlur?: string
}

export default function ImageHeader({
  imageUrl,
  heading,
  subheading,
  buttonLabel,
  buttonLink = "/contact",
  color = "white",
  imageBlur,
}: ImageHeaderProps) {
  return (
    <div className="font-poppins relative w-full h-[70vh] overflow-hidden">
      <Image
        src={imageUrl}
        alt={heading}
        fill
        className="object-cover"
        placeholder={imageBlur ? "blur" : "empty"}
        blurDataURL={imageBlur}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      <div className="relative h-full flex flex-col justify-center items-center text-center p-6">
        <h1 className={`font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-${color} mb-4 max-w-3xl`}>
          {heading}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-8 max-w-2xl">
          {subheading}
        </p>
        {buttonLabel && (
          <Link
            href={buttonLink}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
          >
            {buttonLabel}
          </Link>
        )}
      </div>
    </div>
  )
}