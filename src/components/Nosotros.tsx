import { Card } from 'flowbite-react'
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/outline/ArrowTopRightOnSquareIcon'

const images = ['c', 'lp', 'ph', 'wh']
const imagesButton = [
  'easy',
  'Elec',
  'General_Electric_logo.svg',
  'kitchenaid-logo',
  'LG',
  'Logotipo_Mabe.svg',
  'Maytag-Logo-2008',
  'Oster',
  'Subzero',
  'wh',
]

const Nosotros = () => {
  return (
    <div>
      <article className="grid gap-12 align-top justify-start my-12 md:grid-cols-2">
        <Card className="bg-card-back">
          <div className="h-full">
            <h2 className="text-3xl font-bold text-mark" id="Nosotros">
              Nosotros
            </h2>
            <p className="mt-4 text-lg whitespace-break-spaces">
              Somos una empresa con más de 30 años de experiencia, ofrecemos
              garantía por escrito y la mejor atención en cada uno de nuestros
              servicios.
              <br className="" />
              Contamos con sucursales en todo el interior de la república y
              refaccionarias Somos el centro de servicio Whirlpool, Liverpool,
              Palacio de hierro, Costco , entre otros.
            </p>
            <div className="grid grid-cols-4">
              {images.map((image) => (
                <img
                  src={`/logos/${image}.png`}
                  className="w-10/12 h-28 md:h-40 object-contain m-auto"
                />
              ))}
            </div>
          </div>
        </Card>
        <Card className="bg-card-back row-span-2">
          <div className="h-full">
            <img
              src="/images/reparacion.jpg"
              className="rounded-lg h-72 w-full mb-8 object-cover m-auto"
            />
            <h2 className="text-xl md:text-3xl font-bold ">
              Reparación, instalación, mantenimiento, refacciones y servicio de:
            </h2>
            <ul className="grid md:grid-cols-2 list-disc ml-5 mt-6 gap-5">
              <li>Lavadoras</li>
              <li>Centros de lavado</li>
              <li>Refrigeradores</li>
              <li>Secadoras</li>
              <li>Congeladores</li>
              <li>Estufas</li>
              <li>Hornos</li>
              <li>Minisplit</li>
              <li>Microondas</li>
              <li>Licuadoras</li>
            </ul>
            <p className="mt-4 font-bold text-center">y mucho más..</p>
          </div>
        </Card>
        <Card>
          <h2 className="text-3xl font-bold text-mark" id="Nosotros">
            Nuestra promesa
          </h2>

          <ul className="flex flex-col gap-4 list-disc ml-5">
            <li>Contamos con personal propio.</li>
            <li>
              Nuestro domicilio, teléfono y ordenes de servicio son siempre los
              mismos para ganarnos tu fidelidad.
            </li>
            <li>No te pediremos nunca un anticipo.</li>
            <li>
              Tienes comunicación directa con nosotros en todo el proceso para
              poder aclarar todas tus dudas y sentirte seguro.
            </li>
            <li>
              <p>
                Tenemos refaccionaris propias con refacciones nuevas, originales
                y al mejor costo.
              </p>
              <a
                href="https://refaccionesmonyohu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mark font-bold underline text-base"
              >
                refaccionesmonyohu.com{' '}
                <ArrowTopRightOnSquareIcon className="h-4 inline" />
              </a>
            </li>
            <li>
              Arreglamos tus equipos en tu domicilio o en nuestros centros de
              servicio.
            </li>
            <li>
              Nuestros técnicos están en constante capacitación para atender a
              todas tus necesidades.
            </li>
          </ul>
        </Card>
      </article>
      <div className="flex flex-wrap justify-between gap-y-4 mb-24">
        {imagesButton.map((image) => (
          <img
            src={`/logos/${image}.png`}
            className="w-24 h-14 md:h-40 object-contain"
          />
        ))}
        <img
          src={`/logos/Tfallogo.svg`}
          className="w-24 h-14 md:h-40 object-contain"
        />
      </div>
    </div>
  )
}

export default Nosotros
