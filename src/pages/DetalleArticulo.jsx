import { useState } from 'react'
import { useParams } from 'react-router'
import { useInventario } from '../context/InventarioContext.jsx'
import Boton from '../components/ui/Boton.jsx'
import EstadoVacio from '../components/ui/EstadoVacio.jsx'
import DetalleProducto from '../components/inventario/DetalleProducto.jsx'

// Detalle de un artículo, el id llega por la URL (/articulos/:productoId) como texto
function DetalleArticulo() {
  const { productoId } = useParams()
  const { productos, carrito, agregarAlCarrito } = useInventario()
  const [aviso, setAviso] = useState('')

  // Los ids de los productos son números y useParams entrega texto
  const producto = productos.find((p) => String(p.id) === productoId)

  if (!producto) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <EstadoVacio icono="bi-question-circle" mensaje="El artículo que buscas no existe en el inventario.">
          <Boton to="/articulos" icono="bi-arrow-left">
            Volver a artículos
          </Boton>
        </EstadoVacio>
      </div>
    )
  }

  const enCarrito = carrito.find((entrada) => entrada.productoId === producto.id)?.cantidad ?? 0

  const manejarAgregar = () => {
    agregarAlCarrito(producto.id)
    setAviso(`«${producto.nombre}» se agregó al carrito.`)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-5 flex flex-wrap gap-2">
        <Boton to="/articulos" variante="secundario" icono="bi-arrow-left">
          Volver a artículos
        </Boton>
        <Boton to="/carrito" icono="bi-cart3">
          Ir al carrito
        </Boton>
      </div>

      <DetalleProducto producto={producto} enCarrito={enCarrito} onAgregar={manejarAgregar} />

      <p role="status" aria-live="polite" className="mt-4 mb-0 min-h-6 text-sm font-semibold text-acento-oscuro">
        {aviso}
      </p>
    </div>
  )
}

export default DetalleArticulo
