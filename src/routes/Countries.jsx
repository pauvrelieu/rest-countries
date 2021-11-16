import { useEffect, useState } from 'preact/hooks'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { CountryCard } from '../components/CountryCard'
import { SearchField } from '../components/SearchField'
import { Select } from '../components/Select'

const fakeLabel = 'Filter by region'

export function Countries() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
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

  const handleSearch = function (value) {
    setSearch(value)
  }

  const handleRegion = function (value) {
    value.toLowerCase()
    if (value.includes(fakeLabel)) {
      value = ''
    }
    setRegion(value)
  }

  return (
    <div class="countries">
      <div className="filters">
        <SearchField onSubmit={handleSearch} />
        <Select
          items={[fakeLabel, 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
          onChange={handleRegion}
        />
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
