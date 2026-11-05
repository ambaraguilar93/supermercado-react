// Estado global del inventario (acciones, estado inicial y reducer)
import { productos as productosIniciales } from '../data/productos.js'

export const ACCIONES = {
  AGREGAR_PRODUCTO: 'AGREGAR_PRODUCTO',
}

export const estadoInicial = {
  productos: productosIniciales,
}

export function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case ACCIONES.AGREGAR_PRODUCTO:
      // payload: producto ya completo con id y SKU, creado antes de enviar la acción
      return {
        ...estado,
        productos: [...estado.productos, accion.payload],
      }
    default:
      return estado
  }
}
