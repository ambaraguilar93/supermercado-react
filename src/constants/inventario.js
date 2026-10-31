// Constantes del inventario

// Categorías del menú de Home. 
export const categorias = [
  { id: 'todas', nombre: 'Todas', icono: 'bi-grid' },
  { id: 'frutas-verduras', nombre: 'Frutas y verduras', icono: 'bi-apple' },
  { id: 'lacteos', nombre: 'Lácteos', icono: 'bi-cup-straw' },
  { id: 'carnes', nombre: 'Carnes', icono: 'bi-egg-fried' },
  { id: 'panaderia', nombre: 'Panadería', icono: 'bi-basket' },
  { id: 'despensa', nombre: 'Despensa', icono: 'bi-box-seam' },
  { id: 'bebidas', nombre: 'Bebidas', icono: 'bi-cup-hot' },
  { id: 'limpieza', nombre: 'Limpieza', icono: 'bi-droplet' },
]

// Categorías de un producto
export const CATEGORIAS_PRODUCTO = categorias.filter((c) => c.id !== 'todas')

export const etiquetasEstado = {
  disponible: 'Disponible',
  bajo: 'Stock bajo',
  agotado: 'Agotado',
}

// Opciones del filtro por estado de stock
export const OPCIONES_ESTADO = [
  { valor: 'todos', etiqueta: 'Todos los estados' },
  { valor: 'disponible', etiqueta: etiquetasEstado.disponible },
  { valor: 'bajo', etiqueta: etiquetasEstado.bajo },
  { valor: 'agotado', etiqueta: etiquetasEstado.agotado },
]

// Prefijo del SKU según la categoría
export const PREFIJOS_SKU = {
  'frutas-verduras': 'FV',
  lacteos: 'LC',
  carnes: 'CR',
  panaderia: 'PN',
  despensa: 'DP',
  bebidas: 'BB',
  limpieza: 'LM',
}

// Emoji por defecto
export const EMOJI_POR_CATEGORIA = {
  'frutas-verduras': '🥬',
  lacteos: '🥛',
  carnes: '🥩',
  panaderia: '🍞',
  despensa: '🥫',
  bebidas: '🥤',
  limpieza: '🧼',
}
