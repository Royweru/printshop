
interface ServiceBoxProps{
    service:{id:number,title:string,description:string,icon:React.ReactElement<unknown>}
}
export const ServiceBox = ({service}:ServiceBoxProps) => {
  return (
    <div className="  font-poetsen col-span-1 ">   
     <div className=" bg p-6 rounded-lg shadow-lg text-center bg-n-4">
    <div className="flex justify-center items-center mb-4">
      <div className="bg-white rounded-full p-4">
        {service.icon}
      </div>
    </div>
    <h1 className="text-3xl font-poetsen font-semibold mb-2">{service.title}</h1>
    <p className="text-sm text-gray-700 mb-4">{service.description}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
      Learn More
    </button>
  </div></div>
  )
}
