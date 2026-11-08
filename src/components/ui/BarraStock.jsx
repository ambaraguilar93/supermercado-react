import { ESTADOS_STOCK } from '../../constants/inventario.js'
import { obtenerEstadoStock, porcentajeStock } from '../../utils/inventario.js'

// Stock actual, barra de nivel y stock mínimo de un producto
function BarraStock({ producto }) {
  const estado = ESTADOS_STOCK[obtenerEstadoStock(producto)]
  const porcentaje = porcentajeStock(producto)

  return (
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
  )
}

export default BarraStock
