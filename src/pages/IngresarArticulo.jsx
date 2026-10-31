import { useState } from 'react'
import { Link } from 'react-router-dom'
import CampoFormulario, { claseInput } from '../components/CampoFormulario.jsx'
import { useInventario } from '../context/InventarioContext.jsx'
import { CATEGORIAS_PRODUCTO } from '../constants/inventario.js'
import { generarSku, validarProducto } from '../utils/inventario.js'

const valoresIniciales = {
  nombre: '',
  marca: '',
  presentacion: '',
  categoria: '',
  precio: '',
  stock: '',
  stockMinimo: '',
  emoji: '',
}

// Ingresar nuevos artículos al inventario
function IngresarArticulo() {
  const { productos, agregarProducto } = useInventario()
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [exito, setExito] = useState(null)

  // Inputs controlados
  const manejarCambio = (e) => {
    const { name, value } = e.target
    setValores({ ...valores, [name]: value })
    if (errores[name]) setErrores({ ...errores, [name]: undefined })
    if (exito) setExito(null)
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    const erroresNuevos = validarProducto(valores, productos)
    setErrores(erroresNuevos)
    if (Object.keys(erroresNuevos).length > 0) return

    const sku = generarSku(productos, valores.categoria)
    agregarProducto(valores)
    setExito({ nombre: valores.nombre.trim(), sku })
    setValores(valoresIniciales)
  }

  const skuPrevisto = valores.categoria ? generarSku(productos, valores.categoria) : null
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
    <div className="tw:mx-auto tw:max-w-3xl tw:px-4 tw:py-8">
      <header className="tw:mb-6">
        <h1 className="tw:mb-1 tw:text-3xl tw:font-extrabold tw:text-primario-oscuro">Ingresar artículo</h1>
        <p className="tw:mb-0 tw:text-slate-600">
          Agrega un producto nuevo al inventario. Aparecerá en el inicio y en el listado de artículos.
        </p>
      </header>

      {exito && (
        <div
          role="status"
          className="tw:mb-6 tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3 tw:rounded-lg tw:border tw:border-acento tw:bg-acento-claro tw:px-4 tw:py-3 tw:text-green-900"
        >
          <span>
            <i className="bi bi-check-circle-fill tw:mr-2"></i>
            «{exito.nombre}» se agregó al inventario con el SKU <strong>{exito.sku}</strong>.
          </span>
          <Link to="/articulos" className="tw:font-semibold tw:text-primario tw:underline">
            Ver artículos
          </Link>
        </div>
      )}

      <form
        onSubmit={manejarEnvio}
        noValidate
        className="tw:rounded-2xl tw:border tw:border-borde tw:bg-white tw:p-6 tw:shadow-sm"
      >
        <div className="tw:grid tw:gap-5 tw:sm:grid-cols-2">
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

        <div className="tw:mt-6 tw:flex tw:flex-wrap tw:justify-end tw:gap-3">
          <button
            type="button"
            onClick={() => {
              setValores(valoresIniciales)
              setErrores({})
              setExito(null)
            }}
            className="tw:cursor-pointer tw:rounded-lg tw:border tw:border-slate-300 tw:bg-white tw:px-5 tw:py-2 tw:font-semibold tw:text-slate-700 tw:hover:bg-slate-100"
          >
            Limpiar
          </button>
          <button
            type="submit"
            className="tw:cursor-pointer tw:rounded-lg tw:border tw:border-primario tw:bg-primario tw:px-5 tw:py-2 tw:font-semibold tw:text-white tw:hover:bg-primario-oscuro"
          >
            <i className="bi bi-plus-lg tw:mr-2"></i>
            Agregar al inventario
          </button>
        </div>
      </form>
    </div>
  )
}

export default IngresarArticulo
