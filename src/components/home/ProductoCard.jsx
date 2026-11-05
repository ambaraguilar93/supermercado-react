import { ESTADOS_STOCK } from '../../constants/inventario.js'
import { formatoPeso, obtenerEstadoStock, porcentajeStock } from '../../utils/inventario.js'

// Tarjeta de un producto del inventario
function ProductoCard({ producto }) {
  const estado = ESTADOS_STOCK[obtenerEstadoStock(producto)]
  const porcentaje = porcentajeStock(producto)

  return (
    <article className="relative h-full rounded-xl border border-borde bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(16,42,80,0.12)]">
      <span className={`absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-[0.72rem] font-bold ${estado.insignia}`}>
        {estado.etiqueta}
      </span>
      <div
        className="mt-[18px] mb-2 flex h-24 items-center justify-center rounded-xl bg-fondo text-[3.6rem]"
        aria-hidden="true"
      >
        {producto.emoji}
      </div>
      <p className="mb-1 text-[0.72rem] tracking-wide text-texto-suave">{producto.sku}</p>
      <h3 className="mb-0.5 text-base font-bold">{producto.nombre}</h3>
      <p className="mb-0.5 text-[0.8rem] font-semibold text-primario">{producto.marca}</p>
      <p className="mb-1.5 text-[0.82rem] text-texto-suave">{producto.presentacion}</p>
      <p className="mb-2.5 text-xl font-extrabold text-primario-oscuro">{formatoPeso(producto.precio)}</p>
      <div>
        <div className="flex justify-between text-sm">
          <span>Stock</span>
          <strong>{producto.stock} un.</strong>
        </div>
        <div
          className="my-1 h-2 overflow-hidden rounded-full bg-slate-200"
          role="progressbar"
          aria-label={`Nivel de stock de ${producto.nombre}`}
          aria-valuenow={porcentaje}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className={`h-full rounded-full ${estado.barra}`} style={{ width: `${porcentaje}%` }}></div>
        </div>
        <small className="text-sm text-texto-suave">Mínimo: {producto.stockMinimo} un.</small>
      </div>
    </article>
  )
}

export default ProductoCard
