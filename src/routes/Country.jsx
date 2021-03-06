import { useEffect, useState } from 'preact/hooks'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { get } from '../utils/countriesApi'
import { getSlugify } from '../utils/functions'

export function Country() {
  const [country, setCountry] = useState({})
  const [bordersCountries, setBordersCountries] = useState([])
  let [searchParams, setSearchParams] = useSearchParams()
  let navigate = useNavigate()

  useEffect(() => {
    const name = searchParams.get('name')
    get(`name/${name}`).then((response) => setCountry(...response))
  }, [])

  useEffect(() => {
    const codes = country?.borders?.join()
    if (codes) {
      get(`alpha?codes=${codes}`).then(setBordersCountries)
    }
  }, [country])

  const handleClick = function (name) {
    const baseUrl = `${location.protocol}//${location.host}`
    location.assign(`${baseUrl}/${getSlugify(name)}?name=${name}`)
  }

  const currencies = country?.currencies?.map((c) => c.name).join(', ')
  const languages = country?.languages?.map((l) => l.name).join(', ')

  return (
    <div class="country">
      <div class="country__inner">
        <button onClick={() => navigate(-1)} class="country__back">
          <span>←</span> <span>Back</span>
        </button>
        <div class="country__details-container">
          <article class="country__article">
            <img
              src={country?.flags?.svg}
              alt={`The ${country.name} country flags`}
            />

            <div class="country__article-details">
              <h2>{country.name}</h2>

              <ul class="country__details">
                <li>
                  <strong>Native Name</strong>: {country.nativeName}
                </li>
                <li>
                  <strong>Population</strong>: {country.population}
                </li>
                <li>
                  <strong>Region</strong>: {country.region}
                </li>
                <li>
                  <strong>Sub Region</strong>: {country.subregion}
                </li>
                <li>
                  <strong>Capital</strong>: {country.capital}
                </li>
                <li>
                  <strong>Top Level Domain</strong>: {country.topLevelDomain}
                </li>
                <li>
                  <strong>Currencies</strong>: {currencies}
                </li>
                <li>
                  <strong>Languages</strong>: {languages}
                </li>
              </ul>
              {bordersCountries.length > 0 && (
                <footer>
                  <nav>
                    <h3 class="country__borders-title">Border Countries:</h3>
                    <ul>
                      {bordersCountries?.map((country) => (
                        <li key={country.name}>
                          <button onClick={() => handleClick(country.name)}>
                            {country.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </footer>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
