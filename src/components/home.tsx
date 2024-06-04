import { Hero } from "./hero";
import { Heading } from "./shared/heading";
import { Services } from "./services";
import TiedGallery from "./tied-gallery";
import ScrollProducts from "./products";
import Navbar from "./navigation";
const Home = () => {
  return (
    <>
     <Navbar />
      <Hero />
      <Heading heading="Services" />
      <Services />
      <Heading heading=" Products" />
      <ScrollProducts />
      <Heading heading="Gallery" />
      <TiedGallery />
    </>
  );
};

export default Home;
