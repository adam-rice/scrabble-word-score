/*jshint esversion: 6 */
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
require('./CSS/styles')

render(<App title='Scrabble' />, document.getElementById('application'))
