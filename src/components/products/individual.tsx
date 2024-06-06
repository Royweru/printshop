import { useParams } from "react-router-dom";
import { productsDetails } from "../../data/product-details";
import ProductGallery from "./product-gallery";
import ImageCarousel from "./image-carousel";
import { Tabs } from "../ui/tabs";
import { useEffect } from "react";

export const IndividualProduct = () => {
  const { slug } = useParams();
  const product = productsDetails.find((item) => item.title === slug);

  return (
    <div className=" grid grid-cols-2 lg:grid-cols-3 lg:gap-3 gap-1 rounded-xl bg-n-8  min-h-screen container md:px-8 my-2 ">
      <div className=" w-full col-span-1 md:col-span-1 lg:col-span-2 gap-2  rounded-xl">
        <ProductGallery images={product?.images} />
      </div>
    </div>
  );
};
