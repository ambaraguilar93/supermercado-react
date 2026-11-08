import Boton from '../components/ui/Boton.jsx'

function NoEncontrada() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 text-center">
      <div className="text-[5rem] leading-none">🛒</div>
      <h1 className="mt-4 mb-2 text-3xl font-extrabold text-primario-oscuro">Página no encontrada</h1>
      <p className="mb-4 text-texto-suave">
        La dirección que ingresaste no existe en GranMarket.
      </p>
      <Boton to="/" icono="bi-house-door">
        Volver al inicio
      </Boton>
    </div>
  )
}

export default NoEncontrada
