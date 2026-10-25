import { useState } from 'react'
import { preguntas } from '../data/preguntas.js'
import './PreguntasFrecuentes.css'

function PreguntasFrecuentes() {
  // Índice de la pregunta abierta (null = todas cerradas)
  const [abierta, setAbierta] = useState(0)

  const alternar = (indice) => {
    setAbierta(abierta === indice ? null : indice)
  }

  return (
    <div className="faq">
      <section className="faq-hero">
        <div className="container">
          <span className="faq-etiqueta">Ayuda</span>
          <h1 className="faq-titulo">Preguntas frecuentes</h1>
          <p className="faq-bajada">
            Resolvemos las dudas más comunes sobre horarios, pagos, stock y reposición.
          </p>
        </div>
      </section>

      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="accordion faq-acordeon" id="acordeon-faq">
              {preguntas.map((item, indice) => {
                const estaAbierta = abierta === indice
                return (
                  <div className="accordion-item" key={item.pregunta}>
                    <h2 className="accordion-header">
                      <button
                        type="button"
                        className={`accordion-button ${estaAbierta ? '' : 'collapsed'}`}
                        aria-expanded={estaAbierta}
                        aria-controls={`faq-respuesta-${indice}`}
                        onClick={() => alternar(indice)}
                      >
                        {item.pregunta}
                      </button>
                    </h2>
                    <div
                      id={`faq-respuesta-${indice}`}
                      className={`accordion-collapse collapse ${estaAbierta ? 'show' : ''}`}
                    >
                      <div className="accordion-body">{item.respuesta}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <aside className="col-lg-4">
            <div className="tarjeta-sitio faq-ayuda">
              <span className="faq-ayuda-icono"><i className="bi bi-headset"></i></span>
              <h2 className="h5 fw-bold">¿No encontraste tu respuesta?</h2>
              <p className="text-secondary">
                Acércate a atención al cliente de tu sucursal. Con gusto te ayudaremos.
              </p>
              <ul className="list-unstyled mb-0 small">
                <li className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>Módulo de atención, entrada principal</li>
                <li className="mb-2"><i className="bi bi-clock text-primary me-2"></i>Todos los días, de 8:00 a 22:00</li>
                <li><i className="bi bi-envelope text-primary me-2"></i>ayuda@granmarket.cl</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default PreguntasFrecuentes
