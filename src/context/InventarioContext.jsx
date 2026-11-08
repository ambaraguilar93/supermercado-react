import { createContext, useContext, useReducer } from 'react'
import { ACCIONES, estadoInicial, inventarioReducer } from '../state/inventarioReducer.js'

const InventarioContext = createContext(null)

// Envuelve la aplicación y entrega inventario y carrito a cualquier componente
export function InventarioProvider({ children }) {
  const [estado, dispatch] = useReducer(inventarioReducer, estadoInicial)

  // Recibe un producto ya completo (crearProducto en utils/inventario.js)
  const agregarProducto = (producto) => dispatch({ type: ACCIONES.AGREGAR_PRODUCTO, payload: producto })

  // Agregar al carrito resta 1 al stock del producto; disminuir se lo devuelve
  const agregarAlCarrito = (productoId) => dispatch({ type: ACCIONES.AGREGAR_AL_CARRITO, payload: productoId })
  const disminuirCantidadCarrito = (productoId) =>
    dispatch({ type: ACCIONES.DISMINUIR_CANTIDAD_CARRITO, payload: productoId })

  return (
    <InventarioContext.Provider
      value={{
        productos: estado.productos,
        carrito: estado.carrito,
        agregarProducto,
        agregarAlCarrito,
        disminuirCantidadCarrito,
      }}
    >
      {children}
    </InventarioContext.Provider>
  )
}

// Hook para consumir el inventario global desde cualquier página o componente
export function useInventario() {
  const contexto = useContext(InventarioContext)
  if (!contexto) {
    throw new Error('useInventario debe usarse dentro de <InventarioProvider>')
  }
  return contexto
}
