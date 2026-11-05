// Colores del ícono de cada indicador
const COLORES = {
  azul: 'bg-primario-claro text-primario',
  verde: 'bg-acento-claro text-acento-oscuro',
  naranja: 'bg-amber-100 text-amber-700',
  rojo: 'bg-red-100 text-peligro',
}

// Tarjeta de indicador reutilizable
function KpiCard({ icono, color, valor, etiqueta }) {
  return (
    <div className="flex h-full items-center gap-3.5 rounded-xl border border-borde bg-white p-4">
      <span
        className={`inline-flex size-11.5 shrink-0 items-center justify-center rounded-xl text-2xl ${COLORES[color]}`}
      >
        <i className={`bi ${icono}`}></i>
      </span>
      <div>
        <span className="block text-[1.6rem] leading-tight font-extrabold">{valor}</span>
        <span className="block text-[0.82rem] text-texto-suave">{etiqueta}</span>
      </div>
    </div>
  )
}

export default KpiCard
