import { Link } from 'react-router'

function Encabezado() {
  return (
    <header>
      <div className="bg-primario-oscuro py-1.5 text-[0.82rem] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <span>
            <i className="bi bi-truck mr-2"></i>
            Panel de control de inventario · Sucursal Santiago Centro
          </span>
          <span className="hidden md:inline">
            <i className="bi bi-clock mr-2"></i>
            Abierto todos los días de 8:00 a 22:00
          </span>
        </div>
      </div>

      <div className="bg-primario py-3.5 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4">
          <Link
            to="/"
            aria-label="GranMarket, ir al inicio"
            className="inline-flex items-center gap-2.5 text-[1.6rem] tracking-tight text-white no-underline"
          >
            <span className="inline-flex size-10.5 items-center justify-center rounded-xl bg-acento text-[1.4rem]">
              <i className="bi bi-basket2-fill"></i>
            </span>
            <span>
              Gran<strong className="font-extrabold text-menta">Market</strong>
            </span>
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            <i className="bi bi-person-circle text-2xl"></i>
            <div className="leading-tight">
              <small className="block text-sm opacity-75">Bienvenida</small>
              <span className="font-semibold">Encargada de bodega</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Encabezado
