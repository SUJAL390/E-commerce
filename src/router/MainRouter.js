import React from 'react'
import { createBrowserRouter, createRoutesFromElements ,Route} from 'react-router-dom'
import { Home, Products,Product,AboutPage,ContactPage,Cart,Login,Register,Checkout,PageNotFound } from '../pages'


const MainRouter = createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home/>} />
    <Route path="/product" element={<Products />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="/product/*" element={<PageNotFound />} />
  </Route>
))
  
    
 
export default MainRouter