import { useCallback, useEffect, useState } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { CountryCard } from '../components/CountryCard'
import { Loading } from '../components/Loading'
import { SearchField } from '../components/SearchField'
import { Select } from '../components/Select'
import { get } from '../utils/countriesApi'
import { getSlugify } from '../utils/functions'

const fakeLabel = 'Filter by region'

export function Countries() {
  const [state, setState] = useState({
    countries: [],
    isLoading: true,
    error: null,
  })
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

    get(endpoint).then(
      (countries) => {
        setState({
          isLoading: false,
          countries,
        })
      },
      (error) => {
        setState({
          isLoading: false,
          error,
        })
      }
    )
  }, [search, region])

  const handleSearch = useCallback(function (value) {
    setSearch(value)
  }, [])

  const handleRegion = function (value) {
    value.toLowerCase()
    if (value.includes(fakeLabel)) {
      value = ''
    }
    setRegion(value)
  }

  if (state.error) {
    return <Error />
  }

  if (state.isLoading) {
    return <Loading />
  }

  const regions = [fakeLabel, 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  return (
    <div class="countries">
      <div className="filters">
        <SearchField onSubmit={handleSearch} />
        <Select items={regions} onChange={handleRegion} />
      </div>

      <div className="countries-cards">
        {state.countries.map((country) => (
          <Link
            to={`${getSlugify(country.name)}?name=${country.name}`}
            key={country.name}
          >
            <CountryCard key={country.name} country={country} />
          </Link>
        ))}
      </div>
    </div>
  )
}
