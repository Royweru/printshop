// src/components/ImageGallery.tsx
import React from 'react';

interface Image {
  src: string;
  alt: string;
  width:number,
  height:number
}

const images: Image[] = [
  { src: 'https://via.placeholder.com/300x400', width:300,height:400, alt: 'Image 1' },
  { src: 'https://via.placeholder.com/300x600',width:300,height:600, alt: 'Image 2' },
  { src: 'https://via.placeholder.com/300x300',width:300,height:300, alt: 'Image 3' },
  { src: 'https://via.placeholder.com/300x500', width:300,height:500,alt: 'Image 4' },
  { src: 'https://via.placeholder.com/300x250', width:300,height:250,alt: 'Image 5' },
  { src: 'https://via.placeholder.com/300x450',width:300,height:450, alt: 'Image 6' },
  { src: 'https://via.placeholder.com/300x350',width:300,height:350, alt: 'Image 7' },
  { src: 'https://via.placeholder.com/300x200',width:300,height:200, alt: 'Image 8' },
];

const TiedGallery: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiedGallery
