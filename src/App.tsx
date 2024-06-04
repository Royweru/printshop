import { Route,Routes } from "react-router-dom"
import Layout from "./components/layout"
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
