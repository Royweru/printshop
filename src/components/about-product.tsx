export const AboutProduct = ({
  data,
}: {
  data: {
    id: number;
    thumbnail: string;
    title: string;
    images: string[];
    description: string;
    slug: string;
    price: string;
  };
}) => {
  return (
    <div className=" col-span-1 text-3xl lg:py-24">
      <div className=" flex flex-col gap-y-4 justify-evenly items-center">
        <h1 className=" font-semibold text-3xl text-n-5 font-poetsen text-center">
          {data.title}
        </h1>
        <div className=" w-full relative">
          <p className=" font-poetsen text-sm font-light tracking-wide leading-tight">
            {data.description}
          </p>
        </div>
        <div className=" flex justify-between items-center w-full px-2 ">
          <h3 className=" font-poetsen font-semibold text-sm">Reach out!</h3>
          <div className=" flex gap-4"></div>
        </div>
      </div>
    </div>
  );
};
