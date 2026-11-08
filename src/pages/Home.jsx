import { useState } from 'react'
import { useInventario } from '../context/InventarioContext.jsx'
import { filtrarProductos } from '../utils/inventario.js'
import CategoriasNav from '../components/home/CategoriasNav.jsx'
import BannerPrincipal from '../components/home/BannerPrincipal.jsx'
import PanelIndicadores from '../components/home/PanelIndicadores.jsx'
import FiltrosInventario from '../components/home/FiltrosInventario.jsx'
import ProductoCard from '../components/home/ProductoCard.jsx'
import EstadoVacio from '../components/ui/EstadoVacio.jsx'

function Home() {
  // El inventario viene del estado global, los filtros son estado local de esta página
  const { productos } = useInventario()
  const [categoriaActiva, setCategoriaActiva] = useState('todas')
  const [busqueda, setBusqueda] = useState('')
  const [estadoFiltro, setEstadoFiltro] = useState('todos')

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
        <BannerPrincipal />
        <PanelIndicadores productos={productos} />

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
              {productosFiltrados.length} de {productos.length} productos
            </span>
          </div>

          {productosFiltrados.length === 0 ? (
            <EstadoVacio icono="bi-search" mensaje="No encontramos productos con esos filtros." />
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
