import { calcularIndicadores } from '../../utils/inventario.js'
import KpiCard from './KpiCard.jsx'

// Las 4 tarjetas de indicadores en un arreglo de datos y un solo componente KpiCard
function PanelIndicadores({ productos }) {
  const { totalProductos, totalUnidades, totalBajos, totalAgotados } = calcularIndicadores(productos)

  const indicadores = [
    { id: 'productos', icono: 'bi-box-seam', color: 'azul', valor: totalProductos, etiqueta: 'Productos' },
    { id: 'unidades', icono: 'bi-stack', color: 'verde', valor: totalUnidades.toLocaleString('es-CL'), etiqueta: 'Unidades en stock' },
    { id: 'bajos', icono: 'bi-exclamation-circle', color: 'naranja', valor: totalBajos, etiqueta: 'Stock bajo' },
    { id: 'agotados', icono: 'bi-x-circle', color: 'rojo', valor: totalAgotados, etiqueta: 'Agotados' },
  ]

  return (
    <section className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label="Indicadores del inventario">
      {indicadores.map((kpi) => (
        <KpiCard key={kpi.id} icono={kpi.icono} color={kpi.color} valor={kpi.valor} etiqueta={kpi.etiqueta} />
      ))}
    </section>
  )
}

export default PanelIndicadores
