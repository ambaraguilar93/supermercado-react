import { useState } from 'react'
import HeroPagina from '../components/HeroPagina.jsx'
import { preguntas } from '../data/preguntas.js'

function PreguntasFrecuentes() {
  // Índice de la pregunta abierta (null = todas cerradas)
  const [abierta, setAbierta] = useState(0)

  const alternar = (indice) => {
    setAbierta(abierta === indice ? null : indice)
  }

  return (
    <div>
      <HeroPagina
        etiqueta="Ayuda"
        titulo="Preguntas frecuentes"
        bajada="Resolvemos las dudas más comunes sobre horarios, pagos, stock y reposición."
      />

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Acordeón controlado con useState */}
          <div className="self-start overflow-hidden rounded-2xl border border-borde bg-white lg:col-span-2">
            {preguntas.map((item, indice) => {
              const estaAbierta = abierta === indice
              return (
                <div key={item.pregunta} className="border-b border-borde last:border-b-0">
                  <h2>
                    <button
                      type="button"
                      id={`faq-pregunta-${indice}`}
                      aria-expanded={estaAbierta}
                      aria-controls={`faq-respuesta-${indice}`}
                      onClick={() => alternar(indice)}
                      className={`flex w-full cursor-pointer items-center justify-between gap-3 px-5 py-4 text-left font-bold transition-colors ${
                        estaAbierta
                          ? 'bg-primario-claro text-primario-oscuro'
                          : 'bg-white text-texto hover:bg-slate-50'
                      }`}
                    >
                      {item.pregunta}
                      <i
                        aria-hidden="true"
                        className={`bi bi-chevron-down shrink-0 text-sm transition-transform ${estaAbierta ? 'rotate-180' : ''}`}
                      ></i>
                    </button>
                  </h2>
                  <div
                    id={`faq-respuesta-${indice}`}
                    role="region"
                    aria-labelledby={`faq-pregunta-${indice}`}
                    hidden={!estaAbierta}
                    className="px-5 py-4"
                  >
                    {item.respuesta}
                  </div>
                </div>
              )
            })}
          </div>

          <aside className="self-start rounded-xl border border-borde bg-white p-6 shadow-sm lg:sticky lg:top-4">
            <span className="mb-3 inline-flex size-12 items-center justify-center rounded-[14px] bg-acento-claro text-2xl text-acento-oscuro">
              <i className="bi bi-headset"></i>
            </span>
            <h2 className="mb-2 text-xl font-bold">¿No encontraste tu respuesta?</h2>
            <p className="mb-4 text-texto-suave">
              Acércate a atención al cliente de tu sucursal. Con gusto te ayudaremos.
            </p>
            <ul className="mb-0 text-sm">
              <li className="mb-2"><i className="bi bi-geo-alt mr-2 text-primario"></i>Módulo de atención, entrada principal</li>
              <li className="mb-2"><i className="bi bi-clock mr-2 text-primario"></i>Todos los días, de 8:00 a 22:00</li>
              <li><i className="bi bi-envelope mr-2 text-primario"></i>ayuda@granmarket.cl</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default PreguntasFrecuentes
