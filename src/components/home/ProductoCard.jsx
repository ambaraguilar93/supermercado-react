import { etiquetasEstado } from '../../constants/inventario.js'
import { formatoPeso, obtenerEstadoStock, porcentajeStock } from '../../utils/inventario.js'

// Tarjeta de un producto del inventario
function ProductoCard({ producto }) {
  const estado = obtenerEstadoStock(producto)
  const porcentaje = porcentajeStock(producto)

  return (
    <article className="producto-tarjeta">
      <span className={`producto-estado ${estado}`}>{etiquetasEstado[estado]}</span>
      <div className="producto-imagen" aria-hidden="true">{producto.emoji}</div>
      <p className="producto-sku mb-1">{producto.sku}</p>
      <h3 className="producto-nombre">{producto.nombre}</h3>
      <p className="producto-marca">{producto.marca}</p>
      <p className="producto-presentacion">{producto.presentacion}</p>
      <p className="producto-precio">{formatoPeso(producto.precio)}</p>
      <div className="producto-stock">
        <div className="d-flex justify-content-between small">
          <span>Stock</span>
          <strong>{producto.stock} un.</strong>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label={`Nivel de stock de ${producto.nombre}`}
          aria-valuenow={porcentaje}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className={`progress-bar barra-${estado}`} style={{ width: `${porcentaje}%` }}></div>
        </div>
        <small className="text-secondary">Mínimo: {producto.stockMinimo} un.</small>
      </div>
    </article>
  )
}

export default ProductoCard
