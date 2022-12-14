import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {renderWithProviders} from '../utils/tests-utils'
import Product from '../components/Product'
import App from '../App'
import {store} from '../redux/store'
import reducer, {fetchProduct} from '../redux/reducers/productSlice'
const data_url = './data.json'
const json = require('../services/data.json')
export const handlers = [
  rest.get(data_url, (req, res, ctx) => {
    return res(ctx.json(json), ctx.delay(150))
  })
]

const server = setupServer(...handlers)
// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

const initialState = {
  isLoading: false,
  error: undefined,
  productData: []
}

test('Render the App', () => {
  renderWithProviders(<App />)
})
test('Product component should render correctly', async () => {
  rest.get(data_url, (req, res, ctx) => {
    return res(ctx.json(json), ctx.delay(150))
  })
  const setupStore = store()
  setupStore.dispatch(fetchProduct())
  renderWithProviders(<Product />, {store: setupStore})
  expect(await screen.findByText(/Shark Ninja/i)).toBeVisible()
  expect(await screen.findByText(/WeekEnding/i)).toBeVisible()
  expect(await screen.findByText(/UnitsSold/i)).toBeVisible()
  expect(await screen.findByText(/WholeSales/i)).toBeVisible()
})

test('ProductSlice reducer/action', () => {
  const errorMessage = 'Failed to fetch data'
  const error = {
    message: errorMessage
  }

  expect(reducer(initialState, {type: 'product/fetchProductData/fulfilled', payload: json})).toEqual({error: undefined, isLoading: false, productData: json})
  expect(reducer(initialState, {type: 'product/fetchProductData/pending', payload: json})).toEqual({error: undefined, isLoading: true, productData: []})
  expect(reducer(initialState, {type: 'product/fetchProductData/rejected', error: error})).toEqual({error: errorMessage, isLoading: false, productData: []})
})
