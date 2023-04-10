const Landing = () => (
  <div
    className="bg-landing grid md:grid-cols-2 py-8 align-middle gap-9 mb-8"
    style={{ minHeight: '90vh' }}
  >
    <div className="self-center p-8">
      <h1 className="text-5xl mb-10 font-bold text-mark">Grupo Monyohu</h1>
      <p className="mt-4 text-xl">
        Somos una empresa con más de 10 años en el mercado, ofrecemos garantía
        por escrito y la mejor atención en cada uno de nuestros servicios
      </p>
      <ul className="grid md:grid-cols-2 list-disc ml-10 gap-3 mt-8 mb-4">
        <li>Estamos establecidos</li>
        <li>Facturamos</li>
        <li>Entregamos garantía</li>
        <li>Contamos con refaccionarias y almacén</li>
      </ul>
      <p className="text-xl">
        No somos un Call Center fantasma, somos un servicio con más de <span className="font-bold">20 años
        de experiencia</span> 
      </p>
    </div>
    <img src="/images/MenTool.png" className="md:self-center" />
  </div>
)

export default Landing
