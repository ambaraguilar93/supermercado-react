// Aviso de confirmación
function AvisoExito({ children, accion }) {
  return (
    <div
      role="status"
      className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-acento bg-acento-claro px-4 py-3 text-green-900"
    >
      <span>
        <i className="bi bi-check-circle-fill mr-2"></i>
        {children}
      </span>
      {accion}
    </div>
  )
}

export default AvisoExito
