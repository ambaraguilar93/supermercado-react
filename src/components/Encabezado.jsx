import { Link } from 'react-router-dom'
import './Encabezado.css'

function Encabezado() {
  return (
    <header className="encabezado">
      <div className="encabezado-aviso">
        <div className="container d-flex justify-content-between align-items-center">
          <span>
            <i className="bi bi-truck me-2"></i>
            Panel de control de inventario · Sucursal Santiago Centro
          </span>
          <span className="d-none d-md-inline">
            <i className="bi bi-clock me-2"></i>
            Abierto todos los días de 8:00 a 22:00
          </span>
        </div>
      </div>

      <div className="encabezado-principal">
        <div className="container d-flex align-items-center justify-content-between gap-3">
          <Link to="/" className="encabezado-logo" aria-label="GranMarket, ir al inicio">
            <span className="encabezado-logo-icono">
              <i className="bi bi-basket2-fill"></i>
            </span>
            <span className="encabezado-logo-texto">
              Gran<strong>Market</strong>
            </span>
          </Link>

          <div className="encabezado-usuario d-none d-sm-flex align-items-center gap-2">
            <i className="bi bi-person-circle fs-4"></i>
            <div className="lh-sm">
              <small className="d-block opacity-75">Bienvenida</small>
              <span className="fw-semibold">Encargada de bodega</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Encabezado
