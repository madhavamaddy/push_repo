import React, { Component } from 'react'
import Header from './navComponent/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './navComponent/Home'
import About from './navComponent/About'
import ProductPage from './navComponent/ProductPage'
import Product from './navComponent/Product'
import ErrorPage from './navComponent/ErrorPage'

class Path extends Component {
  render() {
    return (
      <div>
        
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/product' element={<Product/>} />
          <Route path="/details/:productsId" element={<ProductPage/>}/>
          <Route path='*' element={<ErrorPage/>} />
          
        </Routes>
        
        </BrowserRouter>
      </div>
    )
  }
}

export default Path