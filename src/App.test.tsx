import React from 'react'
import {render, screen} from '@testing-library/react'
import {renderWithProviders} from './utils/tests-utils'
import Product from './components/Product'
import App from './App'

test('Render the App', () => {
  renderWithProviders(<Product />)
})
