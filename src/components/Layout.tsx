import { Navbar, Footer, Tooltip } from 'flowbite-react'
import { Outlet } from 'react-router-dom'
import ChatBubbleOvalLeftIcon from '@heroicons/react/24/outline/ChatBubbleOvalLeftIcon'
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/outline/ArrowTopRightOnSquareIcon'

const Layout = () => (
  <div className="static min-h-screen">
    <div className="drop-shadow-lg  bg-card-back sticky top-0 z-10">
      <Navbar
        fluid={true}
        rounded={true}
        className=""
        theme={{
          base: 'hover:text-mark',
        }}
      >
        <Navbar.Brand href="/" className="md:ml-8">
          <img src="/images/Logo.png" className="mr-3 h-16 my-2 ml-4" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl md:text-3xl font-bold dark:text-white text-mark">
            Grupo Monyohu
          </span>
        </Navbar.Brand>
        <Navbar.Collapse className="mr-24">
          <Navbar.Link href="/#Nosotros" className="font-bold text-lg">
            <span className="hover:text-mark">Inicio</span>
          </Navbar.Link>
          <Navbar.Link href="/sedes" className="font-bold text-lg">
            <span className="hover:text-mark">Sucursales</span>
          </Navbar.Link>
          <Navbar.Link
            href="https://refaccionesmonyohu.com"
            target="_blank"
            className="font-bold text-lg"
          >
            <span className="hover:text-mark">
              Refacciones
              <ArrowTopRightOnSquareIcon className="h-4 inline -translate-y-2" />
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="flex justify-around py-3 md:hidden">
        <a href="/#Nosotros" className="font-bold">
          <span className="hover:text-mark">Inicio</span>
        </a>
        <a href="/sedes" className="font-bold">
          <span className="hover:text-mark">Sucursales</span>
        </a>
        <a
          href="https://refaccionesmonyohu.com"
          target="_blank"
          className="font-bold"
        >
          <span className="hover:text-mark">
            Refacciones
            <ArrowTopRightOnSquareIcon className="h-4 inline -translate-y-2" />
          </span>
        </a>
      </div>
    </div>
    <a
      href="https://wa.me/526674299554"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed drop-shadow-lg bottom-5 md:bottom-20 right-10 z-10"
    >
      <Tooltip content={'Envianos mensaje'}>
        <ChatBubbleOvalLeftIcon className=" text-white h-20 bg-emerald-400  rounded-full p-3" />
      </Tooltip>
    </a>
    <div className='min-h-screen'>
      <Outlet />
    </div>
    <Footer container={true}>
      <Footer.Copyright href="/" by="Grupo Monyohu" year={2023} />
      <Footer.Link href="https://www.tachyondevelopers.com/" target="_blank">Desarrollado por Tachyon</Footer.Link>
      <Footer.LinkGroup className="gap-5">
        <Footer.Link href="/">Inicio</Footer.Link>
        <Footer.Link href="/sedes">Sucursales</Footer.Link>
        <Footer.Link href="https://refaccionesmonyohu.com" target="_blank">
          Refacciones
          <ArrowTopRightOnSquareIcon className="h-3 inline -translate-y-1" />
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  </div>
)

export default Layout
