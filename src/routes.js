import React from 'react'
import { Router } from '@reach/router'

import Home from './pages/Home/index'
import About from './pages/About'
import NotFound from './pages/NotFound'
import HOCButton from './pages/HOCButton'

export default (
  <Router>
    <Home path="/" />
    <About path="/about" />
    <HOCButton path='/hoc-button' />
    <NotFound default />
  </Router>
)
