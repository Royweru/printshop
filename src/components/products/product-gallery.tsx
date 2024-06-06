import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { GalleryTab } from "./gallery-tab";

export default function ProductGallery({ images }: { images?: string[] }) {
  return (
    <div>
      <TabGroup
        as="div"
        className="  col-span-1 lg:col-span-2 flex flex-col-reverse relative"
      >
        <div className=" mx-auto hidden w-full max-w-2xl sm:block lg:max-w-none">
          <TabList className=" grid grid-cols-4 gap-6">
            {images?.map((image) => (
              <GalleryTab key={image} image={image} />
            ))}
          </TabList>
        </div>
        <TabPanels className=" w-full aspect-square relative">
          {images?.map((image) => (
            <TabPanel key={image}>
              <div className=" aspect-square relative overflow-hidden h-full w-full">
                <img
                  src={image}
                  alt=""
                  className=" w-full h-[350px] bg-cover bg-center"
                />
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
