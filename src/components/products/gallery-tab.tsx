import { Tab } from "@headlessui/react";

export const GalleryTab = ({ image }: { image: string }) => {
  return (
    <Tab className=" relative flex aspect-square cursor-pointer items-center justify-center  rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className=" absolute h-full w-full inset-0 overflow-hidden rounded-md">
            <img src={image} alt="" className=" object-cover object-center" />
          </span>
          <span
            className={`absolute inset-0 rounded-md ring-2 ring-offset-2",
              ${selected ? "ring-black" : "ring-transparent"}`}
          />
        </div>
      )}
    </Tab>
  );
};
