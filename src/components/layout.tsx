import { Outlet } from "react-router-dom";

import Footer from "./footer";
import Navbar from "./navigation";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
