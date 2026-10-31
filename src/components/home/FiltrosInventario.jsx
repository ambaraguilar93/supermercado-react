import { OPCIONES_ESTADO } from '../../constants/inventario.js'

// Buscador y filtro por estado de stock
// El estado vive en Home y llega por props.
function FiltrosInventario({ busqueda, onBusqueda, estado, onEstado, onLimpiar }) {
  return (
    <section className="home-filtros tarjeta-sitio p-3 mb-4">
      <div className="row g-2 align-items-center">
        <div className="col-md-7">
          <label htmlFor="busqueda" className="visually-hidden">Buscar producto</label>
          <div className="input-group">
            <span className="input-group-text bg-white"><i className="bi bi-search"></i></span>
            <input
              id="busqueda"
              type="search"
              className="form-control"
              placeholder="Busca un producto por nombre o marca"
              value={busqueda}
              onChange={(e) => onBusqueda(e.target.value)}
            />
          </div>
        </div>
        <div className="col-8 col-md-3">
          <label htmlFor="estado" className="visually-hidden">Filtrar por estado de stock</label>
          <select
            id="estado"
            className="form-select"
            value={estado}
            onChange={(e) => onEstado(e.target.value)}
          >
            {OPCIONES_ESTADO.map((op) => (
              <option key={op.valor} value={op.valor}>{op.etiqueta}</option>
            ))}
          </select>
        </div>
        <div className="col-4 col-md-2 d-grid">
          <button type="button" className="btn btn-outline-primary" onClick={onLimpiar}>
            Limpiar
          </button>
        </div>
      </div>
    </section>
  )
}

export default FiltrosInventario
