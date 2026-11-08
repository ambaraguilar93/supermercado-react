import { useNavigate } from 'react-router'
import { formatoPeso, nombreCategoria } from '../../utils/inventario.js'
import Boton from '../ui/Boton.jsx'
import EstadoStockBadge from '../ui/EstadoStockBadge.jsx'

// Una fila de la tabla de artículos
function FilaArticulo({ producto }) {
  const navegar = useNavigate()
  const rutaDetalle = `/articulos/${producto.id}`

  // Clic fue sobre el botón (enlace)
  const abrirDetalle = (e) => {
    if (e.target.closest('a')) return
    navegar(rutaDetalle)
  }

  return (
    <tr
      onClick={abrirDetalle}
      className="cursor-pointer odd:bg-white even:bg-slate-50 hover:bg-primario-claro/60"
    >
      <td className="px-4 py-3 font-mono text-xs text-slate-500">{producto.sku}</td>
      <td className="px-4 py-3 font-semibold text-slate-800">
        <span aria-hidden="true" className="mr-2">{producto.emoji}</span>
        {producto.nombre}
      </td>
      <td className="px-4 py-3">{producto.marca}</td>
      <td className="px-4 py-3">{producto.presentacion}</td>
      <td className="px-4 py-3">{nombreCategoria(producto.categoria)}</td>
      <td className="px-4 py-3 whitespace-nowrap">{formatoPeso(producto.precio)}</td>
      <td className="px-4 py-3">{producto.stock}</td>
      <td className="px-4 py-3">{producto.stockMinimo}</td>
      <td className="px-4 py-3">
        <EstadoStockBadge producto={producto} />
      </td>
      <td className="px-4 py-3">
        <Boton to={rutaDetalle} variante="secundario" tamano="pequeno" aria-label={`Ver detalle de ${producto.nombre}`}>
          Ver detalle
        </Boton>
      </td>
    </tr>
  )
}

export default FilaArticulo
