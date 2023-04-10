import { Card } from 'flowbite-react'
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/outline/ArrowTopRightOnSquareIcon'

const Nosotros = () => {
  return (
    <article className="grid gap-12 align-top justify-start my-12 md:grid-cols-2">
      <Card className="bg-card-back">
        <div className="h-full">
          <h2 className="text-3xl font-bold text-mark" id="Nosotros">
            Nosotros
          </h2>
          <p className="mt-4 text-lg">
            Somos una empresa con más de 30 años de experiencia, ofrecemos
            garantía por escrito y la mejor atención en cada uno de nuestros
            servicios
          </p>
          <ul className="grid md:grid-cols-2 list-disc ml-5 gap-3 mt-8 mb-4">
            <li>Estamos establecidos</li>
            <li>Facturamos</li>
            <li>Entregamos garantía</li>
            <li>Contamos con refaccionarias y almacén</li>
          </ul>
          <p>
            No somos un Call Center fantasma, somos un servicio con más de 20
            años de experiencia
          </p>
        </div>
      </Card>
      <Card className="bg-card-back row-span-2">
        <div className="h-full">
        <img src='/images/reparacion.jpg' className='rounded-lg h-72 w-full mb-8 object-cover m-auto'/>
          <h2 className="text-xl md:text-3xl font-bold ">
            Reparación, instalación y mantenimiento de:
          </h2>
          <ul className="grid md:grid-cols-2 list-disc ml-5 mt-6 gap-5">
            <li>Lavadoras</li>
            <li>Microondas</li>
            <li>Hornos</li>
            <li>Secadoras</li>
            <li>Licuadoras</li>
            <li>Estufas</li>
            <li>Hornos</li>
            <li>Minisplit</li>
            <li>Centros de lavado</li>
          </ul>
        </div>
      </Card>
      <Card>
        <h2 className="text-3xl font-bold text-mark" id="Nosotros">
          Nuestra promesa
        </h2>

        <ul className="flex flex-col gap-4 list-disc ml-5">
          <li>
            Tienes comunicación directa con nosotros para poder aclarar todas
            tus dudas y sentirte seguro.
          </li>
          <li>
            <p>
              Tenemos refaccionaris propias con refacciones nuevas, originales y
              al mejor costo
            </p>
            <a
              href="https://refaccionesmonyohu.com"
              target="_blank"
              rel="noopener noreferrer"
              className='text-mark font-bold underline text-base'
            >
              refaccionesmonyohu.com{' '}
              <ArrowTopRightOnSquareIcon className='h-4 inline'/>
            </a>
          </li>
          <li>Arreglamos tus equipos en tu domicilio</li>
          <li>
            Nuestros técnicos están en contante capacitación para atender a
            todas tus necesidades
          </li>
        </ul>
      </Card>
    </article>
  )
}

export default Nosotros
