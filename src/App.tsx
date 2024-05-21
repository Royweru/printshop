import { Hero } from "./components/hero"
import Navbar from "./components/navigation"
import ScrollProducts from "./components/products"
import { Services } from "./components/services"
import { Heading } from "./components/shared/heading"


function App() {

  return (
    <>
     <div className=" w-full xl:pt-[4.5rem] overflow-hidden pt-[3.0rem]">
      <Navbar />
      <Hero />
      <Heading heading="Services"/>
      <Services />
      <Heading heading=" Products"/>
      <ScrollProducts />
     </div>
    </>
  )
}

export default App
