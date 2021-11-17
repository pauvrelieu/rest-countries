import { useCallback, useEffect, useState } from 'preact/hooks'
import { useNavigate } from 'react-router-dom'
import slugify from 'slugify'

export function Country() {
  const [country, setCountry] = useState({})
  const [bordersCountries, setBordersCountries] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    let params = new URLSearchParams(document.location.search.substring(1))
    const name = params.get('name')
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then((response) => response.json())
      .then((response) => setCountry(...response))
  }, [])

  useEffect(() => {
    const codes = country?.borders?.join()
    if (codes) {
      fetch(`https://restcountries.com/v2/alpha?codes=${codes}`)
        .then((response) => response.json())
        .then(setBordersCountries)
    }
  }, [country])

  const handleClick = useCallback(function (countryName) {
    location.pathname = slugify(countryName, { lower: true, strict: true })
    location.search = `name=${countryName}`
  }, [])

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
