import { Link } from 'react-router'
import { formatoPeso } from '../../utils/inventario.js'
import ContadorCantidad from './ContadorCantidad.jsx'

// Un producto del carrito (datos, stock que queda en el inventario, cantidad y subtotal)
function ItemCarrito({ item, onAumentar, onDisminuir }) {
  const { producto, cantidad, subtotal } = item

  return (
    <li className="flex flex-col gap-4 rounded-2xl border border-borde bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      <div
        className="flex size-20 shrink-0 items-center justify-center rounded-xl bg-fondo text-5xl"
        aria-hidden="true"
      >
        {producto.emoji}
      </div>

      <div className="grow">
        <h2 className="mb-0.5 text-lg font-bold">
          <Link to={`/articulos/${producto.id}`} className="text-primario-oscuro no-underline hover:underline">
            {producto.nombre}
          </Link>
        </h2>
        <p className="mb-0.5 text-sm text-texto-suave">
          {producto.marca} · {producto.presentacion}
        </p>
        <p className="mb-0 text-sm text-texto-suave">
          {formatoPeso(producto.precio)} c/u · Disponibles en inventario: <strong>{producto.stock}</strong>
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
        <ContadorCantidad
          nombre={producto.nombre}
          cantidad={cantidad}
          puedeAumentar={producto.stock > 0}
          onAumentar={onAumentar}
          onDisminuir={onDisminuir}
        />
        <span className="text-lg font-extrabold text-primario-oscuro">{formatoPeso(subtotal)}</span>
      </div>
    </li>
  )
}

export default ItemCarrito
