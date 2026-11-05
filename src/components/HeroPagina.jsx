// Portada azul que usan las páginas informativas (Quiénes somos, Preguntas frecuentes)
function HeroPagina({ etiqueta, titulo, bajada }) {
  return (
    <section className="bg-linear-120 from-primario to-azul-medio py-11 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <span className="mb-3 inline-block rounded-full bg-acento px-3 py-1 text-[0.78rem] font-bold tracking-wide uppercase">
          {etiqueta}
        </span>
        <h1 className="mb-2 max-w-3xl text-[clamp(1.6rem,3.6vw,2.5rem)] font-extrabold">{titulo}</h1>
        <p className="mb-0 max-w-2xl text-[1.05rem] opacity-95">{bajada}</p>
      </div>
    </section>
  )
}

export default HeroPagina
