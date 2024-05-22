import { MarqueeText } from "./marquee"


const Footer = () => {
  return (
    <div className=" w-full flex flex-col 
     text-4xl font-poetsen  gap-y-3
    font-semibold  py-8">
    <div className=" w-full ">
     <MarqueeText txt1="ON SALE! BUY NOW BUY NOW ON SALE ON SALE BUY NOW"/>
    </div>
     <div className=" 
     container 
     md:px-8 
     grid grid-cols-2 md:grid-cols-5 
     md:gap-2 gap-4">
          <div className=" md:col-span-2 md:px-12 ">
            <img src=".../assets" alt="" />
          </div>
     </div>
      </div>
  )
}

export default Footer