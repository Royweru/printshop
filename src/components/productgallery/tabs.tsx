interface TabsProps {
  tabs: string[];
  activeTab: number;
  onClickTab: (index: number) => void;
}

const Tabs = ({ tabs, activeTab, onClickTab }: TabsProps) => {
  return (
    <div className="flex space-x-4 mt-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`p-1 rounded-xl ${
            activeTab === index
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => onClickTab(index)}
        >
          <img
            src={tab}
            alt=""
            className=" bg-center bg-cover relative  w-[50px] h-[50px] rounded-xl"
          />
        </button>
      ))}
    </div>
  );
};

export default Tabs;
