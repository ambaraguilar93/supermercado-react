import { categorias } from '../../constants/inventario.js'

// Barra de categorías
function CategoriasNav({ categoriaActiva, onSeleccionar }) {
  return (
    <div className="home-categorias">
      <div className="container">
        <ul className="home-categorias-lista" aria-label="Categorías">
          {categorias.map((cat) => (
            <li key={cat.id}>
              <button
                type="button"
                className={`home-categoria ${categoriaActiva === cat.id ? 'activa' : ''}`}
                onClick={() => onSeleccionar(cat.id)}
              >
                <i className={`bi ${cat.icono}`}></i>
                {cat.nombre}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoriasNav
