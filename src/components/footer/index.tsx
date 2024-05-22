import { MarqueeText } from "./marquee"


const Footer = () => {
  return (
    <div className=" w-full flex flex-col 
     text-4xl font-poetsen  gap-y-3
    font-semibold py-5">
    <div className=" w-full ">
     <MarqueeText txt1="ON SALE! BUY NOW BUY NOW ON SALE ON SALE BUY NOW"/>
    </div>
     <div className=" container md:px-8 ">
           FOOTER
     </div>
      </div>
  )
}

export default Footer