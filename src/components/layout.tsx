import { Outlet } from "react-router-dom"
import Navbar from "./navigation"
import Footer from "./footer"

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer />
        </div>
  )
}

export default Layout