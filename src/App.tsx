import { Hero } from "./components/hero"
import Navbar from "./components/navigation"
import ScrollProducts from "./components/products"
import { Services } from "./components/services"
import { Heading } from "./components/shared/heading"
import TiedGallery from "./components/tied-gallery"

function App() {

  return (
    <>
     <div className=" w-full xl:pt-[4.5rem] overflow-hidden pt-[4.8rem]">
      <Navbar />
      <Hero />
      <Heading heading="Services"/>
      <Services />
      <Heading heading=" Products"/>
      <ScrollProducts />
      <Heading heading="Gallery"/>
      <TiedGallery />
     </div>
    </>
  )
}

export default App
