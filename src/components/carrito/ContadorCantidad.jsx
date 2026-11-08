import Boton from '../ui/Boton.jsx'

// Botones − y + con la cantidad
function ContadorCantidad({ nombre, cantidad, puedeAumentar, onAumentar, onDisminuir }) {
  return (
    <div className="inline-flex items-center gap-2">
      <Boton
        variante="secundario"
        tamano="pequeno"
        icono="bi-dash-lg"
        onClick={onDisminuir}
        aria-label={`Disminuir cantidad de ${nombre}`}
      />
      <span className="min-w-8 text-center text-lg font-bold" aria-label={`Cantidad: ${cantidad}`}>
        {cantidad}
      </span>
      <Boton
        variante="secundario"
        tamano="pequeno"
        icono="bi-plus-lg"
        onClick={onAumentar}
        disabled={!puedeAumentar}
        aria-label={`Aumentar cantidad de ${nombre}`}
      />
    </div>
  )
}

export default ContadorCantidad
