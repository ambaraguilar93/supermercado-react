import { useState } from 'react'
import { useCarrito } from '../hooks/useCarrito.js'
import Boton from '../components/ui/Boton.jsx'
import EncabezadoPagina from '../components/ui/EncabezadoPagina.jsx'
import EstadoVacio from '../components/ui/EstadoVacio.jsx'
import ItemCarrito from '../components/carrito/ItemCarrito.jsx'
import ResumenCarrito from '../components/carrito/ResumenCarrito.jsx'

// Carrito de compras aumenta o disminuye una cantidad y actualiza también el stock del inventario
function Carrito() {
  const { items, totalUnidades, totalPrecio, agregar, disminuir } = useCarrito()
  const [aviso, setAviso] = useState('')

  const manejarAumentar = ({ producto }) => {
    agregar(producto.id)
    setAviso(`Se aumentó la cantidad de «${producto.nombre}».`)
  }

  const manejarDisminuir = ({ producto, cantidad }) => {
    disminuir(producto.id)
    setAviso(
      cantidad === 1
        ? `«${producto.nombre}» se quitó del carrito.`
        : `Se disminuyó la cantidad de «${producto.nombre}».`,
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <EncabezadoPagina
        titulo="Carrito de compras"
        descripcion="Cada cambio de cantidad actualiza el stock disponible del inventario."
      />

      {items.length === 0 ? (
        <EstadoVacio icono="bi-cart-x" mensaje="Tu carrito está vacío.">
          <Boton to="/articulos" icono="bi-table">
            Ver artículos
          </Boton>
        </EstadoVacio>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {items.map((item) => (
              <ItemCarrito
                key={item.producto.id}
                item={item}
                onAumentar={() => manejarAumentar(item)}
                onDisminuir={() => manejarDisminuir(item)}
              />
            ))}
          </ul>
          <ResumenCarrito totalUnidades={totalUnidades} totalPrecio={totalPrecio} />
        </div>
      )}

      <p role="status" aria-live="polite" className="mt-4 mb-0 min-h-6 text-sm font-semibold text-acento-oscuro">
        {aviso}
      </p>
    </div>
  )
}

export default Carrito
