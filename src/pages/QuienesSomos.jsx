import './QuienesSomos.css'

const valores = [
  { icono: 'bi-heart', titulo: 'Cercanía', texto: 'Conocemos a nuestros vecinos y buscamos que cada visita sea una buena experiencia.' },
  { icono: 'bi-shield-check', titulo: 'Calidad', texto: 'Seleccionamos y controlamos cada producto para que llegue fresco a tu mesa.' },
  { icono: 'bi-tags', titulo: 'Precios justos', texto: 'Trabajamos directo con proveedores para ofrecer precios convenientes todos los días.' },
  { icono: 'bi-recycle', titulo: 'Sustentabilidad', texto: 'Reducimos mermas con un inventario ordenado y donamos los excedentes aptos.' },
]

function QuienesSomos() {
  return (
    <div className="quienes">
      <section className="quienes-hero">
        <div className="container">
          <span className="quienes-etiqueta">Quiénes somos</span>
          <h1 className="quienes-titulo">Un supermercado con excelente gestión.</h1>
          <p className="quienes-bajada">
            En GranMarket combinamos el trato cercano de siempre con un control de inventario riguroso,
            para que nunca falte lo que necesitas.
          </p>
        </div>
      </section>

      <div className="container py-4">
        {/* Historia */}
        <section className="row g-4 align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="pagina-titulo h3">Nuestra historia</h2>
            <p>
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
          <div className="col-lg-6">
            <div className="quienes-linea">
              <div className="quienes-hito">
                <span className="quienes-hito-anio">2001</span>
                <span>Abrimos nuestro primer local en Santiago Centro.</span>
              </div>
              <div className="quienes-hito">
                <span className="quienes-hito-anio">2010</span>
                <span>Inauguramos la quinta sucursal y la central de abastecimiento.</span>
              </div>
              <div className="quienes-hito">
                <span className="quienes-hito-anio">2018</span>
                <span>Incorporamos el control digital de stock en todas las tiendas.</span>
              </div>
              <div className="quienes-hito">
                <span className="quienes-hito-anio">Hoy</span>
                <span>Más de 12 sucursales y un equipo comprometido con la frescura.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y visión */}
        <section className="row g-3 mb-5">
          <div className="col-md-6">
            <div className="quienes-mv quienes-mv-azul h-100">
              <i className="bi bi-flag"></i>
              <h2 className="h4">Misión</h2>
              <p className="mb-0">
                Acercar alimentos frescos y productos de calidad a las familias, con un servicio amable y una
                operación ordenada que asegure disponibilidad todos los días.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="quienes-mv quienes-mv-verde h-100">
              <i className="bi bi-binoculars"></i>
              <h2 className="h4">Visión</h2>
              <p className="mb-0">
                Ser el supermercado de barrio más confiable del país, reconocido por su frescura, su cercanía
                y su gestión eficiente de los recursos.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-5">
          <h2 className="pagina-titulo h3 mb-3">Nuestros valores</h2>
          <div className="row g-3">
            {valores.map((valor) => (
              <div key={valor.titulo} className="col-sm-6 col-lg-3">
                <div className="tarjeta-sitio quienes-valor h-100">
                  <span className="quienes-valor-icono"><i className={`bi ${valor.icono}`}></i></span>
                  <h3 className="h6 fw-bold">{valor.titulo}</h3>
                  <p className="mb-0 small text-secondary">{valor.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default QuienesSomos
