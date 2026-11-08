import { ESTADOS_STOCK } from '../../constants/inventario.js'
import { obtenerEstadoStock } from '../../utils/inventario.js'

const TAMANOS = {
  normal: 'px-3 py-1 text-xs',
  compacto: 'px-2.5 py-0.5 text-[0.72rem]',
}

// Insignia con el estado de stock de un producto (disponible, stock bajo o agotado)
function EstadoStockBadge({ producto, tamano = 'normal', className = '' }) {
  const estado = ESTADOS_STOCK[obtenerEstadoStock(producto)]

  return (
    <span className={`rounded-full font-bold whitespace-nowrap ${TAMANOS[tamano]} ${estado.insignia} ${className}`}>
      {estado.etiqueta}
    </span>
  )
}

export default EstadoStockBadge
