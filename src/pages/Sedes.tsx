import { useEffect, useState, useCallback } from 'react'
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon'
import { Card, TextInput } from 'flowbite-react'

import CardSede from '../components/CardSede'

interface sede {
  name: string
  telefonos: string[]
}

const sedesList: sede[] = [
  {
    name: 'Irapuato',
    telefonos: ['462 660 1289', '462 635 6264'],
  },
  {
    name: 'Culiacán',
    telefonos: ['667 749 6931', '667 172 1162'],
  },
  {
    name: 'Celaya',
    telefonos: ['461 617 5004', '461 103 1098'],
  },
  {
    name: 'San Luis Potosí',
    telefonos: ['444 688 8097', '444 688 8098'],
  },
  {
    name: 'CDMX | Tlalpan | Naucalpan',
    telefonos: ['555 312 6501', '555 312 7031'],
  },
  {
    name: 'Toluca | Atlacomulco | Zinacantepec',
    telefonos: ['722 270 2114', '722 270 2115'],
  },
  {
    name: 'Toluca sucursal Colón | Valle de Bravo | Cacalomacán | Capultitán',
    telefonos: ['722 778960', '722 2171276'],
  },
  {
    name: 'Lerma - Ocoyoacac',
    telefonos: ['728 103 3738', '722 688 6577'],
  },
  {
    name: 'Morelia Norte',
    telefonos: ['443 316 6924'],
  },
  {
    name: 'Morelia Sur',
    telefonos: ['443 234 0110'],
  },
  {
    name: 'Metepec | San Mateo | Xonacatlán',
    telefonos: ['722 199 5617', '722 199 3759'],
  },
  {
    name: 'Metepec sucursal Sur | Mexicalcingo | Calimaya | Ixtapan de la sal',
    telefonos: ['722 320 2005', '722 297 2284'],
  },
]

const Sedes = () => {
  const [textFilter, setTextFilter] = useState('')

  const filter = useCallback(
    (sede: sede) => sede.name.toLowerCase().includes(textFilter.toLowerCase()),
    [textFilter],
  )

  return (
    <div className="md:grid md:grid-cols-2 gap-10 static min-h-screen">
      <div className="px-2 md:pl-16 pt-8">
        <Card>
          <h1 className="text-center text-5xl font-bold text-mark">
            Sucursales
          </h1>
          <p className="text-center text-xl">Nuestro trabajo nos respalda</p>
          <TextInput
            icon={() => <MagnifyingGlassIcon className='text-slate-500 h-5'/>}
            placeholder="Busca tu sucursal"
            onChange={(data) => setTextFilter(data.target.value)}
          />
        </Card>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-12">
          {sedesList.filter(filter).map((sede) => (
            <CardSede {...sede} key={sede.name} />
          ))}
        </div>
      </div>
      <div className="bg-landing order-1 md:order-2">
        <img
          src="/images/help.png"
          alt="Phone man"
          style={{ height: '80vh' }}
          className="self-center md:fixed  md:my-16 object-contain"
        />
      </div>
    </div>
  )
}

export default Sedes
