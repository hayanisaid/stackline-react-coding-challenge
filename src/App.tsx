import React from 'react'
import logo from './logo.svg'
import Header from './components/Header'
import Product from './components/Product'
import s from './App.module.css'

// TODO
//  HeaderComponent
// Card
// Tag
// Sales Table
// Chart

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Product />
    </div>
  )
}

export default App
