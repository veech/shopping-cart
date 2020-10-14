import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { initializeAxios } from './utils/initialize-axios'

initializeAxios()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
