// Estado global del inventario (acciones, estado inicial y reducer)
// El reducer no muta el estado, siempre devuelve uno nuevo.
import { productos as productosIniciales } from '../data/productos.js'
import { crearProducto } from '../utils/inventario.js'

export const ACCIONES = {
  AGREGAR_PRODUCTO: 'AGREGAR_PRODUCTO',
}

export const estadoInicial = {
  productos: productosIniciales,
}

export function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case ACCIONES.AGREGAR_PRODUCTO:
      // payload: datos del formulario; el id y el SKU se generan aquí
      return {
        ...estado,
        productos: [...estado.productos, crearProducto(accion.payload, estado.productos)],
      }
    default:
      return estado
  }
}
