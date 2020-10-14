import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Nav } from './components/navigation/Nav'

import { ItemsPage } from './pages/ItemsPage'

export const App = () => (
  <div className="app">
    <Router>
      <Nav />

      <div className="main">
        <Route path="/" component={ItemsPage} />
      </div>
    </Router>
  </div>
)

export default App
