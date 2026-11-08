import { Link } from 'react-router'

// Botón reutilizable. Con la prop "to" se dibuja como enlace (<Link>) y sin ella como <button>
const BASE =
  'inline-flex items-center justify-center gap-2 rounded-lg border font-semibold no-underline transition-colors ' +
  'disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-200 disabled:text-slate-500 ' +
  'disabled:hover:bg-slate-200 disabled:hover:text-slate-500'

const VARIANTES = {
  primario: 'cursor-pointer border-primario bg-primario text-white hover:bg-primario-oscuro',
  secundario: 'cursor-pointer border-primario bg-white text-primario hover:bg-primario hover:text-white',
  neutro: 'cursor-pointer border-slate-300 bg-white text-slate-700 hover:bg-slate-100',
}

const TAMANOS = {
  normal: 'px-4 py-2',
  pequeno: 'px-3 py-1.5 text-sm',
}

function Boton({ to, variante = 'primario', tamano = 'normal', bloque = false, icono, children, ...resto }) {
  const clases = `${BASE} ${VARIANTES[variante]} ${TAMANOS[tamano]}${bloque ? ' w-full' : ''}`
  const contenido = (
    <>
      {icono && <i className={`bi ${icono}`}></i>}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={clases} {...resto}>
        {contenido}
      </Link>
    )
  }

  return (
    <button type="button" className={clases} {...resto}>
      {contenido}
    </button>
  )
}

export default Boton
