// Tarjeta de indicador reutilizable
function KpiCard({ icono, color, valor, etiqueta }) {
  return (
    <div className="home-kpi">
      <span className={`home-kpi-icono ${color}`}>
        <i className={`bi ${icono}`}></i>
      </span>
      <div>
        <span className="home-kpi-valor">{valor}</span>
        <span className="home-kpi-etiqueta">{etiqueta}</span>
      </div>
    </div>
  )
}

export default KpiCard
