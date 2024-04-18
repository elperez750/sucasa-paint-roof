// ImageGrid.tsx
import React from 'react';
import ServiceImage from './service-image';

interface ImageInfo {
  imageUrl: string;
  imageHeading: string;
}

interface ImageGridProps {
  images: ImageInfo[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-10"> {/* Customize grid layout as needed */}
      {images.map((img, index) => (
        <ServiceImage key={index} imageUrl={img.imageUrl} imageHeading={img.imageHeading} />
      ))}
    </div>
  );
};

export default ImageGrid;
