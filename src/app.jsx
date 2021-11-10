import { useEffect, useState } from 'preact/hooks'
import { CountryItem } from './components/CountryItem'

export function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    let endpoint = 'all'

    if (search) {
      endpoint = `name/${search}`
    }

    fetch(`https://restcountries.com/v2/${endpoint}`)
      .then((response) => response.json())
      .then(setCountries)
  }, [search])

  const handleInput = function (e) {
    setSearch(e.target.value)
  }

  return (
    <>
      <input type="text" onInput={handleInput} />

      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </>
  )
}
