import Connectbtn from "./Connectbtn";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto  p-6">
      {/* flex */}
      <div className="flex items-center justify-between ">
        <div className="pt-2">
          <h3>The Crypto Traitor Community</h3>
        </div>
        <div className='space-x-6 md:flex'>
        <Connectbtn/>
        </div>
      </div>
    </nav>
  )

}
export default Navbar