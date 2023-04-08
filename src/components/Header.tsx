import { Navbar, Footer, Tooltip } from 'flowbite-react'
import { Outlet } from 'react-router-dom'
import ChatBubbleOvalLeftIcon from '@heroicons/react/24/outline/ChatBubbleOvalLeftIcon'

const Header = () => (
  <div className="static ">
    <Navbar fluid={true} rounded={true} className="drop-shadow-lg mb-8">
      <Navbar.Brand href="/" className="ml-8">
        <img src="/images/Logo.png" className="mr-3 " alt="Flowbite Logo" />
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
          Sedes
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <a
      href="https://wa.me/525585265946"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed drop-shadow-lg bottom-5 md:bottom-20 right-10"
    >
      <Tooltip content={"Envianos mensaje"}>
        <ChatBubbleOvalLeftIcon className=" text-white h-20 bg-emerald-400  rounded-full p-3" />
      </Tooltip>
    </a>
    <Outlet />
    <Footer container={true}>
      <Footer.Copyright href="/" by="Grupo Monyohu" year={2023} />
      <Footer.LinkGroup className="gap-5">
        <Footer.Link href="/#Nosotros">Nosotros</Footer.Link>
        <Footer.Link href="/sedes">Sedes</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  </div>
)

export default Header
