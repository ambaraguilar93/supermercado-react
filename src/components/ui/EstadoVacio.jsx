// Mensaje para cuando no hay nada que mostrar 
function EstadoVacio({ icono = 'bi-box-seam', mensaje, children }) {
  return (
    <div className="rounded-2xl border border-borde bg-white p-10 text-center shadow-sm">
      <i className={`bi ${icono} text-4xl text-texto-suave`}></i>
      <p className="mt-2 mb-0 text-slate-600">{mensaje}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}

export default EstadoVacio
