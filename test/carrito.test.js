import test from 'node:test'
import assert from 'node:assert/strict'
import { detallarCarrito, totalPrecioCarrito, totalUnidadesCarrito } from '../src/utils/carrito.js'

const productos = [
  { id: 1, nombre: 'Leche', precio: 1000 },
  { id: 2, nombre: 'Pan', precio: 500 },
]
const carrito = [
  { productoId: 1, cantidad: 2 },
  { productoId: 2, cantidad: 3 },
]

test('detallarCarrito une cada entrada con su producto y calcula el subtotal', () => {
  const items = detallarCarrito(carrito, productos)
  assert.equal(items.length, 2)
  assert.equal(items[0].producto.nombre, 'Leche')
  assert.equal(items[0].subtotal, 2000)
  assert.equal(items[1].subtotal, 1500)
})

test('calcula el total de unidades y el total a pagar', () => {
  assert.equal(totalUnidadesCarrito(carrito), 5)
  assert.equal(totalPrecioCarrito(detallarCarrito(carrito, productos)), 3500)
})

test('omite las entradas cuyo producto ya no existe', () => {
  assert.equal(detallarCarrito([{ productoId: 99, cantidad: 1 }], productos).length, 0)
})
