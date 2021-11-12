import { render } from 'preact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './app'
import { Country } from './routes/Country'
import './css/index.scss'

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:slug" element={<Country />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('app')
)
