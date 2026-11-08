import CampoFormulario, { claseInput } from '../components/CampoFormulario.jsx'
import Boton from '../components/ui/Boton.jsx'
import EncabezadoPagina from '../components/ui/EncabezadoPagina.jsx'
import AvisoExito from '../components/ui/AvisoExito.jsx'
import { useFormularioProducto } from '../hooks/useFormularioProducto.js'
import { CAMPOS_FORMULARIO, CATEGORIAS_PRODUCTO } from '../constants/inventario.js'

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

  // La ayuda de la categoría depende del SKU previsto, el resto sale de CAMPOS_FORMULARIO
  const ayudaDe = (campo) =>
    campo.id === 'categoria'
      ? skuPrevisto
        ? `SKU que se asignará: ${skuPrevisto}`
        : 'El SKU se genera según la categoría.'
      : campo.ayuda

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <EncabezadoPagina
        titulo="Ingresar artículo"
        descripcion="Agrega un producto nuevo al inventario. Aparecerá en el inicio y en el listado de artículos."
      />

      {exito && (
        <AvisoExito
          accion={
            <Boton to="/articulos" variante="secundario" tamano="pequeno">
              Ver artículos
            </Boton>
          }
        >
          «{exito.nombre}» se agregó al inventario con el SKU <strong>{exito.sku}</strong>.
        </AvisoExito>
      )}

      <form
        onSubmit={manejarEnvio}
        noValidate
        className="rounded-2xl border border-borde bg-white p-6 shadow-sm"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {CAMPOS_FORMULARIO.map((campo) => (
            <CampoFormulario
              key={campo.id}
              id={campo.id}
              etiqueta={campo.etiqueta}
              error={errores[campo.id]}
              ayuda={ayudaDe(campo)}
            >
              {campo.tipo === 'select' ? (
                <select {...props(campo.id)}>
                  <option value="">Selecciona una categoría</option>
                  {CATEGORIAS_PRODUCTO.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                  ))}
                </select>
              ) : (
                <input
                  {...props(campo.id)}
                  type={campo.tipo}
                  placeholder={campo.placeholder}
                  min={campo.min}
                  step={campo.tipo === 'number' ? 1 : undefined}
                  inputMode={campo.tipo === 'number' ? 'numeric' : undefined}
                />
              )}
            </CampoFormulario>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <Boton variante="neutro" onClick={limpiar}>
            Limpiar
          </Boton>
          <Boton type="submit" icono="bi-plus-lg">
            Agregar al inventario
          </Boton>
        </div>
      </form>
    </div>
  )
}

export default IngresarArticulo
