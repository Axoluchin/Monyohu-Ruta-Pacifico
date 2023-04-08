import { Card } from 'flowbite-react'

const Nosotros = () => {
  return (
    <article className="grid  gap-12 align-top justify-start my-12 md:grid-cols-2">
      <Card className="bg-card-back">
        <div className="h-full">
          <h2 className="text-3xl font-bold text-mark" id="Nosotros">
            Nosotros
          </h2>
          <p className="text-justify mt-4 text-lg">
            Somos una empresa con más de 10 años en el mercado, ofrecemos
            garantía por escrito y la mejor atención en cada uno de nuestros
            servicios
          </p>
          <ul className="grid md:grid-cols-2 list-disc ml-10 gap-3 mt-8">
            <li>Estamos establecidos</li>
            <li>Facturamos</li>
            <li>Entregamos garantía</li>
            <li>Contamos con refaccionarias y almacén</li>
            <li className="md:col-span-2">
              No somos un Call Center fantasma, somos un servicio con más de 20
              años de experiencia
            </li>
          </ul>
        </div>
      </Card>
      <Card className="bg-card-back">
        <div className="h-full">
          <h2 className="text-xl md:text-3xl font-bold  ">
            Reparación y mantenimiento de:
          </h2>
          <ul className="grid md:grid-cols-2 list-disc ml-10 mt-6 gap-5">
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
    </article>
  )
}

export default Nosotros
