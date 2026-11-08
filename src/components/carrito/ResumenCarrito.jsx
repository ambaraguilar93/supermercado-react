import { formatoPeso } from '../../utils/inventario.js'
import Boton from '../ui/Boton.jsx'

// Totales del carrito
function ResumenCarrito({ totalUnidades, totalPrecio }) {
  return (
    <aside
      aria-label="Resumen del carrito"
      className="h-fit rounded-2xl border border-borde bg-white p-5 shadow-sm"
    >
      <h2 className="mb-3 text-lg font-extrabold text-primario-oscuro">Resumen</h2>
      <dl className="mb-4 grid grid-cols-2 gap-y-2">
        <dt className="text-texto-suave">Unidades</dt>
        <dd className="mb-0 text-right font-bold">{totalUnidades}</dd>
        <dt className="text-texto-suave">Total</dt>
        <dd className="mb-0 text-right text-xl font-extrabold text-primario-oscuro">{formatoPeso(totalPrecio)}</dd>
      </dl>
      <Boton to="/articulos" variante="secundario" bloque>
        Seguir viendo artículos
      </Boton>
    </aside>
  )
}

export default ResumenCarrito
