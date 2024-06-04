import { useNavigate } from "react-router-dom";
export const ProductCard = ({
  product,
}: {
  product: {
    id: number;
    thumbnail: string;
    title: string;
    images: string[];
    description: string;
    slug: string;
    price: string;
  };
}) => {
  const navigate = useNavigate();
  return (
    <div
      className=" w-48 flex-shrink-0 bg-white p-4 rounded-lg shadow-lg flex flex-col group cursor-pointer"
      onClick={() => {
        navigate(`/product/${product.slug}`);
      }}
    >
      <div className=" w-full p-0 group-hover:scale-105">
        <img
          src={product.thumbnail}
          className=" w-full rounded-t-lg bg-cover bg-center h-32"
        />
      </div>
      <div className=" font-semibold font-nunito px-7">{product.title}</div>
      <p className="text-gray-600 ">{product.price}</p>
    </div>
  );
};
