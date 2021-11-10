import { useEffect, useState } from 'preact/hooks'
import { CountryItem } from './components/CountryItem'

export function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [regions, setRegions] = useState([])
  const [region, setRegion] = useState('')

  useEffect(() => {
    let endpoint = 'all'

    if (search) {
      endpoint = `name/${search}`
    }

    if (region) {
      endpoint = `region/${region}`
    }

    fetch(`https://restcountries.com/v2/${endpoint}`)
      .then((response) => response.json())
      .then(setCountries)
  }, [search, region])

  useEffect(() => {
    fetch('regions.json')
      .then((response) => response.json())
      .then(setRegions)
  }, [])

  const handleSearch = function (e) {
    setSearch(e.target.value)
  }

  const handleRegion = function (e) {
    setRegion(e.target.value)
  }

  return (
    <>
      <input type="text" onInput={handleSearch} />

      <select onChange={handleRegion}>
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region.toLowerCase()} value={region.toLowerCase()}>
            {region}
          </option>
        ))}
      </select>

      {countries.map((country) => (
        <CountryItem key={country.name} country={country} />
      ))}
    </>
  )
}