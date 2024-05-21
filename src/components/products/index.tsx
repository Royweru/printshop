import React from 'react';
// Make sure to import your custom CSS
import { ProductCard } from './product-card';

const products = [
  { id: 1, name: 'Product 1', image: 'https://img.freepik.com/free-vector/smoker-poster-design_1176-106.jpg?t=st=1716282127~exp=1716285727~hmac=1d24342f3a2aa6d80abaa1f043b5a181cf78efe1fba03131adb795e4f43e4939&w=360', price: '$10' },
  { id: 2, name: 'Product 2', image: 'https://img.freepik.com/free-photo/realistic-leopard-skin-pattern_125540-3826.jpg?t=st=1716282511~exp=1716286111~hmac=d3c29ca0c16240fb0fcb38c75e9b14a5b51bdb50671e6295ff641a9c405719da&w=1060', price: '$20' },
  { id: 3, name: 'Product 3', image: 'https://img.freepik.com/free-vector/cartoon-style-vehicle-illustration_52683-81722.jpg?w=900&t=st=1716282556~exp=1716283156~hmac=a3921f6b7dea5af005e77d15db16880874f344e9b0b29cab4ec2ea1e1503259a', price: '$30' },
  { id: 4, name: 'Product 4', image: 'https://img.freepik.com/free-photo/fun-party-with-dj_23-2151108197.jpg?size=626&ext=jpg&uid=R103486035&ga=GA1.1.1213758231.1714037801', price: '$40' },
  { id: 5, name: 'Product 5', image: 'https://img.freepik.com/free-photo/fun-party-with-dj_23-2151108163.jpg?size=626&ext=jpg&uid=R103486035&ga=GA1.1.1213758231.1714037801', price: '$50' },
  { id: 6, name: 'Product 6', image: 'https://img.freepik.com/free-photo/fun-party-with-dj_23-2151108197.jpg?size=626&ext=jpg&uid=R103486035&ga=GA1.1.1213758231.1714037801', price: '$60' },
  { id: 7, name: 'Product 7', image: 'https://img.freepik.com/free-photo/fun-party-with-dj_23-2151108197.jpg?size=626&ext=jpg&uid=R103486035&ga=GA1.1.1213758231.1714037801', price: '$70' },
  { id: 8, name: 'Product 8', image: 'https://img.freepik.com/free-photo/fun-party-with-dj_23-2151108197.jpg?size=626&ext=jpg&uid=R103486035&ga=GA1.1.1213758231.1714037801', price: '$80' },
  // Add more products as needed
];

const ScrollProducts: React.FC = () => {
  return (
    <div className="container mx-auto py-4 px-10 ">
      <div className="overflow-x-auto custom-scrollbar gap-y-4">
        <div className="flex space-x-4">
          {products.map(product => (
          <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollProducts
