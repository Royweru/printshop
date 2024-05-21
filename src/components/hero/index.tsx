import { HeroContent } from "./hero-content"
import { SlideShow } from "../slide-show"

const heroImages=[
  "https://img.freepik.com/free-vector/graphic-design-geometric-lettering_23-2148470664.jpg?t=st=1716263247~exp=1716266847~hmac=af96f95f4987691c01f48cede599b60dd8fb86f3ac481d4c65a1b949dd20b54e&w=900",
  "https://img.freepik.com/free-vector/colorful-abstract-business-card-template_23-2148811716.jpg?t=st=1716262348~exp=1716265948~hmac=c05fa0ab80cd05ba52d94c0dbc019a1ac0dd214ecf05d83dac647b063eb8f87e&w=740",
  "https://img.freepik.com/free-vector/identity-corporative-with-colored-bands_23-2147543103.jpg?t=st=1716262412~exp=1716266012~hmac=f73ba067cc4f49f4dee5f2f9263ed2afc027c1c53dfa9e8150d6424930eb75d1&w=740",
  "https://img.freepik.com/free-vector/restaurant-cafe-corporate-identity-icons-set_1284-11406.jpg?t=st=1716262450~exp=1716266050~hmac=090b60492a49619a74ecb2a7ac0a340f0b3970c1dd9168d0029b9abdaf22db05&w=740"
]
export const Hero = () => {

  return (
    <div className=" w-full hero font-nunito">
      <div className=" grid md:grid-cols-2 gap-3 grid-cols-1 w-full relative xl:px-2 md:px-4 px-0">
      <HeroContent />
      <SlideShow images={heroImages} />
      </div>
       
    </div>
  )
}
