const Landing = () => (
  <div
    className="bg-landing grid md:grid-cols-2 py-8 align-middle gap-9 mb-8"
    style={{ minHeight: '90vh' }}
  >
    <div className="self-center p-8">
      <h1 className="text-5xl mb-10 font-bold text-mark">Grupo Monyohu</h1>
      <ul className="grid md:grid-cols-2 text-lg list-disc ml-10 gap-3 mt-8 mb-4">
        <li className="md:col-span-2">Siempre otorgamos el <span className="font-bold">10% de descuento</span> en apoyo a tu economía</li>
        <li>Revision gratis</li>
        <li>Contamos con <span className="font-bold">tecnicos capacitados</span></li>
        <li>Estamos establecidos</li>
        <li>Garantia por escrito</li>
        <li>Registrados ante el SAT</li>
        <li>Entregamos <span className="font-bold">garantía</span></li>
        <li>Contamos con refaccionarias y almacén</li>
      </ul>
      <p className="text-xl">
        No somos un Call Center fantasma, somos un servicio con más de <span className="font-bold">30 años
        de experiencia</span> 
      </p>
    </div>
    <img src="/images/MenTool.png" className="md:self-center" />
  </div>
)

export default Landing
