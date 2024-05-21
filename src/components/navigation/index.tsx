
const navigation =[
  {
    id:1,
    label:"Branding",
    path:"#products"
  },
  {
    id:2,
    label:"Adhesive label stickers",
    path:"#products"
  },
  {
    id:3,
    label:"Cards",
    path:"#products"
  },
  {
    id:4,
    label:"Calenders",
    path:"#products"
  },
  {
    id:5,
    label:"Eulogy booklets",
    path:"#products"
  },
  {
    id:6,
    label:"Stationary",
    path:"#products"
  },
]

const Navbar = () => {
  
  return (
    <div className="  bg-n-3 w-full fixed top-0 left-0 z-50 py-6 flex justify-between ">
      <div className=" w-full"/>
        <nav className="  w-full relative hidden md:block bg-transparent h-full">
           <ul className=" w-full flex justify-between px-6 ">
            {navigation.map(navig=>(
              <a href={navig.path} key={navig.id} >
                  <li className=" text-n-1 font-semibold font-playfair
               text-sm cursor-pointer hover:text-color-4">
                 {navig.label}
              </li>
              </a>
              
            ))}
           </ul>
        </nav>
      </div>
  )
}

export default Navbar