// Banner de bienvenida de la página de inicio
function BannerPrincipal() {
  return (
    <section className="mb-6">
      <div className="relative overflow-hidden rounded-[18px] bg-linear-[120deg,var(--color-primario)_0%,var(--color-azul-medio)_60%,var(--color-acento)_140%] p-8 text-white after:absolute after:right-6 after:-bottom-3.5 after:text-[7rem] after:opacity-20 after:content-['🛒']">
        <span className="mb-3 inline-block rounded-full bg-acento px-3 py-1 text-[0.78rem] font-bold tracking-wide uppercase">
          Gestión de inventario
        </span>
        <h1 className="mb-2 max-w-[560px] text-[clamp(1.5rem,3.4vw,2.3rem)] font-extrabold">
          Controla el stock, siempre fresco y al día
        </h1>
        <p className="mb-0 max-w-[520px] opacity-95">
          Revisa la disponibilidad de los productos de la sucursal, detecta lo que está por agotarse
          y mantén la vitrina siempre llena.
        </p>
      </div>
    </section>
  )
}

export default BannerPrincipal
