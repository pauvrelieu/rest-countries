import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Countries } from './routes/Countries'
import { Country } from './routes/Country'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:slug" element={<Country />} />
      </Routes>
    </BrowserRouter>
  )
}
