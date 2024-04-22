// ImageGrid.tsx
import React from 'react';
import ServiceImage from './service-image';
import Button from '@/components/ui/button';

interface ImageInfo {
  imageUrl: string;
  imageHeading: string;
}

interface ImageGridProps {
  images: ImageInfo[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10"> 
      {images.map((img, index) => (
        <ServiceImage key={index} imageUrl={img.imageUrl} imageHeading={img.imageHeading} />
      ))}
    

     

    </div>
    <div className="flex items-center justify-center">
          <Button buttonType="primary" label="Get a Free Estimate" backgroundColor="blue" textColor='white'/>
          </div>
          </>
  );
};

export default ImageGrid;
