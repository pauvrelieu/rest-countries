import { Routes, Route } from 'react-router-dom'
import { TopBar } from './components/TopBar'
import { Countries } from './routes/Countries'
import { Country } from './routes/Country'

export function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:slug" element={<Country />} />
      </Routes>
    </>
  )
}
