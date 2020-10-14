import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export const App = () => (
  <div className="app">
    <Router>
      <Route path="/" component={() => <h1 className="title is-1">Shopping Cart</h1>} />
    </Router>
  </div>
)

export default App
