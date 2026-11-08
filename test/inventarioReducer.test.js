import test from 'node:test'
import assert from 'node:assert/strict'
import { ACCIONES, crearEstadoInicial, inventarioReducer } from '../src/state/inventarioReducer.js'

const productosPrueba = () => [
  { id: 1, nombre: 'Leche', categoria: 'lacteos', precio: 1000, stock: 2, stockMinimo: 1 },
  { id: 2, nombre: 'Yogurt', categoria: 'lacteos', precio: 500, stock: 0, stockMinimo: 1 },
]

const agregar = (estado, id) => inventarioReducer(estado, { type: ACCIONES.AGREGAR_AL_CARRITO, payload: id })
const disminuir = (estado, id) => inventarioReducer(estado, { type: ACCIONES.DISMINUIR_CANTIDAD_CARRITO, payload: id })
const stockDe = (estado, id) => estado.productos.find((p) => p.id === id).stock
const cantidadDe = (estado, id) => estado.carrito.find((e) => e.productoId === id)?.cantidad

test('el estado inicial tiene el carrito vacío y conserva el stock', () => {
  const estado = crearEstadoInicial(productosPrueba())
  assert.equal(estado.carrito.length, 0)
  assert.equal(stockDe(estado, 1), 2)
})

test('agregar al carrito resta 1 al stock y suma 1 a la cantidad', () => {
  const estado = agregar(crearEstadoInicial(productosPrueba()), 1)
  assert.equal(stockDe(estado, 1), 1)
  assert.equal(cantidadDe(estado, 1), 1)
})

test('escenario de conservación - agregar hasta agotar y disminuir hasta quitar', () => {
  let estado = crearEstadoInicial(productosPrueba())

  estado = agregar(estado, 1)
  estado = agregar(estado, 1)
  assert.equal(stockDe(estado, 1), 0)
  assert.equal(cantidadDe(estado, 1), 2)

  // Sin stock no se puede agregar más, el estado no cambia
  const sinCambios = agregar(estado, 1)
  assert.equal(sinCambios, estado)

  estado = disminuir(estado, 1)
  assert.equal(stockDe(estado, 1), 1)
  assert.equal(cantidadDe(estado, 1), 1)

  // Al llegar a 0 la entrada se quita del carrito y el stock vuelve al valor original
  estado = disminuir(estado, 1)
  assert.equal(stockDe(estado, 1), 2)
  assert.equal(cantidadDe(estado, 1), undefined)
  assert.equal(estado.carrito.length, 0)
})

test('una operación inválida devuelve el mismo estado', () => {
  const estado = crearEstadoInicial(productosPrueba())
  assert.equal(agregar(estado, 2), estado) // producto sin stock
  assert.equal(agregar(estado, 99), estado) // id inexistente
  assert.equal(disminuir(estado, 1), estado) // producto que no está en el carrito
})

test('el reducer no modifica el estado anterior (inmutabilidad)', () => {
  const antes = crearEstadoInicial(productosPrueba())
  const despues = agregar(antes, 1)
  assert.notEqual(despues, antes)
  assert.equal(stockDe(antes, 1), 2)
  assert.equal(antes.carrito.length, 0)
})

test('agregar un producto nuevo no altera el carrito', () => {
  let estado = agregar(crearEstadoInicial(productosPrueba()), 1)
  estado = inventarioReducer(estado, {
    type: ACCIONES.AGREGAR_PRODUCTO,
    payload: { id: 3, nombre: 'Queso', categoria: 'lacteos', precio: 2000, stock: 5, stockMinimo: 2 },
  })
  assert.equal(estado.productos.length, 3)
  assert.equal(cantidadDe(estado, 1), 1)
})
