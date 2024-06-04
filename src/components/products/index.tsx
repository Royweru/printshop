import React from "react";
// Make sure to import your custom CSS
import { ProductCard } from "./product-card";
import { productsDetails } from "../../data/product-details";

const ScrollProducts: React.FC = () => {
  return (
    <div className="container mx-auto py-4 px-10 " id="products">
      <div className="overflow-x-auto custom-scrollbar gap-y-4">
        <div className="flex space-x-4">
          {productsDetails.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollProducts;
