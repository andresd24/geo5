import './example.css';
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Tetra from './Tetra'

render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#app')


)
