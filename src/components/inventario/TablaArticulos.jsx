import FilaArticulo from './FilaArticulo.jsx'

const columnas = ['SKU', 'Producto', 'Marca', 'Presentación', 'Categoría', 'Precio', 'Stock', 'Mínimo', 'Estado', 'Detalle']

// Tabla con los artículos que recibe por props
function TablaArticulos({ productos }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-borde bg-white shadow-sm">
      <table className="w-full min-w-[60rem] text-left text-sm">
        <caption className="sr-only">Listado de artículos del inventario</caption>
        <thead className="bg-primario-claro text-primario-oscuro">
          <tr>
            {columnas.map((col) => (
              <th key={col} scope="col" className="px-4 py-3 font-bold whitespace-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-borde">
          {productos.map((producto) => (
            <FilaArticulo key={producto.id} producto={producto} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaArticulos
