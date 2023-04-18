const Landing = () => (
  <div
    className="bg-landing grid md:grid-cols-2 pt-8 align-middle gap-9 mb-8"
    style={{ minHeight: '90vh' }}
  >
    <img src="/images/intro.png" className="hidden md:block md:self-center h-full object-cover" />
    <div className="self-center p-8">
      <h1 className="text-5xl mb-8 font-bold text-mark">Grupo Monyohu</h1>
      <p>Llámanos o manda WA al contacto de las oficinas centrales <a href="tel:5585265946" className="text-mark font-bold underline">55 8526 5946</a></p>
      <ul className="grid md:grid-cols-2 text-lg list-disc ml-10 gap-3 mt-8 mb-4">
        <li className="md:col-span-2">
          Siempre otorgamos el{' '}
          <span className="font-bold">10% de descuento</span> en apoyo a tu
          economía
        </li>
        <li>Revision gratis</li>
        <li>
          Contamos con <span className="font-bold">tecnicos capacitados</span>
        </li>
        <li>Estamos establecidos</li>
        <li>Garantia por escrito</li>
        <li>Registrados ante el SAT</li>
        <li>
          Entregamos <span className="font-bold">garantía</span>
        </li>
        <li>Contamos con refaccionarias y almacén</li>
      </ul>
      <p className="text-xl">
        No somos un Call Center fantasma, somos un servicio con más de{' '}
        <span className="font-bold">30 años de experiencia</span>
      </p>
    </div>
  </div>
)

export default Landing
