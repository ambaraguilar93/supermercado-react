import { formatoPeso, nombreCategoria } from '../../utils/inventario.js'
import Boton from '../ui/Boton.jsx'
import BarraStock from '../ui/BarraStock.jsx'
import EstadoStockBadge from '../ui/EstadoStockBadge.jsx'

// Información completa de un producto y botón para agregarlo al carrito
function DetalleProducto({ producto, enCarrito, onAgregar }) {
  const sinStock = producto.stock === 0

  return (
    <article className="grid gap-6 rounded-2xl border border-borde bg-white p-6 shadow-sm md:grid-cols-[16rem_1fr]">
      <div
        className="flex h-48 items-center justify-center rounded-2xl bg-fondo text-[6rem] md:h-full"
        aria-hidden="true"
      >
        {producto.emoji}
      </div>

      <div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <EstadoStockBadge producto={producto} />
          <span className="font-mono text-xs text-slate-500">{producto.sku}</span>
        </div>
        <h1 className="mb-1 text-3xl font-extrabold text-primario-oscuro">{producto.nombre}</h1>
        <p className="mb-1 font-semibold text-primario">{producto.marca}</p>
        <p className="mb-3 text-texto-suave">
          {producto.presentacion} · {nombreCategoria(producto.categoria)}
        </p>
        <p className="mb-4 text-3xl font-extrabold text-primario-oscuro">{formatoPeso(producto.precio)}</p>

        <div className="mb-5 max-w-sm">
          <BarraStock producto={producto} />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Boton onClick={onAgregar} disabled={sinStock} icono="bi-cart-plus">
            Agregar al carrito
          </Boton>
          {sinStock ? (
            <span className="text-sm text-peligro">Sin stock disponible por el momento.</span>
          ) : (
            enCarrito > 0 && (
              <span className="text-sm text-texto-suave">
                En tu carrito: <strong>{enCarrito}</strong>
              </span>
            )
          )}
        </div>
      </div>
    </article>
  )
}

export default DetalleProducto
