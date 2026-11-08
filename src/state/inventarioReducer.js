// Estado global - inventario (productos) y carrito en un solo reducer
import { productos as productosIniciales } from '../data/productos.js'

export const ACCIONES = {
  AGREGAR_PRODUCTO: 'AGREGAR_PRODUCTO',
  AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
  DISMINUIR_CANTIDAD_CARRITO: 'DISMINUIR_CANTIDAD_CARRITO',
}

// Estado inicial: copia de los productos de ejemplo y carrito vacío
export function crearEstadoInicial(productos) {
  return {
    productos: productos.map((producto) => ({ ...producto })),
    carrito: [],
  }
}

export const estadoInicial = crearEstadoInicial(productosIniciales)

// Reducer puro: nunca modifica el estado recibido, devuelve arreglos y objetos nuevos
export function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case ACCIONES.AGREGAR_PRODUCTO:
      // payload: producto ya completo con id y SKU, creado antes de enviar la acción
      return {
        ...estado,
        productos: [...estado.productos, accion.payload],
      }

    case ACCIONES.AGREGAR_AL_CARRITO: {
      // payload: id del producto. Resta 1 al stock y suma 1 a la cantidad del carrito
      const producto = estado.productos.find((p) => p.id === accion.payload)
      if (!producto || producto.stock <= 0) return estado

      const enCarrito = estado.carrito.some((entrada) => entrada.productoId === accion.payload)

      return {
        ...estado,
        productos: estado.productos.map((p) =>
          p.id === accion.payload ? { ...p, stock: p.stock - 1 } : p,
        ),
        carrito: enCarrito
          ? estado.carrito.map((entrada) =>
            entrada.productoId === accion.payload
              ? { ...entrada, cantidad: entrada.cantidad + 1 }
              : entrada,
          )
          : [...estado.carrito, { productoId: accion.payload, cantidad: 1 }],
      }
    }

    case ACCIONES.DISMINUIR_CANTIDAD_CARRITO: {
      // payload: id del producto. Devuelve 1 unidad al stock y resta 1 a la cantidad del carrito
      const entrada = estado.carrito.find((e) => e.productoId === accion.payload)
      if (!entrada) return estado

      return {
        ...estado,
        productos: estado.productos.map((p) =>
          p.id === accion.payload ? { ...p, stock: p.stock + 1 } : p,
        ),
        // Si la cantidad llega a 0 la entrada se quita del carrito
        carrito:
          entrada.cantidad === 1
            ? estado.carrito.filter((e) => e.productoId !== accion.payload)
            : estado.carrito.map((e) =>
              e.productoId === accion.payload ? { ...e, cantidad: e.cantidad - 1 } : e,
            ),
      }
    }

    default:
      return estado
  }
}
