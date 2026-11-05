import { Link } from 'react-router'

function NoEncontrada() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 text-center">
      <div className="text-[5rem] leading-none">🛒</div>
      <h1 className="mt-4 mb-2 text-3xl font-extrabold text-primario-oscuro">Página no encontrada</h1>
      <p className="mb-4 text-texto-suave">
        La dirección que ingresaste no existe en GranMarket.
      </p>
      <Link
        to="/"
        className="inline-block rounded-lg bg-primario px-4 py-2 font-semibold text-white no-underline hover:bg-primario-oscuro"
      >
        <i className="bi bi-house-door mr-2"></i>
        Volver al inicio
      </Link>
    </div>
  )
}

export default NoEncontrada
