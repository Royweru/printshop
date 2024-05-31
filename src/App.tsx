import { Route,Routes } from "react-router-dom"
import Footer from "./components/footer"
import Layout from "./components/layout"
import Navbar from "./components/navigation"
import Home from "./components/home"
import { IndividualProduct } from "./components/products/individual"


function App() {

  return (
    <>
     <div className=" w-full xl:pt-[6.5rem] overflow-hidden pt-[5.8rem]">
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/product/:slug" element={<IndividualProduct/>}/>
       </Route>
      </Routes>
    
     </div>
    </>
  )
}

export default App
