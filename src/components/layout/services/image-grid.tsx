import React from 'react'
import ServiceImage from './service-image'
import Button from '@/components/ui/button'

interface ImageInfo {
  imageUrl: string
  imageHeading: string
  imageDescription?: string
}

interface ImageGridProps {
  images: ImageInfo[]
  title?: string
  subtitle?: string
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, title, subtitle }) => {
  return (
    <section className="font-poppins py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {images.map((img, index) => (
            <ServiceImage
              key={index}
              imageUrl={img.imageUrl}
              imageHeading={img.imageHeading}
              imageDescription={img.imageDescription}
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button
            buttonType="primary"
            label="Get a Free Estimate"
            backgroundColor="blue"
            textColor="white"
            link="/contact"
            className="text-lg py-3 px-8 font-semibold transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}

export default ImageGrid