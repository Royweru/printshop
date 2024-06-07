import { useState } from "react";
import Tabs from "./tabs";
import ImageCarousel from "./image-carousel";

const ProductTabs = ({ images }: { images: string[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-4 h-full flex flex-col-reverse justify-center items-center">
      <Tabs tabs={images} activeTab={activeTab} onClickTab={setActiveTab} />
      <ImageCarousel activeIndex={activeTab} images={images} />
    </div>
  );
};

export default ProductTabs;
