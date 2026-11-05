import { useState } from 'react'
import { useInventario } from '../context/InventarioContext.jsx'
import { calcularIndicadores, filtrarProductos } from '../utils/inventario.js'
import CategoriasNav from '../components/home/CategoriasNav.jsx'
import KpiCard from '../components/home/KpiCard.jsx'
import FiltrosInventario from '../components/home/FiltrosInventario.jsx'
import ProductoCard from '../components/home/ProductoCard.jsx'

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
    <div>
      <CategoriasNav categoriaActiva={categoriaActiva} onSeleccionar={setCategoriaActiva} />

      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Banner principal */}
        <section className="mb-6">
          <div className="relative overflow-hidden rounded-[18px] bg-linear-[120deg,var(--color-primario)_0%,var(--color-azul-medio)_60%,var(--color-acento)_140%] p-8 text-white after:absolute after:right-6 after:-bottom-3.5 after:text-[7rem] after:opacity-20 after:content-['🛒']">
            <span className="mb-3 inline-block rounded-full bg-acento px-3 py-1 text-[0.78rem] font-bold tracking-wide uppercase">
              Gestión de inventario
            </span>
            <h1 className="mb-2 max-w-[560px] text-[clamp(1.5rem,3.4vw,2.3rem)] font-extrabold">
              Controla el stock, siempre fresco y al día
            </h1>
            <p className="mb-0 max-w-[520px] opacity-95">
              Revisa la disponibilidad de los productos de la sucursal, detecta lo que está por agotarse
              y mantén la vitrina siempre llena.
            </p>
          </div>
        </section>

        {/* Indicadores */}
        <section className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label="Indicadores del inventario">
          {indicadores.map((kpi) => (
            <KpiCard key={kpi.id} icono={kpi.icono} color={kpi.color} valor={kpi.valor} etiqueta={kpi.etiqueta} />
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
          <div className="mb-4 flex items-end justify-between">
            <h2 className="mb-0 text-2xl font-extrabold text-primario-oscuro">Productos en bodega</h2>
            <span className="text-sm text-texto-suave">
              {productosFiltrados.length} de {totalProductos} productos
            </span>
          </div>

          {productosFiltrados.length === 0 ? (
            <div className="rounded-xl border border-borde bg-white p-12 text-center shadow-sm">
              <i className="bi bi-search text-5xl text-texto-suave"></i>
              <p className="mt-2 mb-0">No encontramos productos con esos filtros.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {productosFiltrados.map((producto) => (
                <ProductoCard key={producto.id} producto={producto} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Home
