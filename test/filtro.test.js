import test from 'node:test'
import assert from 'node:assert/strict'
import { filtrarPorCategoria } from '../src/utils/inventario.js'
import { CATEGORIA_TODAS } from '../src/constants/inventario.js'

const productos = [
  { id: 1, categoria: 'lacteos' },
  { id: 2, categoria: 'carnes' },
  { id: 3, categoria: 'lacteos' },
]

test('filtra los productos de la categoría elegida', () => {
  const resultado = filtrarPorCategoria(productos, 'lacteos')
  assert.deepEqual(resultado.map((p) => p.id), [1, 3])
})

test('categoría "todas" devuelve todos los productos', () => {
  assert.equal(filtrarPorCategoria(productos, CATEGORIA_TODAS).length, 3)
})

test('una categoría sin productos devuelve una lista vacía', () => {
  assert.deepEqual(filtrarPorCategoria(productos, 'bebidas'), [])
})

test('filtrar no pierde ni modifica los datos originales', () => {
  filtrarPorCategoria(productos, 'carnes')
  assert.equal(productos.length, 3)
  assert.deepEqual(productos.map((p) => p.id), [1, 2, 3])
})
