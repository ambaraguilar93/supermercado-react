import { createContext, useContext, useReducer } from 'react'
import { ACCIONES, estadoInicial, inventarioReducer } from '../state/inventarioReducer.js'

const InventarioContext = createContext(null)

// Envuelve la aplicación y entrega el inventario a cualquier componente
export function InventarioProvider({ children }) {
  const [estado, dispatch] = useReducer(inventarioReducer, estadoInicial)

  // Recibe un producto ya completo (crearProducto en utils/inventario.js)
  const agregarProducto = (producto) => dispatch({ type: ACCIONES.AGREGAR_PRODUCTO, payload: producto })

  return (
    <InventarioContext.Provider value={{ productos: estado.productos, agregarProducto }}>
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
