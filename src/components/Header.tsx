import { Navbar } from 'flowbite-react'
import { Outlet } from "react-router-dom";

const Header = () => (
  <>
    <Navbar fluid={true} rounded={true} className="drop-shadow-lg mb-8">
      <Navbar.Brand href="/" className="py-4 ml-8">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Grupo Monyohu
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mr-24">
        <Navbar.Link href="/#Nosotros" className="font-bold text-lg">
          Nosotros
        </Navbar.Link>
        <Navbar.Link href="/sedes" className="font-bold text-lg">
          Sede
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <Outlet/>
  </>
)

export default Header
