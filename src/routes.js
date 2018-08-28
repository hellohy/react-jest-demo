import React from 'react'
import { Router } from '@reach/router'

import Home from './pages/Home/index'
import About from './pages/About'
import NotFound from './pages/NotFound'
import PageA from './pages/PageA'
import PageB from './pages/PageB'


export default (
  <Router>
    <Home path="/" />
    <About path="/about" />
    <PageA path='/page-a' />
    <PageB path='/page-b' />
    <NotFound default />
  </Router>
)
