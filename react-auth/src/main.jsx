import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './App.css'
import './tailwind.css'
import App from './App.jsx'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
