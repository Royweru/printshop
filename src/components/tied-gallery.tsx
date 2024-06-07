// src/components/ImageGallery.tsx
import React from "react";

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const images: Image[] = [
  {
    src: "https://www.lasprints.com/wp-content/uploads/2012/06/Branded-T-shirt-in-Lagos.jpg",
    width: 300,
    height: 400,
    alt: "Image 1",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfAae8kNzatndtojTYCpFXaCTcR7Jkf8Nog&s",
    width: 300,
    height: 600,
    alt: "Image 2",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFe9OaR0vDUqxjGoEAzG93rpDVjjfWeGwdg&s",
    width: 300,
    height: 300,
    alt: "Image 3",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbCmfO4JXhNER2cIJR-De1k1kPIdvldMQPg&s",
    width: 300,
    height: 500,
    alt: "Image 4",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxZGuHgZqjOoBmjGFFrTreHy2d8x8hG_y_g&s",
    width: 300,
    height: 250,
    alt: "Image 5",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyZpwFFR9_EFgKsMqPsRt1c4Nq8YlkDd69w&s",
    width: 300,
    height: 450,
    alt: "Image 6",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnYixfGMQgnNfN_pKKbUVdEgI-HIRjT08Kw&s",
    width: 300,
    height: 350,
    alt: "Image 7",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7LuQOVy-WxQ7qwEyCWcQZ0Pni1azOW_oRQ&s ",
    width: 300,
    height: 200,
    alt: "Image 8",
  },
];

const TiedGallery: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-3 " id="gallery">
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

export default TiedGallery;
