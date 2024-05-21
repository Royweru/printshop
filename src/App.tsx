import { Hero } from "./components/hero"
import Navbar from "./components/navigation"


function App() {

  return (
    <>
     <div className=" w-full xl:pt-[4rem] overflow-hidden pt-[3.0rem]">
      <Navbar />
      <Hero />
     </div>
    </>
  )
}

export default App
