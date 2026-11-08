import { useMemo, useState } from 'react'
import { useInventario } from '../context/InventarioContext.jsx'
import { crearProducto, generarSku, validarProducto } from '../utils/inventario.js'

export const valoresIniciales = {
  nombre: '',
  marca: '',
  presentacion: '',
  categoria: '',
  precio: '',
  stock: '',
  stockMinimo: '',
  emoji: '',
}

// Toda la lógica del formulario para ingresar articulos, los valores, errores, confirmación,
// limpieza y envío
export function useFormularioProducto() {
  const { productos, agregarProducto } = useInventario()
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [exito, setExito] = useState(null)

  // SKU que se asignará según la categoría elegida
  const skuPrevisto = useMemo(
    () => (valores.categoria ? generarSku(productos, valores.categoria) : null),
    [productos, valores.categoria],
  )

  // Inputs controlados
  const manejarCambio = (e) => {
    const { name, value } = e.target
    setValores((actuales) => ({ ...actuales, [name]: value }))
    setErrores((actuales) => (actuales[name] ? { ...actuales, [name]: undefined } : actuales))
    setExito(null)
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    const erroresNuevos = validarProducto(valores, productos)
    setErrores(erroresNuevos)
    if (Object.keys(erroresNuevos).length > 0) return

    // El producto (con su SKU) se crea una sola vez
    const nuevo = crearProducto(valores, productos)
    agregarProducto(nuevo)
    setExito({ nombre: nuevo.nombre, sku: nuevo.sku })
    setValores(valoresIniciales)
  }

  const limpiar = () => {
    setValores(valoresIniciales)
    setErrores({})
    setExito(null)
  }

  return { valores, errores, exito, skuPrevisto, manejarCambio, manejarEnvio, limpiar }
}
