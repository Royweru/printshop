export const ProductCard = ({
  product,
}: {
  product: { id: number; name: string; image: string; price: string };
}) => {
  return (
    <div
      className=" w-48 flex-shrink-0 bg-white p-4 rounded-lg shadow-lg flex flex-col group cursor-pointer"
      onClick={() => {}}
    >
      <div className=" w-full p-0 group-hover:scale-105">
        <img
          src={product.image}
          className=" w-full rounded-t-lg bg-cover bg-center h-32"
        />
      </div>
      <div className=" font-semibold font-nunito px-7">{product.name}</div>
      <p className="text-gray-600 ">{product.price}</p>
    </div>
  );
};
