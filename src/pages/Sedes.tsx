import CardSede from '../components/CardSede'

const sedesList = [
  {
    name: 'Irapuato',
    telefonos: [
      '462 627 7335',
      '462 627 8089',
      '462 660 1289',
      '462 635 6264',
    ],
  },
  {
    name: 'Culiacán',
    telefonos: [
      '667 749 67 19',
      '667 172 11 61',
      '667 749 69 31',
      '667 172 11 62',
    ],
  },
  {
    name: 'Celaya',
    telefonos: [
      '461 617 5005',
      '461 103 1099',
      '461 617 5004',
      '461 103 1098',
    ],
  },
  {
    name: 'San Luis Potosí',
    telefonos: [
      '444 688 8097',
      '444 688 8098',
    ],
  },
  {
    name: 'CDMX | Tlalpan | Naucalpan',
    telefonos: [
      '555 312 6501',
      '555 312 7031',
    ],
  },
  {
    name: 'Colón',
    telefonos: [
      '722 320 2024',
    ],
  },
]

const Sedes = () => {
  return (
    <div className="w-10/12 m-auto">
      <h1 className="text-center text-5xl font-bold text-mark">Sedes</h1>
      <p className="text-center text-xl mt-8">Nuestro trabajo nos respalda</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-12">
        {sedesList.map((sede) => (
          <CardSede {...sede} key={sede.name}/>
        ))}
      </div>
    </div>
  )
}

export default Sedes
