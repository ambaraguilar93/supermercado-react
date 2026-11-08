// Título y descripción de una página. Los hijos (children) se ubican a la derecha
function EncabezadoPagina({ titulo, descripcion, children }) {
  return (
    <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="mb-1 text-3xl font-extrabold text-primario-oscuro">{titulo}</h1>
        {descripcion && <p className="mb-0 text-slate-600">{descripcion}</p>}
      </div>
      {children}
    </header>
  )
}

export default EncabezadoPagina
