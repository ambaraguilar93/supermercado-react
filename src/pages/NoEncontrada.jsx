import { Link } from 'react-router-dom'

function NoEncontrada() {
  return (
    <div className="container py-5 text-center">
      <div className="display-1">🛒</div>
      <h1 className="pagina-titulo mt-3">Página no encontrada</h1>
      <p className="pagina-subtitulo">
        La dirección que ingresaste no existe en GranMarket.
      </p>
      <Link to="/" className="btn btn-primary">
        <i className="bi bi-house-door me-2"></i>
        Volver al inicio
      </Link>
    </div>
  )
}

export default NoEncontrada
