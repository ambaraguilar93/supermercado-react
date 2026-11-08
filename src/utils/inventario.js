// Reglas de negocio del inventario
import {
  CATEGORIA_TODAS,
  CATEGORIAS_PRODUCTO,
  EMOJI_POR_CATEGORIA,
  PREFIJOS_SKU,
  REGLAS_CAMPOS,
} from '../constants/inventario.js'

export const formatoPeso = (valor) => '$' + valor.toLocaleString('es-CL')

// Devuelve el estado de stock de un producto según su cantidad y su mínimo
export function obtenerEstadoStock(producto) {
  if (producto.stock === 0) return 'agotado'
  if (producto.stock <= producto.stockMinimo) return 'bajo'
  return 'disponible'
}

// Porcentaje de la barra de stock (respecto al doble del mínimo)
export function porcentajeStock(producto) {
  if (producto.stockMinimo <= 0) return producto.stock > 0 ? 100 : 0
  return Math.min(100, Math.round((producto.stock / (producto.stockMinimo * 2)) * 100))
}

// Indicadores generales del inventario
export function calcularIndicadores(productos) {
  return {
    totalProductos: productos.length,
    totalUnidades: productos.reduce((suma, p) => suma + p.stock, 0),
    totalBajos: productos.filter((p) => obtenerEstadoStock(p) === 'bajo').length,
    totalAgotados: productos.filter((p) => obtenerEstadoStock(p) === 'agotado').length,
  }
}

// Productos que cumplen con la categoría
export function filtrarProductos(productos, { categoria, busqueda, estado }) {
  const texto = busqueda.trim().toLowerCase()
  return productos.filter((p) => {
    const coincideCategoria = categoria === 'todas' || p.categoria === categoria
    const coincideTexto =
      p.nombre.toLowerCase().includes(texto) || p.marca.toLowerCase().includes(texto)
    const coincideEstado = estado === 'todos' || obtenerEstadoStock(p) === estado
    return coincideCategoria && coincideTexto && coincideEstado
  })
}

// Productos de una categoría. Devuelve un arreglo nuevo y no modifica el inventario original.
// Con CATEGORIA_TODAS devuelve todos los productos.
export function filtrarPorCategoria(productos, categoria) {
  if (categoria === CATEGORIA_TODAS) return productos
  return productos.filter((p) => p.categoria === categoria)
}

export function nombreCategoria(id) {
  return CATEGORIAS_PRODUCTO.find((c) => c.id === id)?.nombre ?? id
}

// Unico lugar donde se calcula un SKU
export function generarSku(productos, categoria) {
  const prefijo = PREFIJOS_SKU[categoria] ?? 'XX'
  const mayor = productos
    .filter((p) => p.sku.startsWith(prefijo + '-'))
    .reduce((max, p) => Math.max(max, Number(p.sku.split('-')[1]) || 0), 0)
  return `${prefijo}-${String(mayor + 1).padStart(3, '0')}`
}

// Convierte los datos del formulario (texto) en un producto completo del inventario
export function crearProducto(datos, productos) {
  const categoria = datos.categoria
  return {
    id: productos.reduce((max, p) => Math.max(max, p.id), 0) + 1,
    sku: generarSku(productos, categoria),
    nombre: datos.nombre.trim(),
    marca: datos.marca.trim(),
    presentacion: datos.presentacion.trim(),
    categoria,
    emoji: datos.emoji.trim() || EMOJI_POR_CATEGORIA[categoria] || '📦',
    precio: Number(datos.precio),
    stock: Number(datos.stock),
    stockMinimo: Number(datos.stockMinimo),
  }
}

// Revisa un campo contra su regla (patrón + mensaje) definida en REGLAS_CAMPOS
const cumpleRegla = (campo, valor) => REGLAS_CAMPOS[campo].patron.test(valor.trim())

// Valida los datos del formulario
export function validarProducto(datos, productos) {
  const errores = {}
  const nombre = datos.nombre.trim()
  const marca = datos.marca.trim()
  const presentacion = datos.presentacion.trim()

  if (!nombre) errores.nombre = 'Ingresa el nombre del producto.'
  else if (!cumpleRegla('nombre', nombre)) errores.nombre = REGLAS_CAMPOS.nombre.mensaje
  else if (
    productos.some((p) => p.nombre.toLowerCase() === nombre.toLowerCase() && p.marca.toLowerCase() === marca.toLowerCase())
  ) {
    errores.nombre = 'Ya existe un producto con ese nombre y esa marca.'
  }

  if (!marca) errores.marca = 'Ingresa la marca del producto.'
  else if (!cumpleRegla('marca', marca)) errores.marca = REGLAS_CAMPOS.marca.mensaje

  if (!presentacion) errores.presentacion = 'Ingresa la presentación (ej. Caja 1 L).'
  else if (!cumpleRegla('presentacion', presentacion)) errores.presentacion = REGLAS_CAMPOS.presentacion.mensaje

  if (!CATEGORIAS_PRODUCTO.some((c) => c.id === datos.categoria)) errores.categoria = 'Elige una categoría.'

  for (const campo of ['precio', 'stock', 'stockMinimo']) {
    if (!cumpleRegla(campo, String(datos[campo]))) errores[campo] = REGLAS_CAMPOS[campo].mensaje
  }
  if (datos.emoji.trim().length > 4) errores.emoji = 'Usa un solo emoji.'

  return errores
}
