import { ServiceDetails } from "../../data/service-details"
import { ServiceBox } from "./service-box"
export const Services = () => {
  return (
    <div className=" container bg-n-7  ">
      <div className=" relative 
      w-full lg:px-8 md:px-6 
      px-4 my-3  md:py-2
       grid grid-cols-4
      ">
          {ServiceDetails.map(service=>(
            <div key={service.id}>
               <ServiceBox />
            </div>
          ))}
      </div>
    </div>
  )
}
