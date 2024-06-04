import { useParams } from "react-router-dom";

export const IndividualProduct = () => {
  const { slug } = useParams();
  return (
    <div className=" min-h-screen container md:px-10 my-2 text-xl bg-slate-50 rounded-xl">
      CONTAINER {slug}
    </div>
  );
};
