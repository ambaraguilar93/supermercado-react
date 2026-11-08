// Constantes del inventario

// Categorías del menú de Home
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

// Valor del filtro que muestra todas las categorías (no es una categoría real de producto)
export const CATEGORIA_TODAS = 'todas'

// Categorías de un producto
export const CATEGORIAS_PRODUCTO = categorias.filter((c) => c.id !== 'todas')

// Fuente única de la apariencia de cada estado de stock
export const ESTADOS_STOCK = {
  disponible: {
    etiqueta: 'Disponible',
    insignia: 'bg-acento-claro text-acento-oscuro',
    barra: 'bg-acento',
  },
  bajo: {
    etiqueta: 'Stock bajo',
    insignia: 'bg-amber-100 text-amber-800',
    barra: 'bg-alerta',
  },
  agotado: {
    etiqueta: 'Agotado',
    insignia: 'bg-red-100 text-red-800',
    barra: 'bg-peligro',
  },
}

// Opciones del filtro por estado de stock (se generan desde ESTADOS_STOCK)
export const OPCIONES_ESTADO = [
  { valor: 'todos', etiqueta: 'Todos los estados' },
  ...Object.entries(ESTADOS_STOCK).map(([valor, { etiqueta }]) => ({ valor, etiqueta })),
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

// Reglas de aceptación de cada campo del formulario
export const REGLAS_CAMPOS = {
  nombre: {
    patron: /^[\p{L}\p{N}][\p{L}\p{N} .,'%&-]{2,59}$/u,
    mensaje: 'Usa entre 3 y 60 caracteres: letras, números, espacios y . , \' % & -',
  },
  marca: {
    patron: /^[\p{L}\p{N}][\p{L}\p{N} .,'&-]{1,39}$/u,
    mensaje: 'Usa entre 2 y 40 caracteres: letras, números, espacios y . , \' & -',
  },
  presentacion: {
    patron: /^[\p{L}\p{N}][\p{L}\p{N} .,/%x-]{1,39}$/u,
    mensaje: 'Usa entre 2 y 40 caracteres, por ejemplo «Caja 1 L» o «Pack 4 un.».',
  },
  precio: {
    patron: /^[1-9]\d{0,7}$/,
    mensaje: 'El precio debe ser un número entero mayor a 0 (hasta 8 dígitos).',
  },
  stock: {
    patron: /^\d{1,7}$/,
    mensaje: 'El stock debe ser un número entero (0 o más, hasta 7 dígitos).',
  },
  stockMinimo: {
    patron: /^\d{1,7}$/,
    mensaje: 'El stock mínimo debe ser un número entero (0 o más, hasta 7 dígitos).',
  },
}

// Campos del formulario "Ingresar artículo" (el formulario se dibuja recorriendo este arreglo)
export const CAMPOS_FORMULARIO = [
  { id: 'nombre', etiqueta: 'Nombre del producto', tipo: 'text', placeholder: 'Ej. Leche descremada' },
  { id: 'marca', etiqueta: 'Marca', tipo: 'text', placeholder: 'Ej. Soprole' },
  { id: 'presentacion', etiqueta: 'Presentación', tipo: 'text', placeholder: 'Ej. Caja 1 L' },
  { id: 'categoria', etiqueta: 'Categoría', tipo: 'select' },
  { id: 'precio', etiqueta: 'Precio (CLP)', tipo: 'number', placeholder: 'Ej. 1990', min: 1 },
  { id: 'stock', etiqueta: 'Stock actual (unidades)', tipo: 'number', placeholder: 'Ej. 50', min: 0 },
  { id: 'stockMinimo', etiqueta: 'Stock mínimo (unidades)', tipo: 'number', placeholder: 'Ej. 20', min: 0 },
  {
    id: 'emoji',
    etiqueta: 'Emoji (opcional)',
    tipo: 'text',
    placeholder: 'Ej. 🥛',
    ayuda: 'Si lo dejas vacío se usa uno según la categoría.',
  },
]
