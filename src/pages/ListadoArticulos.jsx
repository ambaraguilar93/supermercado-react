import { useState } from 'react'
import { useInventario } from '../context/InventarioContext.jsx'
import { CATEGORIA_TODAS } from '../constants/inventario.js'
import { filtrarPorCategoria } from '../utils/inventario.js'
import Boton from '../components/ui/Boton.jsx'
import EncabezadoPagina from '../components/ui/EncabezadoPagina.jsx'
import EstadoVacio from '../components/ui/EstadoVacio.jsx'
import FiltroCategoria from '../components/inventario/FiltroCategoria.jsx'
import TablaArticulos from '../components/inventario/TablaArticulos.jsx'

// Tabla de todos los artículos del inventario, con filtro por categoría
function ListadoArticulos() {
  // El inventario es global, la categoría elegida es estado local de esta página
  const { productos } = useInventario()
  const [categoria, setCategoria] = useState(CATEGORIA_TODAS)

  // La lista derivada se recalcula en cada render y el inventario original nunca se modifica
  const visibles = filtrarPorCategoria(productos, categoria)

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <EncabezadoPagina
        titulo="Artículos del inventario"
        descripcion={`${productos.length} ${productos.length === 1 ? 'artículo registrado' : 'artículos registrados'} en la sucursal.`}
      >
        <Boton to="/ingresar-articulo" icono="bi-plus-lg">
          Ingresar artículo
        </Boton>
      </EncabezadoPagina>

      {productos.length === 0 ? (
        <EstadoVacio mensaje="Aún no hay artículos en el inventario." />
      ) : (
        <>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <FiltroCategoria categoria={categoria} onCambiar={setCategoria} />
            <span className="text-sm text-texto-suave" aria-live="polite">
              {visibles.length} de {productos.length} artículos
            </span>
          </div>

          {visibles.length === 0 ? (
            <EstadoVacio icono="bi-search" mensaje="No hay artículos en la categoría seleccionada.">
              <Boton variante="secundario" onClick={() => setCategoria(CATEGORIA_TODAS)}>
                Ver todas las categorías
              </Boton>
            </EstadoVacio>
          ) : (
            <TablaArticulos productos={visibles} />
          )}
        </>
      )}
    </div>
  )
}

export default ListadoArticulos
