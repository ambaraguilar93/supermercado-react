// Reglas de negocio del carrito

// Une cada entrada del carrito con su producto y calcula el subtotal
export function detallarCarrito(carrito, productos) {
  return carrito.flatMap((entrada) => {
    const producto = productos.find((p) => p.id === entrada.productoId)
    if (!producto) return []
    return [{ producto, cantidad: entrada.cantidad, subtotal: producto.precio * entrada.cantidad }]
  })
}

export const totalUnidadesCarrito = (carrito) => carrito.reduce((suma, e) => suma + e.cantidad, 0)

export const totalPrecioCarrito = (items) => items.reduce((suma, item) => suma + item.subtotal, 0)
