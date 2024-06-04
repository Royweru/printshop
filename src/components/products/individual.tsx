import { useParams } from "react-router-dom";
import { productsDetails } from "../../data/product-details";

export const IndividualProduct = () => {
  const { slug } = useParams();
  const product = productsDetails.find((item) => item.slug === slug);
  return (
    <div className=" min-h-screen container md:px-10 my-2 text-xl bg-slate-50 rounded-xl">
      {!product && <div> No Product </div>}
      {product && <div>{product.title}</div>}
    </div>
  );
};
