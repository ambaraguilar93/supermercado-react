// Datos de ejemplo del inventario (precios en pesos chilenos)
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

export const productos = [
  { id: 1, sku: 'FV-001', nombre: 'Manzana roja', presentacion: 'Malla 1 kg', categoria: 'frutas-verduras', emoji: '🍎', precio: 1990, stock: 120, stockMinimo: 40 },
  { id: 2, sku: 'FV-002', nombre: 'Palta Hass', presentacion: 'Bandeja 500 g', categoria: 'frutas-verduras', emoji: '🥑', precio: 3490, stock: 18, stockMinimo: 30 },
  { id: 3, sku: 'FV-003', nombre: 'Tomate larga vida', presentacion: 'Kilo', categoria: 'frutas-verduras', emoji: '🍅', precio: 1790, stock: 64, stockMinimo: 25 },
  { id: 4, sku: 'LC-001', nombre: 'Leche entera', presentacion: 'Caja 1 L', categoria: 'lacteos', emoji: '🥛', precio: 1190, stock: 210, stockMinimo: 80 },
  { id: 5, sku: 'LC-002', nombre: 'Queso gauda laminado', presentacion: 'Pack 250 g', categoria: 'lacteos', emoji: '🧀', precio: 3290, stock: 9, stockMinimo: 20 },
  { id: 6, sku: 'LC-003', nombre: 'Yogurt natural', presentacion: 'Pack 4 un.', categoria: 'lacteos', emoji: '🍶', precio: 1890, stock: 0, stockMinimo: 25 },
  { id: 7, sku: 'CR-001', nombre: 'Pechuga de pollo', presentacion: 'Bandeja 1 kg', categoria: 'carnes', emoji: '🍗', precio: 5990, stock: 45, stockMinimo: 20 },
  { id: 8, sku: 'CR-002', nombre: 'Posta rosada', presentacion: 'Bandeja 1 kg', categoria: 'carnes', emoji: '🥩', precio: 9490, stock: 12, stockMinimo: 15 },
  { id: 9, sku: 'PN-001', nombre: 'Pan marraqueta', presentacion: 'Kilo', categoria: 'panaderia', emoji: '🥖', precio: 2290, stock: 80, stockMinimo: 30 },
  { id: 10, sku: 'PN-002', nombre: 'Croissant de mantequilla', presentacion: 'Pack 6 un.', categoria: 'panaderia', emoji: '🥐', precio: 2990, stock: 7, stockMinimo: 15 },
  { id: 11, sku: 'DP-001', nombre: 'Arroz grado 1', presentacion: 'Bolsa 1 kg', categoria: 'despensa', emoji: '🍚', precio: 1590, stock: 300, stockMinimo: 100 },
  { id: 12, sku: 'DP-002', nombre: 'Fideos espagueti', presentacion: 'Paquete 400 g', categoria: 'despensa', emoji: '🍝', precio: 990, stock: 26, stockMinimo: 60 },
  { id: 13, sku: 'DP-003', nombre: 'Aceite de maravilla', presentacion: 'Botella 900 ml', categoria: 'despensa', emoji: '🫒', precio: 2790, stock: 150, stockMinimo: 50 },
  { id: 14, sku: 'BB-001', nombre: 'Agua mineral sin gas', presentacion: 'Botella 1,5 L', categoria: 'bebidas', emoji: '💧', precio: 890, stock: 400, stockMinimo: 120 },
  { id: 15, sku: 'BB-002', nombre: 'Jugo de naranja', presentacion: 'Caja 1 L', categoria: 'bebidas', emoji: '🧃', precio: 1490, stock: 0, stockMinimo: 40 },
  { id: 16, sku: 'LM-001', nombre: 'Detergente líquido', presentacion: 'Botella 3 L', categoria: 'limpieza', emoji: '🧴', precio: 7990, stock: 33, stockMinimo: 20 },
]

// Devuelve el estado de stock de un producto según su cantidad y su mínimo
export function obtenerEstadoStock(producto) {
  if (producto.stock === 0) return 'agotado'
  if (producto.stock <= producto.stockMinimo) return 'bajo'
  return 'disponible'
}

export const etiquetasEstado = {
  disponible: 'Disponible',
  bajo: 'Stock bajo',
  agotado: 'Agotado',
}
