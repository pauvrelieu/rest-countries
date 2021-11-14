import { render } from 'preact'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app'
import './css/index.scss'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)
