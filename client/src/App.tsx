import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { Nav } from './components/navigation/Nav'

import { CartPage } from './pages/CartPage'
import { ShopPage } from './pages/ShopPage'

export const App = () => (
  <div className="app">
    <Router>
      <Nav />

      <div className="main">
        <Route path="/cart" component={CartPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/" exact>
          <Redirect to="/shop" />
        </Route>
      </div>
    </Router>
  </div>
)

export default App
