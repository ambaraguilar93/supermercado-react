import { useState } from 'react'
import { categorias, productos, obtenerEstadoStock, etiquetasEstado } from '../data/productos.js'
import './Home.css'

const formatoPeso = (valor) => '$' + valor.toLocaleString('es-CL')

function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState('todas')
  const [busqueda, setBusqueda] = useState('')
  const [estadoFiltro, setEstadoFiltro] = useState('todos')

  // Indicadores generales del inventario
  const totalProductos = productos.length
  const totalUnidades = productos.reduce((suma, p) => suma + p.stock, 0)
  const totalBajos = productos.filter((p) => obtenerEstadoStock(p) === 'bajo').length
  const totalAgotados = productos.filter((p) => obtenerEstadoStock(p) === 'agotado').length

  // Productos que cumplen con los filtros elegidos
  const productosFiltrados = productos.filter((p) => {
    const coincideCategoria = categoriaActiva === 'todas' || p.categoria === categoriaActiva
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.trim().toLowerCase())
    const coincideEstado = estadoFiltro === 'todos' || obtenerEstadoStock(p) === estadoFiltro
    return coincideCategoria && coincideBusqueda && coincideEstado
  })

  const limpiarFiltros = () => {
    setCategoriaActiva('todas')
    setBusqueda('')
    setEstadoFiltro('todos')
  }

  return (
    <div className="home">
      {/* Categorías, al estilo de los supermercados */}
      <div className="home-categorias">
        <div className="container">
          <ul className="home-categorias-lista" aria-label="Categorías">
            {categorias.map((cat) => (
              <li key={cat.id}>
                <button
                  type="button"
                  className={`home-categoria ${categoriaActiva === cat.id ? 'activa' : ''}`}
                  onClick={() => setCategoriaActiva(cat.id)}
                >
                  <i className={`bi ${cat.icono}`}></i>
                  {cat.nombre}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container py-4">
        {/* Banner principal */}
        <section className="mb-4">
          <div className="home-banner">
            <span className="home-banner-etiqueta">Gestión de inventario</span>
            <h1 className="home-banner-titulo">Controla el stock, siempre fresco y al día</h1>
            <p className="home-banner-texto mb-0">
              Revisa la disponibilidad de los productos de la sucursal, detecta lo que está por agotarse
              y mantén la vitrina siempre llena.
            </p>
          </div>
        </section>

        {/* Indicadores */}
        <section className="row g-3 mb-4" aria-label="Indicadores del inventario">
          <div className="col-6 col-lg-3">
            <div className="home-kpi">
              <span className="home-kpi-icono azul"><i className="bi bi-box-seam"></i></span>
              <div>
                <span className="home-kpi-valor">{totalProductos}</span>
                <span className="home-kpi-etiqueta">Productos</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="home-kpi">
              <span className="home-kpi-icono verde"><i className="bi bi-stack"></i></span>
              <div>
                <span className="home-kpi-valor">{totalUnidades.toLocaleString('es-CL')}</span>
                <span className="home-kpi-etiqueta">Unidades en stock</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="home-kpi">
              <span className="home-kpi-icono naranja"><i className="bi bi-exclamation-circle"></i></span>
              <div>
                <span className="home-kpi-valor">{totalBajos}</span>
                <span className="home-kpi-etiqueta">Stock bajo</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="home-kpi">
              <span className="home-kpi-icono rojo"><i className="bi bi-x-circle"></i></span>
              <div>
                <span className="home-kpi-valor">{totalAgotados}</span>
                <span className="home-kpi-etiqueta">Agotados</span>
              </div>
            </div>
          </div>
        </section>

        {/* Buscador y filtro por estado */}
        <section className="home-filtros tarjeta-sitio p-3 mb-4">
          <div className="row g-2 align-items-center">
            <div className="col-md-7">
              <label htmlFor="busqueda" className="visually-hidden">Buscar producto</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="bi bi-search"></i></span>
                <input
                  id="busqueda"
                  type="search"
                  className="form-control"
                  placeholder="Busca un producto por nombre"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </div>
            </div>
            <div className="col-8 col-md-3">
              <label htmlFor="estado" className="visually-hidden">Filtrar por estado de stock</label>
              <select
                id="estado"
                className="form-select"
                value={estadoFiltro}
                onChange={(e) => setEstadoFiltro(e.target.value)}
              >
                <option value="todos">Todos los estados</option>
                <option value="disponible">Disponible</option>
                <option value="bajo">Stock bajo</option>
                <option value="agotado">Agotado</option>
              </select>
            </div>
            <div className="col-4 col-md-2 d-grid">
              <button type="button" className="btn btn-outline-primary" onClick={limpiarFiltros}>
                Limpiar
              </button>
            </div>
          </div>
        </section>

        {/* Listado de productos */}
        <section aria-label="Listado de productos">
          <div className="d-flex justify-content-between align-items-end mb-3">
            <h2 className="h4 pagina-titulo mb-0">Productos en bodega</h2>
            <span className="pagina-subtitulo small">
              {productosFiltrados.length} de {totalProductos} productos
            </span>
          </div>

          {productosFiltrados.length === 0 ? (
            <div className="tarjeta-sitio text-center p-5">
              <i className="bi bi-search fs-1 text-secondary"></i>
              <p className="mt-2 mb-0">No encontramos productos con esos filtros.</p>
            </div>
          ) : (
            <div className="row g-3">
              {productosFiltrados.map((producto) => {
                const estado = obtenerEstadoStock(producto)
                // Porcentaje de la barra (stock actual respecto al doble del mínimo)
                const porcentaje = Math.min(100, Math.round((producto.stock / (producto.stockMinimo * 2)) * 100))
                return (
                  <div key={producto.id} className="col-6 col-md-4 col-lg-3">
                    <article className="producto-tarjeta">
                      <span className={`producto-estado ${estado}`}>{etiquetasEstado[estado]}</span>
                      <div className="producto-imagen" aria-hidden="true">{producto.emoji}</div>
                      <p className="producto-sku mb-1">{producto.sku}</p>
                      <h3 className="producto-nombre">{producto.nombre}</h3>
                      <p className="producto-presentacion">{producto.presentacion}</p>
                      <p className="producto-precio">{formatoPeso(producto.precio)}</p>
                      <div className="producto-stock">
                        <div className="d-flex justify-content-between small">
                          <span>Stock</span>
                          <strong>{producto.stock} un.</strong>
                        </div>
                        <div className="progress" role="progressbar" aria-label={`Nivel de stock de ${producto.nombre}`} aria-valuenow={porcentaje} aria-valuemin="0" aria-valuemax="100">
                          <div className={`progress-bar barra-${estado}`} style={{ width: `${porcentaje}%` }}></div>
                        </div>
                        <small className="text-secondary">Mínimo: {producto.stockMinimo} un.</small>
                      </div>
                    </article>
                  </div>
                )
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Home
