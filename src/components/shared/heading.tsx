

export const Heading = ({heading}:{
    heading:string
}) => {
  return (
   <div className=" w-full my-2 text-center  font-nunito flex flex-col gap-y-2  items-end px-3">
      <h1 className=" font-semibold  text-5xl">
           {heading}
      </h1>
      <div className=" h-1 bg-n-8 md:w-60 w-40 "/>
   </div>
  )
}
