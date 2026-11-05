// Campo de formulario con etiqueta, mensaje de error y ayuda 
export const claseInput = (hayError) =>
  [
    'w-full rounded-lg border bg-white px-3 py-2 text-slate-800 outline-none transition',
    'focus:ring-2',
    hayError
      ? 'border-peligro focus:ring-red-200'
      : 'border-slate-300 focus:border-primario focus:ring-primario-claro',
  ].join(' ')

function CampoFormulario({ id, etiqueta, error, ayuda, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-slate-700">
        {etiqueta}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1 mb-0 text-sm text-peligro">
          {error}
        </p>
      ) : (
        ayuda && <p className="mt-1 mb-0 text-xs text-slate-500">{ayuda}</p>
      )}
    </div>
  )
}

export default CampoFormulario
