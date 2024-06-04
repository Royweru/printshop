import { footerDetails } from "../../data/constants";
import { MarqueeText } from "./marquee";

const Footer = () => {
  const now = new Date().getFullYear();
  return (
    <div
      className=" w-full 
      flex flex-col 
     text-4xl 
     font-poetsen  
     gap-y-3
    font-semibold  
     md:py-8
     sm:py-5
     py-6
     bg-n-3 
    rounded-t-md
     border-t-[1.5px]
      border-n-1 backdrop-blur-sm"
    >
      <div className=" w-full ">
        <MarqueeText txt1="ON SALE! BUY NOW BUY NOW ON SALE ON SALE BUY NOW" />
      </div>
      <div
        className=" 
     container 
     md:px-8 
     grid 
     grid-cols-2
      md:grid-cols-5 
      lg:grid-cols-7 
     md:gap-2 gap-2"
      >
        <div className=" md:col-span-2  md:px-7 ">
          <img src="..../assets/logo.jpg" alt="" />
        </div>
        <div className=" md:col-span-2 lg:col-span-3">
          <ul
            className=" w-full  
            flex 
             flex-row 
             gap-x-4 
             justify-center 
             items-center
              font-nunito
              "
          >
            {footerDetails.map(({ id, label, path }) => (
              <a href={path} key={id}>
                <li className=" text-sm text-color-2 hover:text-n-2">
                  {label}
                </li>
              </a>
            ))}
          </ul>
        </div>
        {/* <div className=" col-span-2 px-2 flex justify-center items-center">
          <p className=" text-xs font-light font-nunito text-n-4">
             2024 all rights maintained
          </p>
        </div> */}
      </div>
      <div className=" border-t-[1.5px] w-full flex justify-center py-2 items-center ">
        <p className=" text-xs font-light font-nunito text-n-4">
          &#169;{now} all rights maintained
        </p>
      </div>
    </div>
  );
};

export default Footer;
