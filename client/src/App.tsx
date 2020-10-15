import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Nav } from './components/navigation/Nav'

import { CartPage } from './pages/CartPage'
import { ShopPage } from './pages/ShopPage'

import 'react-toastify/dist/ReactToastify.css'

export const App = () => (
  <div className="app">
    <ToastContainer position="bottom-right" newestOnTop />
    <Router>
      <Nav />

      <div className="main">
        <Route path="/cart">
          <CartPage />
        </Route>

        <Route path="/shop">
          <ShopPage />
        </Route>

        <Route path="/" exact>
          <Redirect to="/shop" />
        </Route>
      </div>
    </Router>
  </div>
)

export default App
