import { useState } from 'react'
import { useInventario } from '../context/InventarioContext.jsx'
import { calcularIndicadores, filtrarProductos } from '../utils/inventario.js'
import CategoriasNav from '../components/home/CategoriasNav.jsx'
import KpiCard from '../components/home/KpiCard.jsx'
import FiltrosInventario from '../components/home/FiltrosInventario.jsx'
import ProductoCard from '../components/home/ProductoCard.jsx'
import './Home.css'

function Home() {
  // El inventario viene del estado global
  // Los filtros son estado local de esta página
  const { productos } = useInventario()
  const [categoriaActiva, setCategoriaActiva] = useState('todas')
  const [busqueda, setBusqueda] = useState('')
  const [estadoFiltro, setEstadoFiltro] = useState('todos')

  const { totalProductos, totalUnidades, totalBajos, totalAgotados } = calcularIndicadores(productos)

  // Un arreglo de datos + un solo componente KpiCard
  const indicadores = [
    { id: 'productos', icono: 'bi-box-seam', color: 'azul', valor: totalProductos, etiqueta: 'Productos' },
    { id: 'unidades', icono: 'bi-stack', color: 'verde', valor: totalUnidades.toLocaleString('es-CL'), etiqueta: 'Unidades en stock' },
    { id: 'bajos', icono: 'bi-exclamation-circle', color: 'naranja', valor: totalBajos, etiqueta: 'Stock bajo' },
    { id: 'agotados', icono: 'bi-x-circle', color: 'rojo', valor: totalAgotados, etiqueta: 'Agotados' },
  ]

  const productosFiltrados = filtrarProductos(productos, {
    categoria: categoriaActiva,
    busqueda,
    estado: estadoFiltro,
  })

  const limpiarFiltros = () => {
    setCategoriaActiva('todas')
    setBusqueda('')
    setEstadoFiltro('todos')
  }

  return (
    <div className="home">
      <CategoriasNav categoriaActiva={categoriaActiva} onSeleccionar={setCategoriaActiva} />

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
          {indicadores.map((kpi) => (
            <div key={kpi.id} className="col-6 col-lg-3">
              <KpiCard icono={kpi.icono} color={kpi.color} valor={kpi.valor} etiqueta={kpi.etiqueta} />
            </div>
          ))}
        </section>

        <FiltrosInventario
          busqueda={busqueda}
          onBusqueda={setBusqueda}
          estado={estadoFiltro}
          onEstado={setEstadoFiltro}
          onLimpiar={limpiarFiltros}
        />

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
              {productosFiltrados.map((producto) => (
                <div key={producto.id} className="col-6 col-md-4 col-lg-3">
                  <ProductoCard producto={producto} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Home
