import React from 'react';
// Make sure to import your custom CSS
import { ProductCard } from './product-card';

const products = [
  { id: 1, name: 'Product 1', image: 'image1.jpg', price: '$10' },
  { id: 2, name: 'Product 2', image: 'image2.jpg', price: '$20' },
  { id: 3, name: 'Product 3', image: 'image3.jpg', price: '$30' },
  { id: 4, name: 'Product 4', image: 'image4.jpg', price: '$40' },
  { id: 5, name: 'Product 5', image: 'image5.jpg', price: '$50' },
  { id: 6, name: 'Product 6', image: 'image6.jpg', price: '$60' },
  { id: 7, name: 'Product 7', image: 'image7.jpg', price: '$70' },
  { id: 8, name: 'Product 8', image: 'image8.jpg', price: '$80' },
  // Add more products as needed
];

const ScrollProducts: React.FC = () => {
  return (
    <div className="container mx-auto p-4 px-6">
      <div className="overflow-x-auto custom-scrollbar gap-y-4">
        <div className="flex space-x-4">
          {products.map(product => (
          <ProductCard product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollProducts
