import { useInventario } from '../context/InventarioContext.jsx'
import { detallarCarrito, totalPrecioCarrito, totalUnidadesCarrito } from '../utils/carrito.js'

// Lógica del carrito es juntar cada entrada con su producto y calcula los totales

export function useCarrito() {
  const { productos, carrito, agregarAlCarrito, disminuirCantidadCarrito } = useInventario()

  const items = detallarCarrito(carrito, productos)

  return {
    items,
    totalUnidades: totalUnidadesCarrito(carrito),
    totalPrecio: totalPrecioCarrito(items),
    agregar: agregarAlCarrito,
    disminuir: disminuirCantidadCarrito,
  }
}
