// Campo de formulario con etiqueta, mensaje de error y ayuda 
export const claseInput = (hayError) =>
  [
    'tw:w-full tw:rounded-lg tw:border tw:bg-white tw:px-3 tw:py-2 tw:text-slate-800 tw:outline-none tw:transition',
    'tw:focus:ring-2',
    hayError
      ? 'tw:border-peligro tw:focus:ring-red-200'
      : 'tw:border-slate-300 tw:focus:border-primario tw:focus:ring-primario-claro',
  ].join(' ')

function CampoFormulario({ id, etiqueta, error, ayuda, children }) {
  return (
    <div>
      <label htmlFor={id} className="tw:mb-1 tw:block tw:text-sm tw:font-semibold tw:text-slate-700">
        {etiqueta}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="tw:mt-1 tw:mb-0 tw:text-sm tw:text-peligro">
          {error}
        </p>
      ) : (
        ayuda && <p className="tw:mt-1 tw:mb-0 tw:text-xs tw:text-slate-500">{ayuda}</p>
      )}
    </div>
  )
}

export default CampoFormulario
