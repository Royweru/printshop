import { ServiceDetails } from "../../data/service-details"
import { ServiceBox } from "./service-box"
export const Services = () => {
  return (
    <div className=" container   ">
      <div className=" relative 
      w-full lg:px-2 md:px-2 
      px-1 my-3  md:py-2 xl:gap-2
    md:gap-4 gap-2 py-4
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
