import { useEffect, useState } from 'preact/hooks'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { CountryCard } from '../components/CountryCard'
import { SearchField } from '../components/SearchField'

export function Countries() {
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

  const handleSearch = function (value) {
    setSearch(value)
  }

  const handleRegion = function (e) {
    setRegion(e.target.value)
  }

  return (
    <div class="countries">
      <div className="filters">
        <SearchField onSubmit={handleSearch} />

        <select onChange={handleRegion}>
          <option value="">Filter by Region</option>
          {regions.map((region) => (
            <option key={region.toLowerCase()} value={region.toLowerCase()}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="countries-cards">
        {countries.map((country) => (
          <Link
            to={`${slugify(country.name, {
              lower: true,
              strict: true,
            })}?name=${country.name}`}
            key={country.name}
          >
            <CountryCard key={country.name} country={country} />
          </Link>
        ))}
      </div>
    </div>
  )
}