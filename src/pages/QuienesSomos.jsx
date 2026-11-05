import HeroPagina from '../components/HeroPagina.jsx'

const valores = [
  { icono: 'bi-heart', titulo: 'Cercanía', texto: 'Conocemos a nuestros vecinos y buscamos que cada visita sea una buena experiencia.' },
  { icono: 'bi-shield-check', titulo: 'Calidad', texto: 'Seleccionamos y controlamos cada producto para que llegue fresco a tu mesa.' },
  { icono: 'bi-tags', titulo: 'Precios justos', texto: 'Trabajamos directo con proveedores para ofrecer precios convenientes todos los días.' },
  { icono: 'bi-recycle', titulo: 'Sustentabilidad', texto: 'Reducimos mermas con un inventario ordenado y donamos los excedentes aptos.' },
]

const hitos = [
  { anio: '2001', texto: 'Abrimos nuestro primer local en Santiago Centro.' },
  { anio: '2010', texto: 'Inauguramos la quinta sucursal y la central de abastecimiento.' },
  { anio: '2018', texto: 'Incorporamos el control digital de stock en todas las tiendas.' },
  { anio: 'Hoy', texto: 'Más de 12 sucursales y un equipo comprometido con la frescura.' },
]

const tituloSeccion = 'text-[1.75rem] font-extrabold text-primario-oscuro'

function QuienesSomos() {
  return (
    <div>
      <HeroPagina
        etiqueta="Quiénes somos"
        titulo="Un supermercado con excelente gestión."
        bajada="En GranMarket combinamos el trato cercano de siempre con un control de inventario riguroso, para que nunca falte lo que necesitas."
      />

      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Historia */}
        <section className="mb-12 grid items-center gap-6 lg:grid-cols-2">
          <div>
            <h2 className={`mb-2 ${tituloSeccion}`}>Nuestra historia</h2>
            <p className="mb-4">
              GranMarket nació en 2001 como un pequeño almacén familiar en el centro de Santiago. Lo que
              comenzó con unas pocas vitrinas y la idea de vender productos frescos a precios justos, hoy es
              una red de sucursales que atiende a miles de familias cada semana.
            </p>
            <p className="mb-0">
              Un buen supermercado se construye desde la bodega.
              Por eso desarrollamos este sistema de gestión de inventario, que nos permite saber qué tenemos,
              qué falta y qué debemos reponer antes de que el cliente lo note.
            </p>
          </div>
          <div className="grid gap-4 border-l-[3px] border-acento pl-5">
            {hitos.map((hito) => (
              <div
                key={hito.anio}
                className="relative rounded-xl border border-borde bg-white px-4 py-3 before:absolute before:top-[18px] before:-left-[30px] before:size-3.5 before:rounded-full before:border-[3px] before:border-fondo before:bg-primario before:content-['']"
              >
                <span className="block font-extrabold text-primario">{hito.anio}</span>
                <span>{hito.texto}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Misión y visión */}
        <section className="mb-12 grid gap-3 md:grid-cols-2">
          <div className="h-full rounded-2xl bg-primario-claro p-7 text-primario-oscuro">
            <i className="bi bi-flag mb-2 block text-[2rem]"></i>
            <h2 className="mb-2 text-2xl font-bold">Misión</h2>
            <p className="mb-0">
              Acercar alimentos frescos y productos de calidad a las familias, con un servicio amable y una
              operación ordenada que asegure disponibilidad todos los días.
            </p>
          </div>
          <div className="h-full rounded-2xl bg-acento-claro p-7 text-green-900">
            <i className="bi bi-binoculars mb-2 block text-[2rem]"></i>
            <h2 className="mb-2 text-2xl font-bold">Visión</h2>
            <p className="mb-0">
              Ser el supermercado de barrio más confiable del país, reconocido por su frescura, su cercanía
              y su gestión eficiente de los recursos.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-12">
          <h2 className={`mb-4 ${tituloSeccion}`}>Nuestros valores</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((valor) => (
              <div key={valor.titulo} className="h-full rounded-xl border border-borde bg-white p-5 shadow-sm">
                <span className="mb-2.5 inline-flex size-11 items-center justify-center rounded-xl bg-primario-claro text-[1.3rem] text-primario">
                  <i className={`bi ${valor.icono}`}></i>
                </span>
                <h3 className="mb-2 font-bold">{valor.titulo}</h3>
                <p className="mb-0 text-sm text-texto-suave">{valor.texto}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default QuienesSomos
