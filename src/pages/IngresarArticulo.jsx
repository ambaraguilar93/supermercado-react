import { Link } from 'react-router'
import CampoFormulario, { claseInput } from '../components/CampoFormulario.jsx'
import { useFormularioProducto } from '../hooks/useFormularioProducto.js'
import { CATEGORIAS_PRODUCTO } from '../constants/inventario.js'

// Ingresar nuevos artículos al inventario (useFormularioProducto)
function IngresarArticulo() {
  const { valores, errores, exito, skuPrevisto, manejarCambio, manejarEnvio, limpiar } =
    useFormularioProducto()

  const props = (campo) => ({
    id: campo,
    name: campo,
    value: valores[campo],
    onChange: manejarCambio,
    className: claseInput(Boolean(errores[campo])),
    'aria-invalid': errores[campo] ? 'true' : undefined,
    'aria-describedby': errores[campo] ? `${campo}-error` : undefined,
  })

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <header className="mb-6">
        <h1 className="mb-1 text-3xl font-extrabold text-primario-oscuro">Ingresar artículo</h1>
        <p className="mb-0 text-slate-600">
          Agrega un producto nuevo al inventario. Aparecerá en el inicio y en el listado de artículos.
        </p>
      </header>

      {exito && (
        <div
          role="status"
          className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-acento bg-acento-claro px-4 py-3 text-green-900"
        >
          <span>
            <i className="bi bi-check-circle-fill mr-2"></i>
            «{exito.nombre}» se agregó al inventario con el SKU <strong>{exito.sku}</strong>.
          </span>
          <Link to="/articulos" className="font-semibold text-primario underline">
            Ver artículos
          </Link>
        </div>
      )}

      <form
        onSubmit={manejarEnvio}
        noValidate
        className="rounded-2xl border border-borde bg-white p-6 shadow-sm"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <CampoFormulario id="nombre" etiqueta="Nombre del producto" error={errores.nombre}>
            <input {...props('nombre')} type="text" placeholder="Ej. Leche descremada" />
          </CampoFormulario>

          <CampoFormulario id="marca" etiqueta="Marca" error={errores.marca}>
            <input {...props('marca')} type="text" placeholder="Ej. Soprole" />
          </CampoFormulario>

          <CampoFormulario id="presentacion" etiqueta="Presentación" error={errores.presentacion}>
            <input {...props('presentacion')} type="text" placeholder="Ej. Caja 1 L" />
          </CampoFormulario>

          <CampoFormulario
            id="categoria"
            etiqueta="Categoría"
            error={errores.categoria}
            ayuda={skuPrevisto ? `SKU que se asignará: ${skuPrevisto}` : 'El SKU se genera según la categoría.'}
          >
            <select {...props('categoria')}>
              <option value="">Selecciona una categoría</option>
              {CATEGORIAS_PRODUCTO.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
          </CampoFormulario>

          <CampoFormulario id="precio" etiqueta="Precio (CLP)" error={errores.precio}>
            <input {...props('precio')} type="number" min="1" step="1" inputMode="numeric" placeholder="Ej. 1990" />
          </CampoFormulario>

          <CampoFormulario id="stock" etiqueta="Stock actual (unidades)" error={errores.stock}>
            <input {...props('stock')} type="number" min="0" step="1" inputMode="numeric" placeholder="Ej. 50" />
          </CampoFormulario>

          <CampoFormulario id="stockMinimo" etiqueta="Stock mínimo (unidades)" error={errores.stockMinimo}>
            <input {...props('stockMinimo')} type="number" min="0" step="1" inputMode="numeric" placeholder="Ej. 20" />
          </CampoFormulario>

          <CampoFormulario
            id="emoji"
            etiqueta="Emoji (opcional)"
            error={errores.emoji}
            ayuda="Si lo dejas vacío se usa uno según la categoría."
          >
            <input {...props('emoji')} type="text" placeholder="Ej. 🥛" />
          </CampoFormulario>
        </div>

        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            onClick={limpiar}
            className="cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-2 font-semibold text-slate-700 hover:bg-slate-100"
          >
            Limpiar
          </button>
          <button
            type="submit"
            className="cursor-pointer rounded-lg border border-primario bg-primario px-5 py-2 font-semibold text-white hover:bg-primario-oscuro"
          >
            <i className="bi bi-plus-lg mr-2"></i>
            Agregar al inventario
          </button>
        </div>
      </form>
    </div>
  )
}

export default IngresarArticulo
