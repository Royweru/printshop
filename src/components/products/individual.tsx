import { useParams } from "react-router-dom";
import { productsDetails } from "../../data/product-details";
import ProductGallery from "./product-gallery";
import ImageCarousel from "./image-carousel";
import { Tabs } from "../ui/tabs";

export const IndividualProduct = () => {
  const { slug } = useParams();
  const product = productsDetails.find((item) => item.slug === slug);
  return (
    <div
      className=" min-h-screen container md:px-8 my-2 bg-n-8
       rounded-xl lg:py-2 py-2 grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-1"
    >
      <div className=" w-full col-span-1 md:col-span-1 lg:col-span-2 ">
        <ProductGallery images={product?.images} />
      </div>
    </div>
  );
};
