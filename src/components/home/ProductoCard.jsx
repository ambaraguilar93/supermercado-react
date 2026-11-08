import { formatoPeso } from '../../utils/inventario.js'
import Boton from '../ui/Boton.jsx'
import BarraStock from '../ui/BarraStock.jsx'
import EstadoStockBadge from '../ui/EstadoStockBadge.jsx'

// Tarjeta de un producto del inventario
function ProductoCard({ producto }) {
  return (
    <article className="relative flex h-full flex-col rounded-xl border border-borde bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(16,42,80,0.12)]">
      <EstadoStockBadge producto={producto} tamano="compacto" className="absolute top-3 left-3" />
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
      <BarraStock producto={producto} />
      <div className="mt-auto pt-3">
        <Boton to={`/articulos/${producto.id}`} variante="secundario" tamano="pequeno" bloque>
          Ver detalle
        </Boton>
      </div>
    </article>
  )
}

export default ProductoCard
