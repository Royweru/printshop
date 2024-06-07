import { useParams } from "react-router-dom";
import { productsDetails } from "../../data/product-details";

import ProductTabs from "../productgallery";
import { AboutProduct } from "../about-product";

export const IndividualProduct = () => {
  const { slug } = useParams();
  const product = productsDetails.find((item) => item.title === slug);

  return product ? (
    <div className=" grid grid-cols-2 lg:grid-cols-3 lg:gap-3 gap-1 rounded-xl bg-n-8  min-h-screen container md:px-8 my-2 ">
      <div className=" w-full col-span-1 md:col-span-1 lg:col-span-2 lg:gap-2 gap-4  rounded-xl">
        <ProductTabs images={product?.images} />
      </div>
      <AboutProduct data={product} />
    </div>
  ) : (
    <div className=" font-poetsen text-4xl flex w-full jus items-center">
      Oopsy product not availble 🥲🥲
    </div>
  );
};
