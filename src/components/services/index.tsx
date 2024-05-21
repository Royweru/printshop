import { ServiceDetails } from "../../data/service-details"
import { ServiceBox } from "./service-box"
export const Services = () => {
  return (
    <div className=" container bg-n-7  ">
      <div className=" relative 
      w-full lg:px-8 md:px-6 
      px-4 my-3  md:py-2 xl:gap-2
    md:gap-4 gap-4
       grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1
      ">
          {ServiceDetails.map(service=>(
            <div key={service.id}>
               <ServiceBox service={service}/>
            </div>
          ))}
      </div>
    </div>
  )
}
