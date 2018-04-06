import React from 'react'
import { render } from 'react-dom'

import HelloWorld from './components/helloWorld'

require('../stylesheets/styles.scss')

render(
  <HelloWorld />,
  document.getElementById('app')
)
